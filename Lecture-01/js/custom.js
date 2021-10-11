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
                        if ($(window).scrollTop() > 400) {
                                $("#navigation").css("background-color","#0EB493");
                        }else {
                                $("#navigation").css("background-color","rgb(16, 22, 54, 0.2)");
                        }
                
                
                });
        
