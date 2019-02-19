//(function(w) {
//  //"use strict";
//  //let applyBtn = document.getElementById("apply");
//  // if (window.matchMedia("(max-width: 700px)").matches) {
//  //   console.log("uyeyeyeyey");
//  // }
//  function onResize() {
//    let msGrid = document.querySelector(".paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content"),
//      gridItems = document.querySelectorAll(".paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content .views-row"),
//      gridColsInput = 3,
//      gridCols = gridColsInput,
//      gutter = 32, //Vertical and Horizontal Gutter (space)
//      gridWidth = msGrid.offsetWidth - (gridCols - 1) * gutter,
//      colWidth = gridWidth / gridCols;
//
//    for (let i = 0; i < gridItems.length; i++) {
//      //bas style for all
//      gridItems[i].style.position = "absolute";
//      gridItems[i].style.maxWidth = colWidth + "px";
//
//      // Left position
//      gridItems[i].style.left = (i % gridCols) * (colWidth + gutter) + "px";
//
//      if (i < gridCols) {
//        gridItems[i].style.top = "0px";
//      } else {
//        const offsetTop = gridItems[i - gridCols].offsetTop,
//          offsetHeight = gridItems[i - gridCols].offsetHeight;
//        gridItems[i].style.top = offsetHeight + gutter + offsetTop + "px";
//      }
//    }
//  }
//
//  document.addEventListener("DOMContentLoaded", onResize);
//  window.addEventListener("resize", onResize);
//  //applyBtn.addEventListener("click", onResize);
//})(window);



//(function( $ ) {
//	var macy = Macy({
//	    container: '.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content',
//	    trueOrder: false,
//	    waitForImages: false,
//	    margin: 24,
//	    columns: 3,
//	    breakAt: {
//	        1200: 3,
//	        940: 3,
//	        520: 2,
//	        400: 1
//	    }
//	});
//})(jQuery);

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

//
//
//

//(function( $ ) {
//  
//  // Masonry
//  $('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content').masonry({
//    itemSelector: '.views-row',
//    //columnWidth: '.grid-sizer',
//    gutter: 15,
//    //percentPosition: true,
//    horizontalOrder: true,
//    transitionDuration: '0.2s'
//  });
//  
//  // Sidebar
//  //$('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').on('click', function(){
//  $('.ui-tabs-nav .ui-tabs-tab a').on('click', function(){
//    //$('#primary').toggleClass('closed');
//    //$('#secondary').toggleClass('closed');
//    $('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content').masonry();
//  });
//  
//})(jQuery);

(function( $ ) {

	var $container = $('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content');
	$container.imagesLoaded( function () {
		$container.masonry({
			//columnWidth: 120,
			itemSelector: '.views-row',
			horizontalOrder: true,
			percentPosition: true,
			gutter: 50,
			fitWidth: true,
			//initLayout: false,
		});
	});
	
	//// Sidebar
	//  $('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').on('click', function(){
	//    $('#primary').toggleClass('closed');
	//    $('#secondary').toggleClass('closed');
	//    $('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content').masonry();
	//  });
	//  
	//  $container.masonry('reloadItems')
	
	//Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').each(function () {
	//$('.ui-tabs-nav .ui-tabs-tab a').each(function () {
        var $this = $(this);
	
        $this.on('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2[aria-hidden="false"]', function () {
        
            $container.imagesLoaded( function () {
                $container.masonry({
                    columnWidth: 200,
                    itemSelector: '.views-row',
                    gutter: 2000,
                    fitWidth: true,
                    horizontalOrder: true,
                    //initLayout: true,
                    percentPosition: true
                });
            });
	
        }); //end shown
    });  //end each
	
})(jQuery);

/*
 *
 *
 * (function( $ ) {
 * 
 * 	var $container = $( ".paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content" );
 * 	$container.masonry({
 * 	    itemSelector: ".views-row"
 * 	});
 * 	
 * 	$('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').on( 'click', function() {
 * 	    // do async to allow menu to open
 * 	    setTimeout( function() {
 * 	        $container.masonry('layout');
 * 	    });
 * 	});
 * 
 * })(jQuery);
 * 
 * (function( $ ) {
 * 
 *     var $container = $('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content');
 *     $container.imagesLoaded( function () {
 *         $container.masonry({
 * 			//columnWidth: '.views-row',
 * 			itemSelector: '.views-row',
 * 			horizontalOrder: true,
 * 			//fitWidth: true,
 * 			gutter: 15,
 * 			//resize: true,
 * 			//percentPosition: true
 *         });
 *     });
 *     
 *     $('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').on('click', function() {
 * 	  // do async to allow menu to open
 * 	  setTimeout( function() {
 * 	  	$('.paginas-tabs .blocktabs #blocktabs-asociacion_gestion_tabs-2 .view-content').masonry({
 * 	  		itemSelector: '.views-row',
 * 	  		horizontalOrder: true,
 * 	  		gutter: 15,
 * 	  	}, 1000);
 * 	  });
 * 	});
 *     
 *     //Reinitialize masonry inside each panel after the relative tab link is clicked - 
 *     //$('ul[role="tablist"] li[aria-controls="blocktabs-asociacion_gestion_tabs-2"] a').each(function () {
 *     //    var $this = $(this);
 * 	//
 *     //    $this.on('shown.bs.tab', function () {
 *     //    
 *     //        $container.imagesLoaded( function () {
 *     //            $container.masonry({
 *     //                //columnWidth: '.views-row',
 *     //                itemSelector: '.views-row',
 *     //                horizontalOrder: true,
 *     //                gutter: 15,
 *     //            });
 *     //        });
 * 	//
 *     //    }); //end shown
 *     //});  //end each
 *     
 * })(jQuery);
 *
 *
 */
