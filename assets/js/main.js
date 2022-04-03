/*==================== MENU SHOW Y HIDDEN ====================*/
/*const navMenu= $("#nav-menu"),
    navToggle= $("#nav-toggle"),
    navClose = $("#nav-close")*/

const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")
/*===== MENU SHOW =====*/
/* Validate if constant exists */
/*if (navToggle){
    navToggle.click(function () {
       navMenu.css("bottom",0);
    });
}*/

if (navToggle){
    navToggle.addEventListener("click",() =>{
        navMenu.classList.add("show-menu");
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
/*if (navClose){
    navClose.click(function () {
        navMenu.css("bottom",-240);
    });
}*/
if (navClose){
    navClose.addEventListener("click",()=>{
       navMenu.classList.remove("show-menu");
    });
}
/*==================== LOADER ====================*/
$(window).on('load',function(){
    $(".loader_container").fadeOut(1000);
    $(".content").fadeIn(1000);

});
/*==================== REMOVE MENU MOBILE ====================*/
/*const navLink = $(".nav__link");

navLink.click(function () {
    navMenu.css("bottom",-240);
});*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL ====================*/

$("#btnHome").click(function() {
    $('html,body').animate({
            scrollTop: $("#home").offset().top},
        'slow');
});

$("#btnAbout").click(function() {
    $('html,body').animate({
            scrollTop: $("#about").offset().top},
        'slow');
});

$("#btnSkills").click(function() {
    $('html,body').animate({
            scrollTop: $("#skills").offset().top},
        'slow');
});

$("#btnServices").click(function() {
    $('html,body').animate({
            scrollTop: $("#services").offset().top},
        'slow');
});

$("#btnPortfolio").click(function() {
    $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
        'slow');
});

$("#btnContact").click(function() {
    $('html,body').animate({
            scrollTop: $("#contact").offset().top},
        'slow');
});

$("#btnScroll").click(function() {
    $('html,body').animate({
            scrollTop: $("#about").offset().top},
        'slow');
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

$("#button__designer").click(function () {
    $("#Designer__model").css("opacity",1);
    $("#Designer__model").css("visibility","visible");
});

$(".services__modal-close").click(function () {
    $("#UiUx__services").css("opacity",0);
    $("#UiUx__services").css("visibility","hidden");

    $("#Frontend__Services__model").css("opacity",0);
    $("#Frontend__Services__model").css("visibility","hidden");

    $("#Designer__model").css("opacity",0);
    $("#Designer__model").css("visibility","hidden");
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


/*==================== Gallery ====================*/

/*$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#portfolioGallery").fadeTo(100, 0.1);
        $("#portfolioGallery div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolioGallery").fadeTo(300, 1);
        }, 300);

    });
});*/


//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
    filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
        if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data-name value is equal to images data-name value
                //or user selected item data-name value is equal to "all"
                if((filterImges == filterName) || (filterName == "all")){
                    image.classList.remove("hide"); //first remove the hide class from the image
                    image.classList.add("show"); //add show class in image
                }else{
                    image.classList.add("hide"); //add hide class in image
                    image.classList.remove("show"); //remove show class from the image
                }
            });
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
    categoryName = previewBox.querySelector(".title p"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");

function preview(element){
    //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
    previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
    categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
    previewBox.classList.add("show"); //show the preview image box
    shadow.classList.add("show"); //show the light grey background
    closeIcon.onclick = ()=>{ //if user click on close icon of preview box
        previewBox.classList.remove("show"); //hide the preview box
        shadow.classList.remove("show"); //hide the light grey background
        document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
    }
}

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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})