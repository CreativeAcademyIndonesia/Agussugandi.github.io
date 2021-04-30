const $body = $("body");
const $header = $(".page-header");
const scrollClass = "scroll";

$(window).on("scroll", () => {
    if (this.matchMedia("(min-width : 992px)").matches) {
        const scrollY = $(this).scrollTop();
        scrollY = 0
            ? $body.addClass(scrollClass)
            : $body.removeClass(scrollClass);
    } else {
        $body.removeClass(scrollClass);
    }
});