//
// Masonry for respositories
//

var elem = document.querySelector('.region.region-content section[class*="block-views-blockrepositorios-block-"] .view-content, .region.region-content section[class*="block-views-blockrepositorios-por-etiqueta-block-"] .view-content, .region.region-content section[class*="block-views-blockcalendario-block-"] .view-content');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.views-row',
  columnWidth: 0,
  //columnWidth: '.grid-sizer',
  horizontalOrder: true,
  //fitWidth: true,
  gutter: 15
});

var elem = document.querySelector('.page-node-type-page #second.row .view-content');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.views-row',
  columnWidth: 0,
  //columnWidth: '.grid-sizer',
  horizontalOrder: true,
  //fitWidth: true,
  gutter: 15
});