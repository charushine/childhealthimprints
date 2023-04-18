$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        console.log("Window Scrolled");
        $(".navbar").css("background", "#f2f4f8");
        // $(".navbar").css("background", "rgba(255, 255, 255)");
        // $("a.nav-link").css("color", "#fff");
    }else {
        console.log("Window Top")
        $(".navbar").css("background", "#f2f4f8");
        // $(".navbar").css("background", "rgba(255, 255, 255, 0.2)");
        // $("a.nav-link").css("color", "#000");
      }
    })
  })

  $(".dynamicData").click(function(){
    let btnId = this.id;
    $(".questionAnsweredDiv").hide();
    $("#"+btnId+"Div").show();
    $(".dynamicData").removeClass('basicSecondaryBtn');
    $("#"+btnId).addClass('basicSecondaryBtn');
  });


  document.getElementsByClassName("dropdown-item")[0].addEventListener("mouseover", function(e) {
    const parent = e.target.parentElement;
    if (parent && parent.tagName === "LI" && parent.classList.contains("dropdown-item")) {
        const parent = e.target.parentElement;
        parent.children[1].classList.add("active");
    }
});
    
document.getElementsByClassName("dropdown")[0].addEventListener("mouseout", function(e) {
    e.target.classList.remove("active");
});
  
