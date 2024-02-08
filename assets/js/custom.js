$(document).ready(function () {
  // handel two modal register & login
  $(".closeModal1").click(function () {
    $("#loginHome").modal("hide");
  });
  $(".topNav .slide-nav").click(function () {
    $(".LinksDashboard").toggleClass("showSide");
    $(this).toggleClass("opened");
  });
  $(".closeModal2").click(function () {
    $("#registerHome").modal("hide");
    $("#loginHome").modal("show");
  });
  // handle advanced search
  $(".showAdvsearch").click(function () {
    $(".hideSeach").toggleClass("showIt");
  });
  $(".moreAction").click(function (e) {
    e.preventDefault();
    $(this).next().fadeToggle("fast");
  });

 /*
--- vanilla js
*/

  // document.querySelectorAll(".closeModal1").forEach(function (element) {
  //   element.addEventListener("click", function () {
  //     document.getElementById("loginHome").classList.remove("show");
  //   });
  // });

  // document.querySelectorAll(".topNav .slide-nav").forEach(function (element) {
  //   element.addEventListener("click", function () {
  //     document.querySelector(".LinksDashboard").classList.toggle("showSide");
  //     this.classList.toggle("opened");
  //   });
  // });

  // document.querySelectorAll(".closeModal2").forEach(function (element) {
  //   element.addEventListener("click", function () {
  //     document.getElementById("registerHome").classList.remove("show");
  //     document.getElementById("loginHome").classList.add("show");
  //   });
  // });

  // document.querySelectorAll(".showAdvsearch").forEach(function (element) {
  //   element.addEventListener("click", function () {
  //     document.querySelector(".hideSeach").classList.toggle("showIt");
  //   });
  // });

  // document.querySelectorAll(".moreAction").forEach(function (element) {
  //   element.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     console.log("asd");
  //     this.nextElementSibling.classList.toggle("actionShow");
  //   });
  // });

  // Swiper pages
  let swiperHome = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  let SwiperDash = new Swiper(".SwiperDash", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // count up
  let counterUp = window.counterUp["default"];
  let $counters = $(".counter");
  $counters.each(function (ignore, counter) {
    let waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});
