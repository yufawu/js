if (window.goN2LibMon) goN2LibMon.beginLoad('utilities', 'n2CoreLibs');
function N2Utilities() {
this.className = 'N2Utilities';
this.version = '1.0.0';
this.revision= '$Revision: #38 $';
this.initialized = false;
this.bIsCSS;
this.bIsW3C;
this.bIsIE4;
this.bIsNN4;
this.bIsIE6CSS;
this.bIsIE;
this.browser_version;
//! * **********************************************************************
//! The following section of this file code was mainly adapted from: 
//! "Dynamic HTML:The Definitive Reference"
//! 2nd Edition
//! by Danny Goodman
//! Published by O'Reilly & Associates  ISBN 1-56592-494-0
//! http://www.oreilly.com
//! http://www.amazon.com/exec/obidos/tg/detail/-/0596003161/qid=1049505315
//! Copyright 2002 Danny Goodman.  All Rights Reserved.
//! Some minor changes and additions have been made to suit the 
//! current application requirements and to enhance functionality.
//! ************************************************************************ 
this.initDHTMLAPI = function () {
if (document.images) {
this.bIsCSS = (document.body && document.body.style) ? true : false;
this.bIsW3C = (this.bIsCSS && document.getElementById) ? true : false;
this.bIsIE4 = (this.bIsCSS && document.all) ? true : false;
this.bIsNN4 = (document.layers) ? true : false;
this.bIsIE6CSS = (document.compatMode && document.compatMode.indexOf("CSS1") >= 0) ? true : false;
}
}
this.seekLayer = function (oDoc, sName) {
var elem;
for (var i = 0; i < oDoc.layers.length; i++) {
if (oDoc.layers[i].name == sName) {
elem = oDoc.layers[i];
break;
}
if (oDoc.layers[i].document.layers.length > 0) {
elem = this.seekLayer(document.layers[i].document, sName);
}
}
return elem;
}
this.getRawObject = function (obj) {
;
}
this._getRawObject = function (obj) {
var elem;
; 
if (!obj) {
return null;
}
if (typeof obj == "string") {
if (this.bIsW3C) {
elem = document.getElementById(obj);
} else if (this.bIsIE4) {
elem = document.all(obj);
} else if (this.bIsNN4) {
elem = this.seekLayer(document, obj);
}
if ( this.isUndefOrNull(elem) ) {
;
}		
} else {
elem = obj;
}
return elem;
}
this.getObject = function (obj) {
var elem = this.getRawObject(obj);
if (elem && this.bIsCSS) {
elem = elem.style;
}
return elem;
}
this.shiftTo = function (obj, x, y) {
var elem = this.getObject(obj);
if (elem) {
if (this.bIsCSS) {
var units = (typeof elem.left == "string") ? "px" : 0; 
elem.left = x + units;
elem.top = y + units;
} else if (this.bIsNN4) {
elem.moveTo(x,y)
}
}
}
this.shiftBy = function (obj, deltaX, deltaY) {
var elem = this.getObject(obj);
if (elem) {
if (this.bIsCSS) {
var units = (typeof elem.left == "string") ? "px" : 0; 
elem.left = this.getObjectLeft(obj) + deltaX + units;
elem.top = this.getObjectTop(obj) + deltaY + units;
} else if (this.bIsNN4) {
elem.moveBy(deltaX, deltaY);
}
}
}
this.setZIndex = function (obj, zOrder) {
var elem = this.getObject(obj);
if (elem) {	elem.zIndex = zOrder; }
}
this.setBGColor = function (obj, color) {
var elem = this.getObject(obj);
if (elem) {
if (this.bIsNN4) {
elem.bgColor = color;
} else if (this.bIsCSS) {
elem.backgroundColor = color;
}
}
}
this.show = function (obj) {
var elem = this.getObject(obj);
if (elem) {	elem.visibility = "visible"; }
}
this.hide = function (obj) {
var elem = this.getObject(obj);
if (elem) {	elem.visibility = "hidden";	} 
}
this.MOZALPHAMAX = 255./256.;
this.getAlphaLevel = function (rawObj) {
var elem = this.getRawObject(rawObj);
var ret;
if (elem) {
if (elem.filters && elem.filters.alpha) {
ret = elem.filters.alpha.opacity;
} else {
var style = elem.style;
if (elem.style && !this.isUndefined(elem.style.MozOpacity)) {
var strOpacity = elem.style.MozOpacity;
if (strOpacity.length > 0) {
ret = parseFloat(elem.style.MozOpacity);
if (ret >= this.MOZALPHAMAX && !this.isUndefined(elem.style.azdMozOpacity)) {
var saved = parseFloat(elem.style.azdMozOpacity);
if (elem.style.azdMozOpacity >= this.MOZALPHAMAX) {
ret = saved;
}
}
ret = ret * 100;
} else {
ret = 100; // presume that no set opacity means opaque
}
}
}
}
if (this.isUndefined(ret)) {
;
}
return ret;
}
this.setAlphaLevel = function (rawObj, level) {
level = (level <= 0 ? 0 : (level >= 100 ? 100 : level));
var elem = this.getRawObject(rawObj);
;
if (elem) {
if (elem.filters && elem.filters.alpha) {
elem.filters.alpha.opacity = level;
} else  if (elem.style && !this.isUndefined(elem.style.MozOpacity)) {
var reqLevel = level * 0.01;
var mozLevel = (reqLevel > this.MOZALPHAMAX ? this.MOZALPHAMAX : reqLevel);
if (mozLevel != reqLevel) {
;
}
elem.style.MozOpacity = mozLevel;
elem.style.azdMozOpacity = "" + reqLevel; // store as string (just as MozOpacity is) to get same rounding
} else {
;
}
} 
}
this.getObjectLeft = function (obj)  {
var elem = this.getRawObject(obj);
var result = 0;
if (elem) {
if (document.defaultView) {
var style = document.defaultView;
var cssDecl = style.getComputedStyle(elem, "");
result = cssDecl.getPropertyValue("left");
} else if (elem.currentStyle) {
result = elem.currentStyle.left;
} else if (elem.style) {
result = elem.style.left;
} else if (this.bIsNN4) {
result = elem.left;
}
if (isNaN(result)) {
result = this.getPageElementLeft(elem);
}
}
return parseInt(result);
}
this.getObjectTop = function (obj)  {
var elem = this.getRawObject(obj);
var result = 0;
if (elem) {
if (document.defaultView) {
var style = document.defaultView;
var cssDecl = style.getComputedStyle(elem, "");
result = cssDecl.getPropertyValue("top");
} else if (elem.currentStyle) {
result = elem.currentStyle.top;
} else if (elem.style) {
result = elem.style.top;
} else if (this.bIsNN4) {
result = elem.top;
}
}
if (isNaN(result)) {
result = this.getPageElementTop(elem);
}
return parseInt(result);
}
this.getObjectWidth = function (obj)  {
var elem = this.getRawObject(obj);
var result = 0;
if (elem) {
if (elem.width && this.isMozilla5()) {
result = elem.width;
} else if (elem.offsetWidth) {
result = elem.offsetWidth;
} else if (elem.clip && elem.clip.width) {
result = elem.clip.width;
} else if (elem.style && elem.style.pixelWidth) {
result = elem.style.pixelWidth;
}
}
return parseInt(result);
}
this.getObjectHeight = function (obj)  {
var elem = this.getRawObject(obj);
var result = 0;
if (elem) {
if (elem.height && this.isMozilla5()) {
result = elem.height;
} else if (elem.offsetHeight) {
result = elem.offsetHeight;
} else if (elem.clip && elem.clip.height) {
result = elem.clip.height;
} else if (elem.style && elem.style.pixelHeight) {
result = elem.style.pixelHeight;
}
}
return parseInt(result);
}
this.getInsideWindowWidth = function () {
if (window.innerWidth) {
return window.innerWidth;
} else if (this.bIsIE6CSS) {
return document.body.parentElement.clientWidth
} else if (document.body && document.body.clientWidth) {
return document.body.clientWidth;
}
return 0;
}
this.getInsideWindowHeight = function () {
if (window.innerHeight) {
return window.innerHeight;
} else if (this.bIsIE6CSS) {
return document.body.parentElement.clientHeight
} else if (document.body && document.body.clientHeight) {
return document.body.clientHeight;
}
return 0;
}
//! ************************************************************
//! 	END CODE derived from "Dynamic HTML:The Definitive Reference"
//! 	2nd Edition
//! 	by Danny Goodman
//! 	Published by O'Reilly & Associates  ISBN 1-56592-494-0
//! 	http://www.oreilly.com
//! 	Copyright 2002 Danny Goodman.  All Rights Reserved. 
//! ################################################################
//! All the code that follows is Copyright 2003 Amazon.com.
//! All Rights Reserved.
//! ************************************************************ 
//! Copyright (c) Amazon.com 2003, 2004.  All Rights Reserved.
//! Not to be reused without permission
//! ################################################################
this.initialize = function () {
this.initDHTMLAPI();
var agid = navigator.userAgent.toLowerCase();
this.bIsIE = (agid.indexOf("msie") != -1);
this.bIsGecko = (agid.indexOf("gecko") != -1);
this.bIsFirefox = (agid.indexOf("firefox") != -1);
this.browser_version = parseInt(navigator.appVersion);
this.getRawObject = this._getRawObject;	// rest to use the correct fn.
this.sAnimationDivID = 'goN2UAnimatedBox';
this.bAnimateBoxRunning = false;
this.initialized = true;
;
}
this.isIE = function () { return this.bIsIE; }
this.isW3C = function () { return this.bIsW3C; }
this.isMozilla5 = function () { return this.bIsGecko && this.browser_version>=5; }
this.isFirefox = function () { return this.bIsFirefox && this.browser_version>=5; }
this.exists = function(obj) {
return ( !this.isUndefOrNull(this.getRawObject(obj)) );
}
this.display = function (obj, type) {
var elem = this.getObject(obj);
if (elem) {
if (this.bIsIE || this.isMozilla5())
elem.display = type ? type : "block";
else {
elem.display = "block";
}
}
}
this.undisplay = function (obj) {
var elem = this.getObject(obj);
if (elem) {
elem.display = 'none';
} 
}
this.toggleDisplay = function (obj, type) {
var elem = this.getObject(obj);
if (elem) {
if (elem.display == 'none')
this.display (obj, type);
else 
this.undisplay(obj);
}
}
this.toggleDualDisplay = function (obj1, obj2) {
this.toggleDisplay(obj1);
this.toggleDisplay(obj2);
}
this.adjustBy = function (obj, deltaX, deltaY, deltaW, deltaH) {
var elem = this.getObject(obj);
if (elem) {
if (this.bIsCSS) {
var units = (typeof elem.left == "string") ? "px" : 0; 
elem.left = this.getObjectLeft(obj) + deltaX + units;
elem.top = this.getObjectTop(obj) + deltaY + units;
elem.width = this.getObjectWidth(obj) + deltaW; // + units;
elem.height = this.getObjectHeight(obj) + deltaH; // + units;
} else if (this.bIsNN4) {
elem.moveBy(deltaX, deltaY);
}
}
}
this.clip = function (obj, nTop, nRight, nBottom, nLeft) {
var elem = this.getObject(obj);
elem.clip = "rect("+nTop+"px, " + nRight + "px, "+nBottom+"px, "+nLeft+"px)";		
}
this.setContent = function (sID, sHtml, sClass) {
var relem = this.getRawObject(sID);
if (relem) relem.innerHTML = sHtml;
if (sClass) this.setClass(sID, sClass);
}
this.setWidth = function (obj, w) {
var elem = this.getObject(obj);
if (elem) elem.width = w;
}
this.setHeight = function (obj, h) {
var elem = this.getObject(obj);
if (elem) elem.height = h;
}
this.getScrolledElementTop = function (elem) {
var top = this.getPageElementTop(elem);
if (elem) {
var bod = document.body;
var docParent = this.getParentElement(elem);
while (docParent !== null && docParent !== bod) {
top -= docParent.scrollTop;
docParent = this.getParentElement(docParent);
}                                      
}
return top;                           
}
this.getScrolledElementLeft = function (elem)	{
var left = this.getPageElementLeft(elem);
if (elem) {
var bod = document.body;
var docParent = this.getParentElement(elem);
while (docParent !== null && docParent !== bod) {
left -= docParent.scrollLeft;
docParent = this.getParentElement(docParent);
}                                      
}
return left;
}
this.getPageElementTop = function (elem) {
var top=0;
if (elem) {
top = elem.offsetTop;         
var parentObj = elem.offsetParent;  
while (parentObj != null) {
if(this.bIsIE) {
if( (parentObj.tagName != "TABLE") && (parentObj.tagName != "BODY") ) 
top += parentObj.clientTop; 
}
else {
if(parentObj.tagName == "TABLE") {
var nParBorder = parseInt(parentObj.border);
if(isNaN(nParBorder)) { 
var nParFrame = parentObj.getAttribute('frame');
if(nParFrame != null)
top += 1;
} else if(nParBorder > 0) {
top += nParBorder;        
}
}
}
top += parentObj.offsetTop;      
parentObj = parentObj.offsetParent; 
}                                      
}
return top;                           
}
this.getPageElementLeft = function (elem)	{
var left=0;
if (elem) {
left = elem.offsetLeft;         
var parentObj = elem.offsetParent;  
while (parentObj != null) {
if(this.bIsIE) {
if( (parentObj.tagName != "TABLE") && (parentObj.tagName != "BODY") ) 
left += parentObj.clientLeft; 
}
else {
if(parentObj.tagName == "TABLE") {
var nParBorder = parseInt(parentObj.border);
if(isNaN(nParBorder)) { 
var nParFrame = parentObj.getAttribute('frame');
if(nParFrame != null)
left += 1;
} else if(nParBorder > 0) {
top += nParBorder;        
}
}
}
left += parentObj.offsetLeft;      
parentObj = parentObj.offsetParent; 
}                                      
}
return left;
}
this.getParentElement = function (elem) {
if (elem) {
if(this.bIsIE) return elem.parentElement;
return elem.parentNode; 
}
return null;
}
this.elementIsContainedBy = function(elem, elemParent) {
if (goN2U.isUndefOrNull(elem) || goN2U.isUndefOrNull(elemParent)) {
return false;
}
while (true) {
if (elem === elemParent) {
return true;
}
var parent = this.getParentElement(elem);
if (parent === null) {
return false;
}
elem = parent;
}
}
this.classfixup;
if (document.all) this.classfixup = "className";
else this.classfixup = "class";
this.setClass = function (obj, style) {
var obj = this.getRawObject (obj);
;
if (obj) obj.setAttribute(this.classfixup, style,0);
}
this.getClassX = function (obj) {
var obj = this.getRawObject (obj);
if (obj) return obj.getAttribute(this.classfixup, 0);
return null;
}
this.addComma = function addComma(sNum) {
if (typeof sNum != "string") sNum = sNum.toString();
var aV = sNum.split('.');
sNum = aV[0];
var p0, p1, len, x=3;
if (sNum.length >x) {
for (x=3;(len=sNum.length)>x;x+=4 ) {
p0 = sNum.substring(0, len-x);
p1 = sNum.substring(len-x);
sNum = p0 +',' + p1;
}
}
if (aV[1]>=0)	sNum += '.' + aV[1];
return sNum;
}
this.preloadImages = new Array();
this.preloadImage = function (sImage, id) {
if (!id) id=this.preloadImages.length;
if (!this.preloadImages[id]) {
this.preloadImages[id]=new Image();
this.preloadImages[id].src=sImage;
;
}
}
this.getLinkNameInfo = function (sLinkID, sNameOverride) {
var oLNI = new N2LinkNameInfo(sLinkID, sNameOverride);
return (oLNI.getLinkID() ? oLNI : null);
}	
this.getIFrameDocument = function (id) {
var oIFrame = this.getRawObject(id);
if (oIFrame) {
if (oIFrame.contentDocument) {
return oIFrame.contentDocument; 
} else if (oIFrame.contentWindow) {
return oIFrame.contentWindow.document;
} else if (oIFrame.document) {
return oIFrame.document;
}
}
return null;
}
this.n2FlashElement = function (id, styleOn, styleOff, count) {
n2DoFlashElement (id, styleOn, styleOff, count*2); 
}
this.n2DoFlashElement = function (id, styleOn, styleOrig, count) {
count--;
if (count % 2)
setClass(id, styleOn);
else
setClass(id, styleOrig);
if (count) {
setTimeout("n2DoFlashElement('" + id +"','" + styleOn + "','" + styleOrig + "'," + count +")", 500);
}
} 
this.animateBox = function (sl, st, sw, sh, fl, ft, fw, fh, nSteps, fnDone, style) {
var nHInc = parseInt((fl -sl)/nSteps);
var nVInc = parseInt((ft -st)/nSteps);
var nWdInc = parseInt((fw-sw)/nSteps);
var nHtInc = parseInt((fh-sh)/nSteps);
var o = goN2U.getRawObject(this.sAnimationDivID);
if (o && !this.bAnimateBoxRunning) {
this.bAnimateBoxRunning = true;
if (style) goN2U.setClass(this.sAnimationDivID, style);
goN2U.shiftTo(o, sl, st);
goN2U.show(o);
goN2U.setWidth(o, sw);
goN2U.setHeight(o, sh);
setTimeout("goN2U._animateBox('"+this.sAnimationDivID+"',"+nHInc+","+nVInc+","+nWdInc+","+nHtInc+","+nSteps+","+fnDone+")", 25);
} else if (fnDone) {
fnDone();
}
}
this._animateBox = function (sID, nHInc, nVInc, nWdInc, nHtInc, nSteps, fnDone) {
goN2U.adjustBy(sID, nHInc, nVInc, nWdInc, nHtInc);
if (--nSteps >0) {
setTimeout("goN2U._animateBox('"+sID+"',"+nHInc+","+nVInc+","+nWdInc+","+nHtInc+","+nSteps+","+fnDone+")", 25);
} else {
goN2U.hide(sID);
if (fnDone) fnDone();
this.bAnimateBoxRunning = false;
}
}
this.expDivProcessing = false;
this.expDivSize = 30;
this.stepDone = true;
this.expandDivWidth = function (theDiv, hidableElem, delay, fnDone, displayableElem){
this.expandDivDual('w', theDiv, hidableElem, delay, fnDone, displayableElem);
}
this.expandDivHeight = function (theDiv, hidableElem, delay, fnDone, displayableElem){
this.expandDivDual('h', theDiv, hidableElem, delay, fnDone, displayableElem);
}
this.collapseDivWidth = function (theDiv, hidableElem, delay, fnDone, displayableElem){
this.collapseDivDual('w', theDiv, hidableElem, delay, fnDone, displayableElem);
}
this.collapseDivHeight = function (theDiv, hidableElem, delay, fnDone, displayableElem){
this.collapseDivDual('h', theDiv, hidableElem, delay, fnDone, displayableElem);
}
this.collapseExpandDivsWidth = function (divA, divB, delay){
this.collapseExpandDivsDual ('w', divA, divB, delay);
}
this.collapseExpandDivsHeight = function (divA, divB, delay){
this.collapseExpandDivsDual ('h', divA, divB, delay);
}
this.expandCalcStep = function (h) {
if (h <40) return h;
if (h <225) return 20;	//15
if (h <900) return parseInt(h/10); // h/15
return 100;	// 60
}
this.expandDivDual = function (mode, theDiv, hidableElem, delay, fnDone, displayableElem){
if (this.expDivProcessing) return;
this.expDivProcessing = true;
var theDivObj = this.getRawObject(theDiv);
var parentDiv = theDivObj.parentNode;
if (!parentDiv.id) { parentDiv.id = 'outer_' + theDivObj.id; }
this.expDivSize=0;
var maxSize;
if (mode == 'w' ) {
this.setWidth(parentDiv, this.expDivSize);
this.display(parentDiv);
maxSize = this.getObjectWidth(theDivObj);
} else {
this.setHeight(parentDiv, this.expDivSize);
this.display(parentDiv);
maxSize = this.getObjectHeight(theDivObj);
}
if (hidableElem) this.undisplay(hidableElem);
if (displayableElem) { this.display(displayableElem); }
if (!delay || delay<20) { delay = 20; }
var step = 2;
this._expandDual(mode, parentDiv.id, maxSize, delay, step, fnDone, displayableElem);
}
this._expandDual = function (mode, parentDiv, maxSize, delay, step, fnDone, displayableElem){
if(this.expDivSize<maxSize) {
var nS = this.expDivSize;
if(nS>20){ step = this.expandCalcStep(maxSize); }
else if(nS>5) { step = 10; }
this.expDivSize = Math.min(this.expDivSize+=step, maxSize);
mode == 'w' ? this.setWidth(parentDiv, this.expDivSize) : this.setHeight(parentDiv, this.expDivSize);
setTimeout("goN2U._expandDual('"+mode+"','"+parentDiv+"',"+maxSize+","+delay+","+step+","+fnDone+",'"+displayableElem+"');",delay );
} else{
mode == 'w' ? this.setWidth(parentDiv, "auto") : this.setHeight(parentDiv, "auto");
this.expDivSize = 20;
this.expDivProcessing = false;
if(fnDone) fnDone();
}
}
this.collapseDivDual = function (mode, theDiv, hidableElem, delay, fnDone, displayableElem, bExcludeDispElem){
if (this.expDivProcessing) return;
this.expDivProcessing = true;
var theDivObj = this.getRawObject(theDiv);
var parentDiv = theDivObj.parentNode;
if (!parentDiv.id) { parentDiv.id = 'outer_' + theDivObj.id; }
if (!delay || delay<20) { delay = 20; }
this.expDivSize=0;
var size = (mode == 'w' ? this.getObjectWidth(parentDiv) : this.getObjectHeight(parentDiv));
var step = this.expandCalcStep(size);
if (hidableElem) this.undisplay(hidableElem);
var end = 0;
if(displayableElem && !bExcludeDispElem) {
this.display(displayableElem,"inline");
end = (mode == 'w' ? this.getObjectWidth(displayableElem) : this.getObjectHeight(displayableElem));
this.undisplay(displayableElem);
}
this._collapseDual(mode, parentDiv.id, hidableElem, delay, step, fnDone, displayableElem, end)
}
this._collapseDual = function (mode, parentDiv, hidableElem, delay, step, fnDone, displayableElem, end){
this.expDivSize = (mode == 'w' ? this.getObjectWidth(parentDiv) : this.getObjectHeight(parentDiv));
var nRem = this.expDivSize-end;
if(nRem>0){
if(nRem<6){ step = 1; }
else if(nRem<60){ step = 10; }
this.expDivSize-=step;
setTimeout("goN2U._collapseDual('"+mode+"','"+parentDiv+"','"+hidableElem+"',"+delay+","+step+","+fnDone+",'"+displayableElem+"',"+end+");",delay );
this.stepDone = false;
mode == 'w' ? this.setWidth(parentDiv, this.expDivSize) : this.setHeight(parentDiv, this.expDivSize);
this.stepDone = true;
} else {
this.stepDone = true;
this.undisplay(parentDiv);
this.expDivProcessing = false;
if(displayableElem) this.display(displayableElem,"inline");
if(fnDone) fnDone();
}
}
this.getConfigurationObject = function(cls) {
var className = cls + 'Properties';
if(!this.isUndefined(className) && this.isObject(className)) {
return this.getObject(className);
} else {
var obj = new Object;
obj.getValue = function(id, sDefault) { return sDefault; }
return obj;
}
}
this.collapseExpandDivsDual = function (mode, divA, divB, delay){
if (this.expDivProcessing) return;
this.expDivProcessing = true;
var divAObj = this.getRawObject(divA);
var divBObj = this.getRawObject(divB);
var divAParent = divAObj.parentNode;
var divBParent = divBObj.parentNode;
if (!divAParent.id) { divAParent.id = 'outer_' + divAObj.id; }
if (!divBParent.id) { divBParent.id = 'outer_' + divBObj.id; }
if (!delay || delay<20) { delay = 20; }
var size = (mode == 'w' ? this.getObjectWidth(divAParent) : this.getObjectHeight(divAParent));
var step = this.expandCalcStep(size);
this._comboCollapseDual(mode, divAParent.id, divBParent.id, delay, step);
}
this._comboCollapseDual = function (mode, divAParent, divBParent, delay, step){
this.expDivSize = (mode == 'w' ? this.getObjectWidth(divAParent) : this.getObjectHeight(divAParent));
if(this.expDivSize>step){
this.expDivSize-=step;
mode == 'w' ? this.setWidth(divAParent, this.expDivSize) :this.setHeight(divAParent, this.expDivSize); 
setTimeout("goN2U._comboCollapseDual('"+mode+"','"+divAParent+"','"+divBParent+"',"+delay+","+step+");", delay );
} else {
this.undisplay(divAParent);
this.display(divBParent);
this.setWidth(divBParent,"auto");
mode == 'w' ?  this.setWidth(divBParent,"auto") :this.setHeight(divBParent,"auto"); 
var maxSize = (mode == 'w' ? this.getObjectWidth(divBParent) : this.getObjectHeight(divBParent));
this.expDivSize = step;
mode == 'w' ?  this.setWidth(divBParent,this.expDivSize) :this.setHeight(divBParent,this.expDivSize); 
setTimeout("goN2U._comboExpandDual('"+mode+"','"+divBParent+"',"+maxSize+","+delay+","+step+");",delay );
}
}
this._comboExpandDual = function (mode,divBParent, maxSize, delay, step){
this.expDivSize =  (mode == 'w' ? this.getObjectWidth(divBParent) : this.getObjectHeight(divBParent));
if((this.expDivSize<maxSize) && (maxSize <1000)){
this.expDivSize+=step;
mode == 'w' ? this.setWidth(divBParent,this.expDivSize) : this.setHeight(divBParent,this.expDivSize); 
setTimeout("goN2U._comboExpandDual('"+mode+"','"+divBParent+"',"+maxSize+","+delay+","+step+");",delay );
} else{
mode == 'w' ? this.setWidth(divBParent,maxSize) : this.setHeight(divBParent,maxSize); 
this.show (divBParent);
this.expDivSize = 20;
this.expDivProcessing = false;
}
}
this.animateAlpha = function (sID, alphaStart, alphaFinal, nSteps, fnDone, style) {
var o = goN2U.getRawObject(sID);
if (!o) {
;
return;
}
alphaStart = (alphaStart <= 0 ? 0 : (alphaStart >= 100 ? 100 : alphaStart));
alphaFinal = (alphaFinal <= 0 ? 0 : (alphaFinal >= 100 ? 100 : alphaFinal));
if (this.isUndefined(o.azdAnimAlpha)) {
o.azdAnimAlpha = new Object();
o.azdAnimAlpha.bRunning = false;
}
var anim = o.azdAnimAlpha;
if (anim.bRunning) {
clearInterval(anim.intervalID);
;
anim.intervalID = undefined;
anim.bRunning = false;
}
var alphaDelta = alphaFinal-alphaStart;
var alphaStep = alphaDelta * 1.0 / nSteps; // force floating-point so alphaStep is non-zero
if (nSteps > 1 && Math.abs(alphaStep) > 0.0001) {
anim.alphaStep = alphaStep;
anim.alphaFinal = alphaFinal;
anim.fnDone = fnDone;
var alphaCur = this.getAlphaLevel(o);
anim.nDir = (alphaFinal-alphaCur) > 0 ? 1 : -1;
if (anim.nDir * alphaStep < 0) {
anim.alphaStep = -alphaStep;
}
if (alphaCur >= this.MOZALPHAMAX*100) {
this.setAlphaLevel(o, this.MOZALPHAMAX*100);
}
anim.bRunning = true;
var fn = new Function ("goN2U._animateAlpha('"+sID+"');");
anim.intervalID = setInterval(fn, 25);
} else {
this.setAlphaLevel(o, alphaFinal);
if (fnDone) {
fnDone();
}
}
}
this._animateAlpha = function (sID) {
var o = goN2U.getRawObject(sID);
if (!o) {
;
return;
}
var anim = o.azdAnimAlpha;
if (!anim.bRunning) {
clearInterval(anim.intervalID);
;
anim.intervalID = undefined;
return;
}
var alphaNext = this.getAlphaLevel(o) + anim.alphaStep;
if ((anim.alphaFinal-alphaNext) * anim.nDir > 0) {
this.setAlphaLevel(o, alphaNext);
} else {
this.setAlphaLevel(o, anim.alphaFinal);
clearInterval(anim.intervalID);
;
anim.intervalID = undefined;
anim.bRunning = false;
if (anim.fnDone) {
anim.fnDone();
}
}
}
this.animateAlphaCancel = function(sID) {
var o = goN2U.getRawObject(sID);
if (!o) {
;
return;
}
var anim = o.azdAnimAlpha;
clearInterval(anim.intervalID);
;
anim.intervalID = undefined;
anim.bRunning = false;
}
this.isUndefined = function (a) { return (typeof a == 'undefined'); }
this.isDefined   = function (a) { return typeof a != 'undefined'; }
this.isFunction  = function (a) { return typeof a == 'function'; }
this.isNull      = function (a) { return typeof a == 'object' && !a; }
this.isNumber    = function (a) { return typeof a == 'number' && isFinite(a); }
this.isObject    = function (a) { return (a && typeof a == 'object') || this.isFunction(a); }
this.isString    = function (a) { return typeof a == 'string'; }
this.isArray	 = function (a) { return this.isObject(a) && a.constructor == Array; }
this.isUndefOrNull = function (a) { return (typeof a == 'undefined') || (typeof a == 'object' && !a) }
this.objIsInstanceOf = function(obj, classObj) {
while (obj.__proto__) {
if (obj.__proto__ === classObj) {
return true;
}
obj = obj.__proto__;
}
return false;
}
} // END of goN2Utilities Class
window.N2TextSizer=function(spanID) {
var spanEl = document.createElement("span");
if (spanEl) {
spanEl.setAttribute("id",spanID, 0);
document.body.appendChild(spanEl);
goN2U.hide(spanID);
this.span=spanEl; 	// expects goN2Utility class to have been initialized
this.sID = spanID;
this.style=null;
}
this.getStringWidth = function (txt, len) {
;
if (len) this.span.innerText = txt.substring(0, len);
else this.span.innerText = txt;
return goN2U.getObjectWidth(this.sID); 
}
this.setStyle = function (style) {
if (style != this.style) {
goN2U.setClass (this.span, style);
this.style = style;
}
}
this.truncateToWidth = function (txt, width) {
var len = txt.length;
var txtwidth = this.getStringWidth(txt);
if (txtwidth >width) {
var reqlen = Math.floor(width/txtwidth*len) - 3;
var temptxt = txt.substring(0, reqlen);
temptxt += '...';
return temptxt;
} else {
return txt;
}
}
this.setContent = function (cont) {
this.span.innerHTML=cont;
return goN2U.getObjectWidth(this.span);
}
this.getWidth = function () {
return goN2U.getObjectWidth(this.span);
}
this.getHeight = function () {
return goN2U.getObjectHeight(this.span);
}
}
window.N2FifoQueue=function(n) {
var current = 0;
var next = 0;
var size = n ? n : 20;
var q = new Array(n);
this.add = function (item) {
q[next] = item;
next++;	
if (next == size) next = 0;
q[next] = null;	// to ensure we don't have current go past
}
this.current = function () {
return q[current];
}
this.next = function () {
var val = null;
if (q[current]) current++;	// don't advance past stop fence
if (current == size) current = 0;
val = q[current];
return val;
}
this.nextExists = function () {
var val = null;
var temp = current;
if (q[temp]) temp++;	// don't advance past stop fence
if (temp == size) temp = 0;
return q[temp] != null;
}
this.toString = function () {
var txt = "Current: " + current + "\n";
txt += "Next: " + next + "\n";
for (i=0;i<size;i++) {
txt += "["+i+"] = " + q[i]; 
if (i == current) txt += " <-Current ";
if (i == next) txt += " <-Next";
txt +="\n";
}
return txt
}
}
window.N2BrowseStack=function(n) {
var current = -1;
var size = n ? n : 20;
var q = new Array(n);
this.add = function (item) {
current++;	
q[current] = item;
q[current+1] = null;	// once we add a new item any past it are toast
}
this.reset = function () {
current = -1;
q[0] = null;
q[1] = null;
}
this.previous = function (item) {
if (current >0) return q[current-1];	
return null;
}
this.current = function () {
return q[current];
}
this.next = function () {
return q[current+1];
}
this.goBack = function () { if (current >0) current--;	}
this.goForward = function () { if (q[current+1]) current++; }
this.toString = function () {
var txt = "Current: " + current + "\n";
for (i=0;i<=current;i++) {
txt += "["+i+"] = " + q[i].id; 
if (i == current) txt += " <-Current ";
txt +="\n";
}
return txt
}
}
window.N2LinkNameInfo=function(sLinkID, sNameOverride) {
if (sLinkID) {	
var oLink = goN2U.getRawObject(sLinkID);	
var sName = "";	
if (oLink) { 
sName = oLink.name;	
;
}
if (sNameOverride) {
sName = sNameOverride;	
;
}
if (sName) {
var tmpArray = sName.split("|");
if (tmpArray.length >1) {
this.sLinkID = sLinkID; 
this.sName = sName;
this.sFeature  = tmpArray[0];
this.sType = tmpArray[1];
this.sID = tmpArray[2];
this.sParams = tmpArray[3];
for (var i = 4; !goN2U.isUndefined(tmpArray[i]); i++) {
this.sParams = this.sParams + "|" + tmpArray[i];
}
}
}
} else {
;
}
this.getLinkID	= function () { return this.sLinkID; }
this.getLinkName= function () { return this.sName; }
this.getFeature	= function () { return this.sFeature; }
this.getType	= function () { return this.sType; }
this.getID		= function () { return this.sID; }
this.getParams	= function () { return this.sParams; }
}	
var gaN2HandlerChains = new Array();
var gaN2HandlerRunFns = new Array();
window.N2ChainEventHandler=function(sHandlerName, fFn, sComment) {
sHandlerName = sHandlerName.toLowerCase();
sComment = sComment ? sComment : 'unknown';
;
;
if ( (typeof fFn != 'function') || fFn == null) return false;
var aChain;
if (!gaN2HandlerChains[sHandlerName]) {
aChain = gaN2HandlerChains[sHandlerName] = new Array();
} else {
aChain =  gaN2HandlerChains[sHandlerName];
}
var oE = window;
if (sHandlerName != 'onload' && sHandlerName != 'onresize') {
oE = document.getElementsByTagName("body")[0];
if (oE == null) {
;
return;
}
}
if  (oE[sHandlerName])	{
if (oE[sHandlerName] != gaN2HandlerRunFns[sHandlerName]) {
aChain[0] = oE[sHandlerName];
var fn = new Function ("evt", "evt = evt ? evt : window.event; _N2RunHandlers(evt, '"+sHandlerName+"');");
gaN2HandlerRunFns[sHandlerName] = fn;
oE[sHandlerName] = fn;
}
var len = aChain.length;
;
aChain[len] = fFn;
} else {
;
oE[sHandlerName] = fFn;
}
return true;
}
function _N2RunHandlers( evt, sHandlerName ) {
var aH = gaN2HandlerChains[sHandlerName];
var len = aH.length;
for (var i=0;i<len;i++) {
aH[i](evt);
}		
}
if (!window.goN2Initializer) {
function N2Initializer () {
this.aHandlers = new Array();
}
new N2Initializer ();
N2Initializer.prototype.runThisWhen = function (sWhen, fFn, sComment) {
;
;
sWhen = sWhen.toLowerCase();
if ( (sWhen =='inbody' && document.body) || 
(sWhen =='coreloaded' && this.bCoreLoaded) ){
fFn();
} else {
var oTmp = {};
oTmp.sWhen = sWhen;
oTmp.fFn = fFn;
oTmp.sComment = sComment;
this.aHandlers[this.aHandlers.length] = oTmp;
}
}
N2Initializer.prototype.initializeThis = N2Initializer.prototype.runThisWhen;
N2Initializer.prototype.run = function (sWhen) {
sWhen = goN2U.isUndefined(sWhen) ? null : sWhen;
sWhen = sWhen.toLowerCase();
;//goN2Debug.info("N2Initializer called with " + (sWhen ? "'"+sWhen+"'" : "null"));
var aH = this.aHandlers;
var len = aH.length;
for (var i=0;i<len;i++) {
var oTmp = aH[i];
if ((oTmp.bCalled != true) &&
oTmp.fFn &&
(( (sWhen == null) || (sWhen == 'onload') ) || 
(oTmp.sWhen && (oTmp.sWhen == sWhen)))
) { 
;   
oTmp.fFn();
oTmp.bCalled = true;
}
}		
}
goN2Initializer = new N2Initializer();
}
N2ChainEventHandler ('onload', function(){ goN2Initializer.run('onload'); }, 'goN2Initializer' );
var goN2U = new N2Utilities();
goN2Initializer.initializeThis('inbody', 
function() { goN2U.initialize(); }, 
'goN2U Initialization'
);
goN2Initializer.initializeThis('onload', 
function() { 
if (!document.body) {
alert("Error: Must initialize Utilities library in the body. (body not found)");
return;
}
var sID = goN2U.sAnimationDivID = 'goN2UAnimatedBox';
var o = document.createElement("div");
if (o) {
document.body.appendChild(o);
o.setAttribute("id",sID, 0);
goN2U.setClass(sID, 'animatedBox');
} else {
;
}
}, 'animate box creation' );
if (window.goN2LibMon) goN2LibMon.endLoad('utilities');
