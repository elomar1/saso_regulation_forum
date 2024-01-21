$( document ).ready(function() {

    let counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

    let $counters = $(".counter");
  
    /* Start counting, do this on DOM ready or with Waypoints. */
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