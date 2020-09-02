function n2SimplePopoverInitLibrary() {	// Begin library code wrapper. Goes all the way to the bottom of the file
if (window.goN2LibMon) { goN2LibMon.beginLoad('simplePopover', 'n2CoreLibs'); }
window.N2SimplePopover=function() {
var oCfg = goN2U.getConfigurationObject('N2SimplePopover');
this.nEdgePad = oCfg.getValue('this.nEdgePad', 6);	// padding from screen edge to popup (when applicable)
this.nHotPad = oCfg.getValue('this.nHotPad', 2);        
this.className = 'N2SimplePopover';
this.version = '1.0.2';
this.myMouseOverCallback=n2MouseOverFeature;		// put here not in initialization
this.myMouseOutCallback=n2MouseOutFeature;		// put here not in initialization
this.myOnCloseCallback=n2OverlayClosed;			// put here not in initialization
this.myFeatureChangedCallback=n2OverlayChanged;	// put here not in initialization
this.myID=null;
this.popObj=null;
this.bIsVisible = false;
this.cursorCanLeavePopover = false;
this.staticTimer = null;
this.content = null;
this.nHAdjust=0;
this.nVAdjust=0;
this.nAnimateOpen=5;
this.nAnimateClose=4;
this.sAnimateOpenStyle = 'animatedBox';
this.sAnimateCloseStyle = 'animatedBoxHollow';
this.bLADSupported = true;
this.nLADTimeoutMs = 16000;	// ms to wait
this.nLADRetryMs = 250;		// ms delay between checks
this.sLADKey = null;		// gaTD[key] exists
this.sLADField = null;		// gaTD[<sID>].field or gaTD[key].field exists
this.sLADLoadingMessage = 'Loading...<img src="http://images.amazon.com/images/G/01/nav2/images/loading-bar.gif" height="9" align="absmiddle">';
this.sLADTimeoutMessage = "Unable to obtain necessary information. Please try again later";
this.bMoveHEContent = true;
}
new N2SimplePopover();
N2SimplePopover.prototype.initialize = function (id, objectName, dataArrayName, populateMethod, 
locateMethod, nHAdjust, nVAdjust) {
;
this.myID=id;		// ID of HTML layer element
this.objectName=objectName; 	// JS Object name
if(dataArrayName) { 
try {
this.aDataArray = eval(dataArrayName); 
}
catch(e) {
;
}
}
this.sDataArrayName = dataArrayName;	// JS Object name
;
this.popObj = this.createPopHTML(id, objectName, this.content);
this.popObj = goN2U.getRawObject(this.myID);
this.popObjStyle = goN2U.getObject(this.myID);
;
;
this._presetLocate(locateMethod, nHAdjust, nVAdjust);
};
N2SimplePopover.prototype.getObject = function () { return this.popObj; };
N2SimplePopover.prototype.simplePopoverInitialize = N2SimplePopover.prototype.initialize;
N2SimplePopover.prototype.setMouseOverCallback = function (fn) { this.myMouseOverCallback = fn; };
N2SimplePopover.prototype.setMouseOutCallback = function (fn) { this.myMouseOutCallback = fn; };
N2SimplePopover.prototype.setPopoverChangedCallback = function (fn) { this.myFeatureChangedCallback = fn; };
N2SimplePopover.prototype.setOnCloseCallback = function (fn) { this.myOnCloseCallback = fn; };
N2SimplePopover.prototype.getID = function() { return this.myID; };
N2SimplePopover.prototype.getObjectName = function() { return this.objectName; };
N2SimplePopover.prototype.setPopulate = function (fn) { this.populate = fn; };
N2SimplePopover.prototype.configureAnimation = function(nOpen, nClose, sOpenStyle, sCloseStyle) {
this.nAnimateOpen=nOpen;
this.nAnimateClose=nClose;
this.sAnimateOpenStyle = sOpenStyle;
this.sAnimateCloseStyle = sCloseStyle;
};
N2SimplePopover.prototype.configureLADSupport = function(b, sKey, sField, nTimeoutMs, nRetryMs, 
sLoadingMsg, sTimeoutMsg) {
this.bLADSupported = b; 
if (sKey)        {this.sLADKey = sKey;}
if (sField)      {this.sLADField = sField;}
if (nTimeoutMs)  {this.nLADTimeoutMs = nTimeoutMs;}
if (nRetryMs)   {this.nLADRetryMs = nRetryMs;}
if (sLoadingMsg) {this.sLADLoadingMessage = sLoadingMsg;}
if (sTimeoutMsg) {this.sLADTimeoutMessage = sTimeoutMsg;}
};
N2SimplePopover.prototype.show = function (oHotspot) {
this._showPrepare(oHotspot);
var sLinkID = oHotspot.sLinkID;
var oLNI = new N2LinkNameInfo(sLinkID);
var sID = oLNI.getID();
var sType = oLNI.getType();
var sParams = oLNI.getParams();
var sHref = oHotspot.href;
var sLinkText = oHotspot.linkText;
var re = /([^\\])'/gi;
sLinkText=sLinkText.replace(re, "$1\\'") ;
;
; 
this._hideTooltip(oHotspot.oLink);
this.setCurrentThingData (null, sID, sType, sParams, sLinkID, sHref, sLinkText);
this._showPopulate(null, sID, sType, sParams, sLinkID, sHref, sLinkText);
this._showLocate(oHotspot);
this.saveCurrentElementData();
};
N2SimplePopover.prototype._showPrepare = function (oHotspot) {
this.initialMouseOver=true;		
this.initialUpdate=true;
this.cursorCanLeavePopover = (oHotspot.staticFlag & 2);
if (this.makeStatic) { this.makeStatic(oHotspot.staticFlag); }
this.nLADRetries = 	this.nLADTimeoutMs/this.nLADRetryMs;
this.bLADLoading = false;
this.bWasLADDelayed = false;
window.focus();
goN2U.display(this.myID, 'inline'); 
this.bIsVisible = true;
this.hookEvents();
};
N2SimplePopover.prototype._showPopulate = function (sAction, sID, sType, sParams, sLinkID, sHref, sLinkText) {
this.populate(sAction, sID, sType, sParams, sLinkID, sHref, sLinkText);
};
N2SimplePopover.prototype._showLocate = function (oHotspot) {
this.updateLocation(true);
this.locate(oHotspot);
if (this.nAnimateOpen) {
var eTitlebar = goN2U.getObject(this.myID + '_titleBar');
goN2U.hide(this.myID);
if (eTitlebar) { goN2U.hide(this.myID + '_titleBar'); }	// kludge, since we don't HAVE a titlebar yet
this.hotLeft = oHotspot.absleft;
this.hotTop = oHotspot.abstop;
this.hotWidth = oHotspot.width;
this.hotHeight = oHotspot.height;
goN2U.animateBox(oHotspot.absleft, oHotspot.abstop, oHotspot.width, oHotspot.height,
this.left, this.top, this.width, this.height,
this.nAnimateOpen, 
eTitlebar ? new Function('','goN2U.show(\''+this.myID+'\'); goN2U.show(\'' + this.myID + '_titleBar\'); ' ) :
new Function('','goN2U.show(\''+this.myID+'\'); '),
this.sAnimateOpenStyle );
}
};
N2SimplePopover.prototype.hide = function () {
;
this.cursorCanLeavePopover = false;
goN2U.undisplay (this.myID); 
if (this.staticTimer) {
clearTimeout(this.staticTimer);
this.staticTimer = null;
}
this.bIsVisible = false;
if (this.currentRequest && this.oUpdateManager) {
this.oUpdateManager.cancelRequest(this.currentRequest);
}
if (this.myOnCloseCallback) {
this.myOnCloseCallback(this);
}
this.unhookEvents();
this.hideEx(); 
if (this.bMoveHEContent && this.sCurrentContent && this.sCurrentHeID) {
var eElem = goN2U.getRawObject(this.sCurrentHeID);
if (eElem) { 
eElem.innerHTML = this.sCurrentContent; 
} else { 
; 
}
this.sCurrentContent = '';
}
if (this.nAnimateClose) {
goN2U.animateBox(this.left, this.top, this.width, this.height,
this.hotLeft, this.hotTop, this.hotWidth, 1,
this.nAnimateClose, 
null, this.sAnimateCloseStyle );
}
};
N2SimplePopover.prototype.hideEx = function() {};
N2SimplePopover.prototype.setCurrentThingData  = function (action, id, type, params, linkID, href, linkText) {
this.action = action;
this.thingID   = id;
this.thingType = type;
this.thingParams = params;
this.linkID = linkID;
this.linkHref = href;
this.linkText = linkText;
this.sReftagHead='';
this.sReftagTail='';
if (href) {
;
var re = 'ref=([^_]*_[^_]*)(_[^\/]*)?';
var aResult = href.match(re);
if (aResult) {
;
this.sReftagHead = aResult[1];
this.sReftagTail = aResult[2];
}
}
};
N2SimplePopover.prototype.getReftagHead = function() { return this.sReftagHead; };
N2SimplePopover.prototype.getReftagTail = function() { return this.sReftagTail; };
N2SimplePopover.prototype.setContent = function (sHtml) {
sHtml = this.replacePlaceholders(sHtml);
this.popObj = goN2U.getRawObject(this.myID);
if (this.popObj === null) {
this.content = sHtml;
} else {
this.popObj.innerHTML = sHtml;
this.updateLocation(true);
}
};
N2SimplePopover.prototype.getContent = function () {
var sHtml;
this.popObj = goN2U.getRawObject(this.myID);
if (this.popObj === null) {
sHtml = this.content;
} else {
sHtml = this.popObj.innerHTML;
}
return sHtml;
};
N2SimplePopover.prototype.replacePlaceholders = function (sHtml) {
;
if (goN2U.isUndefOrNull(sHtml)) {
return '';
}
if ( sHtml.indexOf('{') == -1) { return sHtml; }
sHtml = sHtml.replace(/{REFTAG_HEAD}/g, this.getReftagHead());
sHtml = sHtml.replace(/{REFTAG_TAIL}/g, this.getReftagTail());
if (this.oUpdateManager) {
sHtml = sHtml.replace(/{SESSION_ID}/g, this.oUpdateManager.sessionID ? this.oUpdateManager.sessionID : '');
}
sHtml = sHtml.replace(/{POPOVER_ID}/g, this.myID);
return  sHtml.replace(/{POPOVER_OBJECT}/g, this.objectName);
};
N2SimplePopover.prototype.getDataArray = function() { return this.aDataArray; };
N2SimplePopover.prototype.getPopoverElementID = function() { return this.myID; };	
N2SimplePopover.prototype.isActive = function() { return this.bIsVisible; };			// we assume for now that if its visible, it IS active.
N2SimplePopover.prototype.isVisible = function() { return this.bIsVisible; };
N2SimplePopover.prototype.isStatic = function() { return this.cursorCanLeavePopover; };
N2SimplePopover.prototype._presetLocate = function (locateMethod, nHAdjust, nVAdjust) {
this.nHAdjust = nHAdjust ? nHAdjust : 0; 
this.nVAdjust = nVAdjust ? nVAdjust : 0;
if (goN2U.isUndefined(locateMethod) || locateMethod == 'auto') {
this.locate = this._locateLinkAdjacent;
} else if (locateMethod == 'window_center' ) {
this.locate = this._locateWindowCenter;
} else if (locateMethod == 'below_above' ) {
this.locate = this._locateLinkBelowAbove;
} else if (locateMethod == 'left' ) {
this.locate = this._locateLinkLeft;
} else if (locateMethod == 'right' ) {
this.locate = this._locateLinkRight;
} else if (locateMethod == 'above' ) {
this.locate = this._locateAboveLink;
} else if (locateMethod == 'below' ) {
this.locate = this._locateBelowLink;
} else {
;
this.locate = this._locateLinkAdjacent;
}
return this.locate;
};
N2SimplePopover.prototype._locateLinkAdjacent = function (oHotspot) {
var popX;
var popY;
var bOverlapsHotspot = false;
if (oHotspot.availLeft < oHotspot.availRight ) {
this.expandsH ='r';
} else {
this.expandsH ='l';
}
if (this.expandsH == 'l') {	
if (this.width + this.nHotPad < oHotspot.availLeft) {
popX = oHotspot.absleft - this.width - this.nHotPad;
} else {
popX = this.nEdgePad;
}
} else {
if (oHotspot.availRight > this.width) {
popX = oHotspot.absleft +  oHotspot.width + this.nHotPad;
} else {
var nWindowWidth = goN2U.getInsideWindowWidth();
var nWindowRight = document.body.scrollLeft + nWindowWidth;
popX = nWindowRight - this.width - 6;
bOverlapsHotspot = true;
}
}
var totalAvailFromLinkTop = oHotspot.height + oHotspot.availUnder;
if (bOverlapsHotspot && this.height <= oHotspot.availUnder) {
popY = oHotspot.abstop + oHotspot.height + 2;
} else if (this.height <= totalAvailFromLinkTop) {
popY = oHotspot.availAbove > 0 ? oHotspot.abstop : oHotspot.abstop - oHotspot.availAbove;
}  else {
popY = oHotspot.abstop - (this.height-totalAvailFromLinkTop+this.nEdgePad);	
}
this._doLocate(popX, popY);
};
N2SimplePopover.prototype._doLocate = function (popX, popY) { 
goN2U.shiftTo(this.myID, popX, popY);
this.updateLocation();
this.initialLeft = this.left;
this.initialTop = this.top;
;	
};
N2SimplePopover.prototype._locateLinkRight = function (oHotspot) {
var popX = oHotspot.absleft + oHotspot.width;
var popY = oHotspot.abstop;
var nHAdj = this.nHAdjust;
var nVAdj = this.nVAdjust;
if (nVAdj == 'c') { 
nVAdj = parseInt(oHotspot.height/2 - this.height/2);
} else if (nVAdj == 'b') { 
nVAdj = oHotspot.height-this.height; 
}
this._doLocate (popX + nHAdj, popY + nVAdj);
};
N2SimplePopover.prototype._locateLinkLeft = function (oHotspot) {
var popX = oHotspot.absleft - this.width;
var popY = oHotspot.abstop;
var nHAdj = this.nHAdjust;
var nVAdj = this.nVAdjust;
if (nVAdj == 'c') { 
nVAdj = parseInt(oHotspot.height/2 - this.height/2); 
} else if (nVAdj == 'b') { 
nVAdj = oHotspot.height-this.height; 
}
this._doLocate (popX + nHAdj, popY + nVAdj);
};
N2SimplePopover.prototype._locateBelowLink = function (oHotspot) {
var popX = oHotspot.absleft;
var popY = oHotspot.abstop + oHotspot.height;
var nHAdj = this.nHAdjust;
var nVAdj = this.nVAdjust;
if (nHAdj == 'c') { 
nHAdj = parseInt(oHotspot.width/2 - this.width/2);
} else if (nHAdj == 'r') {
nHAdj = oHotspot.width-this.width;
}
this._doLocate (popX + nHAdj, popY + nVAdj);
};
N2SimplePopover.prototype._locateAboveLink = function (oHotspot) {
var popX = oHotspot.absleft;
var popY = oHotspot.abstop - this.height;
var nHAdj = this.nHAdjust;
var nVAdj = this.nVAdjust;
if (nHAdj == 'c') { 
nHAdj = parseInt(oHotspot.width/2 - this.width/2);
} else if (nHAdj == 'r') { 
nHAdj = oHotspot.width-this.width;
}
this._doLocate (popX + nHAdj, popY + nVAdj);
};
N2SimplePopover.prototype._locateLinkBelowAbove = function (oHotspot) {
var popX;
var popY;
var nXOffset = 100;
var nXOffsetL = 20;
var totalAvailFromLinkLeft = oHotspot.availRight + oHotspot.width;
if (this.width < (totalAvailFromLinkLeft - nXOffset) ) {
this.expandsH ='r';
} else {
this.expandsH ='l';
}
this.availDown = oHotspot.availUnder + oHotspot.height;
this.availUp = oHotspot.availAbove;
if (this.availUp < this.availDown - this.height ) {
this.expandsV = 'd';
} else {
this.expandsV = 'u';
}
if (this.expandsH == 'l') {	
if (this.width + this.nHotPad < oHotspot.availLeft) {
popX = oHotspot.absleft - this.width - this.nHotPad + nXOffsetL;
} else {
popX = this.nEdgePad;
}
} else {
if (oHotspot.width >120) {
popX = oHotspot.absleft +  nXOffset;
} else {
popX = oHotspot.absleft +  oHotspot.width - nXOffsetL;
}
}
var totalAvailFromLinkTop = oHotspot.height + oHotspot.availUnder;
if (this.height <= oHotspot.availUnder) {
popY = oHotspot.abstop + oHotspot.height + this.nHotPad;
} else {
popY = oHotspot.abstop - (this.height-totalAvailFromLinkTop+this.nEdgePad);
if (oHotspot.width < 120) {
if (this.expandsH == 'r') {
popX = oHotspot.absleft + oHotspot.width + this.nHotPad;
} else {
popX = oHotspot.absleft - this.width - this.nHotPad;
}
}
}
this._doLocate(popX, popY);
};
N2SimplePopover.prototype._locateWindowCenter = function (oHotspot) {
var popX = Math.max(document.body.scrollLeft+((goN2U.getInsideWindowWidth()-this.width)/2), this.nEdgePad);
var popY = Math.max(document.body.scrollTop+((goN2U.getInsideWindowHeight()-this.height)/2), this.nEdgePad);
this._doLocate(popX, popY);
};
N2SimplePopover.prototype.createPopHTML = function (id, objectID, content) {
var gp = '';
gp+='<span id="' + id + '" class="n2Pop" style="display:none; left:0px; top:0px;"';
gp+='onMouseOver="' + objectID + '.mouseOver();" onMouseOut="' + objectID + '.mouseOut(event);"';
gp+='onMouseMove="' + objectID + '.mouseMove(event);">';
gp+='<span class="n2">';
if (content) { 
gp+=content;
} else { 
gp+='-- CONTENT GOES HERE (simple)--';
}
gp+='</span>';
gp+='</span>';
var spanEl = document.createElement("span");
spanEl.innerHTML = gp;
//if(typeof(document.body.childNodes[0])=="object"){
//alert(document.body.childNodes[0].tagName);}
document.body.insertBefore(spanEl,document.body.childNodes[0]);
};
N2SimplePopover.prototype.saveCurrentElementData = function() { };
N2SimplePopover.prototype._defaultPopulate = function(sAction, sID, sType, sParams, sLinkID, sHref, sLinkText) {
;
if (this.bLADSupported) {
if (!this.isDataAvailable(sAction, sID, sType, sParams, sLinkID, sHref, sLinkText)) {
return false;
}
}
switch (sType) {
case 'he': // id of an HTML element
this.populateUsingElementContents(sID);	
break;
case 'ak': // array key
this.populateUsingArrayContents(sID);	
break;
case 'a':
case 'am':
case 'n':
case 's':
case 'l':
break;
default:
;		
}
if (this.bLADLoading) {
this.sizeOrPositionChanged();
}
return true;
};
N2SimplePopover.prototype.populate = N2SimplePopover.prototype._defaultPopulate;
N2SimplePopover.prototype.populateUsingElementContents = function(id, type, linkID, href, linkText) {
;
;
var eElem = goN2U.getRawObject(id);
if (eElem) { 
this.setContent(eElem.innerHTML);
if (this.bMoveHEContent) {
this.sCurrentContent = eElem.innerHTML;
this.sCurrentHeID = id;
eElem.innerHTML = '';
}
} else {
;
}
};
N2SimplePopover.prototype.populateUsingArrayContents = function(id, type, linkID, href, linkText) {
;
;
if (goN2U.isDefined(this.aDataArray) ) {
if (goN2U.isDefined(this.aDataArray[id])) {
this.setContent(this.aDataArray[id]);
} else {
;
}
}
else {
;
}
};
N2SimplePopover.prototype.isDataAvailable = function(sAction, sID, sType, sParams, sLinkID, sHref, sLinkText) {
;
;
if ( this._isDataAvailable (sAction, sID, sType, sParams, sLinkID,
this.sLADKey, this.sLADField) ) {
return true;
} else {
if (--this.nLADRetries && this.isVisible()) {
if (!this.bLADLoading) {
this.setContent(this.sLADLoadingMessage);
this.bLADLoading = true;
}
setTimeout (new Function("", this.objectName + ".populate(" +
"'" + (sAction ? sAction : 'null') + "'," +
"'" + (sID ? sID : 'null') + "'," +
"'" + (sType ? sType : 'null') + "'," +
"'" + (sParams ? sParams : 'null') + "'," +
"'" + (sLinkID ? sLinkID : 'null') + "'," +
"'" + (sHref ? sHref : 'null') + "'," +
"'" + (sLinkText ? sLinkText : 'null') + "'" + 
");"),
this.nLADRetryMs);
} else {
;
this.setContent(this.sLADTimeoutMessage);
}
return false;
} 
};
N2SimplePopover.prototype._isDataAvailable = function(sAction, sID, sType, sParams, sLinkID,
sKey, sField) {
;
;
var bIsAvailable = true;
switch(sType) {
case 'he': // id of an HTML element
if ( sKey && goN2U.getRawObject(sKey)=== null ) {
bIsAvailable = false;
} else if ( goN2U.getRawObject(sID)=== null )	{
bIsAvailable = false;
} 
break;
case 'ak': // array key
if (this.aDataArray) {
if ( sKey && goN2U.isUndefined(this.aDataArray[sKey]) ) {
bIsAvailable = false;
} else if ( goN2U.isUndefined(this.aDataArray[sID]) ) {
bIsAvailable = false;
} 
}
break;
case 'a':	// key is an ASIN (which means that the aDataArray should usually point ot gaTD)
case 'am':
var sTDKey = sType+sID;
if (this.aDataArray) {
if ( // an entry for this key
goN2U.isUndefined(this.aDataArray[sTDKey]) ||	
( sField && goN2U.isUndefined(this.aDataArray[sTDKey][sField]) ) ||  
( sKey && goN2U.isUndefined(this.aDataArray[sKey]) ) ||
( sKey && sField && goN2U.isUndefined(this.aDataArray[sKey][sField]) )) {
bIsAvailable = false;
} 
}
break;
}
;
return bIsAvailable;
};
N2SimplePopover.prototype.sizeOrPositionChanged = function () { 
if (this.myFeatureChangedCallback) { 
this.myFeatureChangedCallback(this); 
}
};
N2SimplePopover.prototype.updateLocation = function (flag){
var po = this.popObj;
this.left   = goN2U.getObjectLeft(po);		
this.top    = goN2U.getObjectTop(po);	
this.width  = goN2U.getObjectWidth(po);
this.height = goN2U.getObjectHeight(po);
this.right = this.left + this.width;
this.bottom = this.top + this.height;
};
N2SimplePopover.prototype.mouseOver = function () {
if (this.initialMouseOver) {
;
this.initialMouseOver = false;
var ret = true;
if (this.myMouseOverCallback) {
;
ret = this.myMouseOverCallback(this);
}
if (ret) {
}
}
};
N2SimplePopover.prototype.mouseMove = function (evt) {
if (this.initialMouseOver) {
this.mouseOver();
}
};
N2SimplePopover.prototype.mouseOut = function (evt) {
var inPop = true;
evt = (evt) ? evt : ((window.event) ? window.event : null);
if (evt) {
if (goN2U.bIsIE) {
inPop = goN2U.elementIsContainedBy(evt.toElement, this.popObj);
} else {
var x = evt.pageX;
var y = evt.pageY;
var po = this.popObj;
var left = goN2U.getPageElementLeft(po);
var top = goN2U.getPageElementTop(po);
if ( (x <= left) || ( y <= top+1) || 
(x > left + this.width) ||
(y > top + this.height) ) {
inPop = false;
}
}
} 
if (!inPop && !this.cursorCanLeavePopover && !this.buttonIsDown) {
;
this.initialMouseOver = true;
var ret = true;
if (this.myMouseOutCallback) {
;
ret = this.myMouseOutCallback(this);
;			
} 
if (ret) {
;			
this.hide();
}
}
};
N2SimplePopover.prototype._hideTooltip = function (oLink) {
var firstChild = oLink.firstChild;
if (firstChild && firstChild.alt) {
this.sImgAlt = firstChild.alt;
firstChild.alt = '';
}
};
N2SimplePopover.prototype.hookEvents = function () { };
N2SimplePopover.prototype.unhookEvents = function () { };
if (window.goN2LibMon) { goN2LibMon.endLoad('simplePopover'); }
} // END library code wrapper
n2RunIfLoaded("events", n2SimplePopoverInitLibrary, "simplepopover");
