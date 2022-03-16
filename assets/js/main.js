/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu= $("#nav-menu"),
    navToggle= $("#nav-toggle"),
    navClose = $("#nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.click(function () {
       navMenu.css("bottom",0);
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.click(function () {
        navMenu.css("bottom",-220);
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = $(".nav__link");

navLink.click(function () {
    navMenu.css("bottom",-220);
});

/*==================== SKILLS FOLD ====================*/
$(".skills__arrow").each(function () {

})


/*$(".skills__header").mouseenter(function(){
    if ($(".skills__list").css("height",0)){

    }$(".skills__list").css("height",80)
});

$(".skills__header").mouseleave(function(){
    if ($(".skills__list").css("height",80)){

    }$(".skills__list").css("height",0)
});*/

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/
$("#btnEducation").click(function () {
    if ($("#work").css("display","block")){
        $("#education").css("display","block");
        $("#work").css("display","none");
    }
});

$("#btnWork").click(function () {
    if ($("#education").css("display","block")){
        $("#education").css("display","none");
        $("#work").css("display","block");
    }
});


/*==================== SERVICES MODAL ====================*/
$("#button__UiUx").click(function () {
    $("#UiUx__services").css("opacity",1);
    $("#UiUx__services").css("visibility","visible");
});

$("#button__forntend").click(function () {
    $("#Frontend__Services__model").css("opacity",1);
    $("#Frontend__Services__model").css("visibility","visible");
});

$(".services__modal-close").click(function () {
    $("#UiUx__services").css("opacity",0);
    $("#UiUx__services").css("visibility","hidden");

    $("#Frontend__Services__model").css("opacity",0);
    $("#Frontend__Services__model").css("visibility","hidden");
});


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 