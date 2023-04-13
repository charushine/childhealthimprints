$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        console.log("Window Scrolled");
        $(".navbar").css("background", "rgba(255, 255, 255)");
        // $("a.nav-link").css("color", "#fff");
    }else {
        console.log("Window Top")
        $(".navbar").css("background", "rgba(255, 255, 255, 0.2)");
        // $("a.nav-link").css("color", "#000");
      }
    })
  })
  
