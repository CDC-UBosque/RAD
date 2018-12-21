//
// Masonry for respositories
//

var masonry = new Macy({
    container: '#second.row .view-content',
    trueOrder: false,
    waitForImages: true,
    useOwnImageLoader: false,
    debug: true,
    mobileFirst: false,
    columns: 4,
    margin: 24,
    breakAt: {
        1200: 4,
        991: 4,
        768: 2,
        350: 1
    }
});