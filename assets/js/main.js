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


/*
$(".skills__arrow").each(function () {

})

$("#frontEnd").click(function () {
    $(".skills__content").css("height",100)
});
$("#frontEnd").mouseenter(function(){
    alert("OK")
    $(".skills__list").css("height",80)
});

$(".skills__content").mouseleave(function(){
    if ($(".skills__list").css("height",80)){

    }$(".skills__list").css("height",0)
});
*/

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
    let  itemClass = this.parentNode.className

    for ( var i = 0; i < skillsContent.length ;i++){
        skillsContent[i].className = "skills__content skills__close"
    }
    if (itemClass == "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) =>{
   el.addEventListener("click",toggleSkills)
});
/*================================================================*/
/*const skillsContent = $(".skills__content"),
    skillsHeader = $(".skills__header");

function toggle() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
     skillsContent[i].className  = "skills__content skills__close"
    }
    if (itemClass == "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.each("click",toggle());*/

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
let swiperPortfolio = new Swiper('.portfolio__container', {
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
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween:48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicMainBullets:true
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 