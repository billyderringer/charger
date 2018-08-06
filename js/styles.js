define(['jquery'], () => {

    //nav scroll bg effect
    $(window).scroll(() => {
        if ($(document).scrollTop() > 50) {
            $("#floating-nav").css({
                "background-color": "rgba(0,0,0,.9)",
                "transition": "1s"
            })

            $("#side-menu").css({
                "margin-top": "40px"
            })
        } else {
            $("#floating-nav").css({
                "background-color": "transparent",
                "transition": "1s"
            })

            $("#side-menu").css({
                "margin-top": "10px"
            })
        }
    })

})