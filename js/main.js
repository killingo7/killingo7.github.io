// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.paddingTop = "10px";
    document.getElementById("header").style.paddingBottom = "0px";
    document.getElementById("header").style.fontSize = "10px";
    document.getElementById("responsiveImage").style.width = "4%";
  } else {
    document.getElementById("header").style.paddingTop = "60px";
    document.getElementById("header").style.paddingBottom = "60px";
    document.getElementById("header").style.fontSize = "16px";
    document.getElementById("responsiveImage").style.width = "10%";
  }
}
