//
// Masonry for respositories
//

	var masonry = new Macy({
    container: '.region.region-content section[class*="block-views-blockrepositorios-block-"] .view-content, .region.region-content section[class*="block-views-blockrepositorios-por-etiqueta-block-"] .view-content, .region.region-content section[class*="block-views-blockcalendario-block-"] .view-content',
    trueOrder: false,
    waitForImages: true,
    useOwnImageLoader: false,
    debug: true,
    mobileFirst: false,
    columns: 3,
    margin: 24,
    breakAt: {
        1200: 3,
        991: 3,
        768: 2,
        350: 1,
    }
});