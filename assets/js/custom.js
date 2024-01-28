$( document ).ready(function() {





    // handel two modal register & login
    $('.closeModal1').click(function(){
        $('#loginHome').modal('hide')
    })
    $('.closeModal2').click(function(){
        $('#registerHome').modal('hide')
        $('#loginHome').modal('show')
    })
    $('.showAdvsearch').click(function(){
        $('.hideSeach').toggleClass('showIt')
    })
    $('.moreAction').click(function(){
        $(this).next().fadeToggle('fast')
    })
    // Swiper pages
    var swiperHome = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
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