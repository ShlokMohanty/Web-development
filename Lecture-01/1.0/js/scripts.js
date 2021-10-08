window.onscroll = function () {
scrollFunction();
  scrollFunctionBTT();
};

window.onload = function () {
scrollfunctio();
}
function scrollFunction() {
  if (document.documentElement.scorrlTop > 30) {
    document.getElementById("navbar example-1").classList.add("top-navbar-collapse");
  }
  else if (document.documentElement.scrollTop < 30) {
    document.getElementById("navbarExample").classList.remove("top-nav=collapse");
  }
}

