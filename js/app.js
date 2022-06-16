$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $(".headerMenu").toggleClass("mobileMenu");
    });

    $(".slider").slick({
        dots: true
    });
});