$( document ).ready(function() {





    // handel two modal register & login
    $('.closeModal1').click(function(){
        $('#loginHome').modal('hide')
    })
    $('.topNav .slide-nav').click(function(){
        $('.LinksDashboard').toggleClass('showSide')
        $(this).toggleClass('opened')
    })
    $('.closeModal2').click(function(){
        $('#registerHome').modal('hide')
        $('#loginHome').modal('show')
    })
    // handle advanced search
    $('.showAdvsearch').click(function(){
        $('.hideSeach').toggleClass('showIt')
    })
    $('.moreAction').click(function(e){
      e.preventDefault()
        $(this).next().fadeToggle('fast')
    })
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

