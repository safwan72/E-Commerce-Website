$(document).ready(function () {


    // -------------------image carousol with jquery

    let $imagecarousols = $('.carousel_items');
    let count = 0;

    function display() {

        count++;
        if (count < 0) {
            count = $imagecarousols.length - 1;
        } else if (count >= $imagecarousols.length) {
            count = 0;
        }
        console.log(count)
        $imagecarousols.each(function (e) {
            $(this).removeClass('activecarousel');
            // console.log(this);
        })
        $($imagecarousols.get(count)).addClass('activecarousel');
        $($imagecarousols.get(count)).addClass('animcarosuol');
    }
    setInterval(display, 15000);

    $('.open_nav').click(function () {
        $('nav').toggleClass("active_class")
    })
});




// fix-navbar while scrolling(jquery plugin)

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixednav');
    } else {
        $('header').removeClass('fixednav');
    }
});



$('.short_images img').each(function () {
    $(this).scrollstuff({
        classname: 'animcarosuol',
        repeat: 'true'
    });
});
$('.list_img img').each(function () {
    $(this).scrollstuff({
        classname: 'animcarosuol',
        duration: 9000,
        repeat: 'true'
    });
});

