$( document ).ready(function() {
    $('#headline').fitText(1.2, { minFontSize: '14px', maxFontSize: '60px' });
});







(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
//reggie resize header

$( window ).scroll(function() {
 var val = $(window).scrollTop();
 $("#val").text(val);
$("scrollreg").css({"background-position":val*2+"px 50%"}); });

//menu switch

var $document = $(document);

$document.scroll(function() {
  if ($document.scrollTop() >= 580) {
    $("#nav").addClass("scroll-nav");
    $("#nav").addClass("animated");
    $("#nav").addClass("fadeInDown");
    $("#nav").removeClass("default-nav");
  }

  else {
    $("#nav").removeClass("scroll-nav");
    $("#nav").removeClass("animated");
    $("#nav").removeClass("fadeInDown");
    $("#nav").addClass("default-nav");

  }



});

//animations

$document.scroll(function() {
    //if ($(this).width() < 2000) {
        if ($(this).height() <= 970) {
            if ($document.scrollTop() < 300) {

            $("#scrollbio").hide();
            $("#scrollreg").hide();


            }
            if($(this).scrollTop() > 400) {

            //web animations
            $("#scrollbio").show();
            $("#scrollreg").show();


            $("#scrollreg").addClass("animated fadeInLeft");
            $("#scrollbio").addClass("animated fadeInUp");



            }
      //    }
        }
});
