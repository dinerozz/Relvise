$(document).ready(function () {
    $("a.menu__link").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px" // smooth scrolling jquery
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});