/* Mobile Menu */

function openNav() {
    var icon = document.getElementById("sideMenu");
    icon.classList.toggle("open");

    var navBgColor = document.getElementById("navBg");
    navBgColor.classList.toggle("seen");

    var bodyscroll = document.getElementById("htmlBody");
    bodyscroll.classList.toggle("scrolloff");
}
        
function closeNav() {
    var icon = document.getElementById("sideMenu");
    icon.classList.remove("open");

    var navBgColor = document.getElementById("navBg");
    navBgColor.classList.remove("seen");

    var bodyscroll = document.getElementById("htmlBody");
    bodyscroll.classList.remove("scrolloff");
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    
  } else {
    var iconR = document.getElementById("sideMenu");
    iconR.classList.remove("open");

    var navBgColorR = document.getElementById("navBg");
    navBgColorR.classList.remove("seen");

    var bodyscrollR = document.getElementById("htmlBody");
    bodyscrollR.classList.remove("scrolloff");
  }
})

$(document).ready(function(){
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.gototop').addClass('showbtn');
    } else {
       $('.gototop').removeClass('showbtn');
    }
});
});


