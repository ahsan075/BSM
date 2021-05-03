$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        560: {
            items: 2,
        },
        771: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1200: {
            items: 3,
        },
        1410: {
            items: 4,
        },
        1740: {
            items: 3,
        },
    },
});
