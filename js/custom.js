$(function(){

// navbar bg
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navbg');
    }
    else {
       $('.navbar').removeClass('navbg'); 
    }
});  


// typed js
$(".typed").typed({
    strings: ["Web Designer.", "Coder."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});


 //animation scroll js
 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 90
             }, 1500);
             return false;
         }
     }
 });

    
// back to top button    
$('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1500); 
 });
// back top button fadein fadeout / menu add class  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
       $('.back-top').fadeIn(500);
    }
    else {
        $('.back-top').fadeOut(500);
    }

});  




});