(function( $ ) {
$('.path-frontpage .region-content-home .galeria-asi-lo-vivimos-home>div .view-content .views-row .views-field-field-imagenes-de-asi-lo-vivimos .jcarousel-wrapper .jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 951) {
            width = width / 3;
        } else if (width < 950) {
            width = width / 2;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    //.jcarousel({
        // Your configurations options
    //});
})(jQuery);

(function( $ ) {
$('.path-frontpage .region-content-home .galeria-proyectos-home .view-galerias .view-content .jcarousel-wrapper .jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 951) {
            width = width / 3;
        } else if (width < 950) {
            width = width / 2;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    //.jcarousel({
        // Your configurations options
    //});
})(jQuery);

(function( $ ) {
$('.page-node-type-proyecto .row .region-content .content>div .galeria-en-nodo .field--item .content .field--name-field-imagen-de-la-galeria .jcarousel-wrapper .jcarousel')
    .on('jcarousel:create jcarousel:reload', function() {
        var element = $(this),
            width = element.innerWidth();

        if (width > 501) {
            width = width / 2;
        } else if (width < 500) {
            width = width / 1;
        }

        element.jcarousel('items').css('width', width + 'px');
    })
    //.jcarousel({
        // Your configurations options
    //});
})(jQuery);
    
//
// Masonry for respositories
//

(function( $ ) {

	var $container = $('.region.region-content section[class*="block-views-blockrepositorios-block-"] .view-content, .region.region-content section[class*="block-views-blockrepositorios-por-etiqueta-block-"] .view-content, .region.region-content section[class*="block-views-blockcalendario-block-"] .view-content, #second.row .view-content, .path-frontpage .region-content-home .agenda-home .view-calendario .view-content');
	$container.imagesLoaded( function () {
		$container.masonry({
			//columnWidth: '.item',
			itemSelector: '.views-row',
			horizontalOrder: true,
			 //fitWidth: true,
			 gutter: 15,
			 //resize: true,
			 //columnWidth: '.views-row',
			 //percentPosition: true
		});
	});
	
})(jQuery);

(function( $ ) {

		var $container = $('.paginas-tabs .blocktabs .view-content, .path-taxonomy .view-content');
		$container.imagesLoaded( function () {
			$container.masonry({
				//columnWidth: 120,
				itemSelector: '.views-row',
				horizontalOrder: true,
				//percentPosition: true,
				gutter: 15,
				//fitWidth: true,
				//initLayout: true,
			});
		});

})(jQuery);


(function ($) {
 	$(document).ready(function() {
 		var $content = $(".paginas-tabs .blocktabs .view-content");
   		$(".paginas-tabs .ui-tabs-tab a").click(function(){
    		//alert("Clicked");
    		$content.masonry();
 	 	});

 	});
})(jQuery);

(function ($) {
	
	$("#navbar-collapse ul li.expanded, #navbar-collapse ul li.expanded .dropdown-menu").mouseover(function() {
		$("li.expanded").addClass("open");
	});
	
	$("#navbar-collapse ul li.expanded ,#navbar-collapse ul li.expanded .dropdown-menu").mouseleave(function() {
	  $("li.expanded").removeClass("open");
	});
	
})(jQuery);

(function ($) {
    $('form').submit(function () {
       if (!grecaptcha.getResponse()) {
         event.preventDefault();
         $('<span class="red recaptcha">captcha invalido.</span>').insertAfter('.g-recaptcha');}
      });
})(jQuery);

//(function ($) {
//	
//	$("li.dropdown").hover(function() {
//		$("#navbar-collapse").addClass("open");
//	});
//	
//})(jQuery);

//(function ($) {
//	
//	// add class open when asociacion tab is selected
//	$("li.expanded.dropdown.active").ready(function() {
//		$("li.dropdown.active-trail").toggleClass("open");
//		//$("#navbar-collapse").addClass("open2");
//		$("#navbar-collapse").toggleClass("open");
//	});
//	
//})(jQuery);
