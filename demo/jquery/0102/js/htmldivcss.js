jQuery(function($){

    $('.circle').mosaic({
        opacity		:	0.8			//Opacity for overlay (0-1)
    });

    $('.fade').mosaic();

    $('.bar').mosaic({
        animation	:	'slide'		//fade or slide
    });

    $('.bar2').mosaic({
        animation	:	'slide'		//fade or slide
    });

    $('.bar3').mosaic({
        animation	:	'slide',	//fade or slide
        anchor_y	:	'top'		//Vertical anchor position
    });

    $('.cover').mosaic({
        animation	:	'slide',	//fade or slide
        hover_x		:	'400px'		//Horizontal position on hover
    });

    $('.cover2').mosaic({
        animation	:	'slide',	//fade or slide
        anchor_y	:	'top',		//Vertical anchor position
        hover_y		:	'80px'		//Vertical position on hover
    });

    $('.cover3').mosaic({
        animation	:	'slide',	//fade or slide
        hover_x		:	'400px',	//Horizontal position on hover
        hover_y		:	'300px'		//Vertical position on hover
    });

});
