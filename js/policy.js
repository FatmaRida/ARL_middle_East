

// navbar js
(function($){
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });
  })(jQuery);


  // end navbar
 new WOW().init();

// button toggle
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// button toggle div3
function myFunction2() {
  var y = document.getElementById("myDIV3");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

// loader
 $(window).on('load',function () {
                 
                $(".loading-overlay .loader").fadeOut(100,function () {
                 $(this).parent().fadeOut(100,function () {
                   // body...
                 
                  $("body").css("overflow","auto");
             
               });
                });
                });
