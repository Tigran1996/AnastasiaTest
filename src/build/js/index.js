jQuery(document).ready(function () {
    jQuery(".menu-toggler").on("click",function () {
        jQuery(".menu-hidden").removeClass("d-none")
    })
    jQuery(".close-toggler").on("click",function () {
        jQuery(".menu-hidden").addClass("d-none")
    })
})


