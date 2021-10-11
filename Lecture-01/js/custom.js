/* ================================================================================== */
/*     Preloader
/* ================================================================================== */
jquery(window).load(function(){
        $("#preloader").fadeOut("slow");
    
});

$(document).ready(function(){
          /* =========================================================================== */
          /*          Menu item highlighting
          /* =========================================================================== */
          jquery("#env").singlepageNav({
          offset: jQuery('#nav').outerHeight(),
          filter: ':not(.external)',
          speed: 1200,
          currentClass: 'current',
          easing: 'easeInOutExpo',
          updateHash: true,
          beforeStart: function() {
                console.log('begin scrolling');
          },
          onComplete: function() {
                console.log('done scrolling');
                }
                });
                $(window).scroll(function() {
                        )
