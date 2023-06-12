const DEFAULTS = {
    bank: 0.021,
    transferWise: 0.15,
    amount: 100000
} 
$(document).ready(function () {
    $("#slider").not('.slick-initialized').slick(
        {
            // slidesToShow: 1.5,
            // slidesToScroll: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: true,
            arrows: true,
            dots: false,
            centerMode: false,
            variableWidth: true,
            prevArrow: $(".slide-pp2"),
            nextArrow: $(".slide-nn2"),
            vertical: false,
            verticalSwiping: false,
            responsive1: [
                {
                    breakpoint: 767,
                    settings: {
                        vertical: true
                    }
                }],
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        // slidesToShow: 3,
                        // slidesToScroll: 3,
                        // infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        // slidesToShow: 2,
                        // slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {

                        centerMode: true,
                        centerPadding: "50%",
                        verticalSwiping: true,
                        vertical: true
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]


        }
    )
    showVal(DEFAULTS.amount);

});

function showVal(value) {
    document.getElementById('sliderValue').innerHTML = formatCurrency(value);
    document.getElementById('vsOtherBank').innerHTML = formatCurrency(value * DEFAULTS.bank);
    // document.getElementById('vsTW').innerHTML = formatCurrency(value * DEFAULTS.transferWise);
}

function formatCurrency (value) {
    value = value.toString()
    value = '<sup>$</sup><span>' + parseInt(value.replace(/,/g, ""))
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",", 10) + '</span>';
    return value
}