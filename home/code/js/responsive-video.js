$(function() {
  window.resizeVideos = function () {
    var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], object, embed");

    $allVideos.each(function () {
      var t = $(this);

      if (!t.attr('data-aspectRatio')) {
        $(this)
          // jQuery .data does not work on object/embed elements
          .attr('data-aspectRatio', this.height / this.width)
          .removeAttr('height')
          .removeAttr('width');
      }
    });

    $allVideos.each(function () {
      var $el = $(this);
      var newWidth = $el.parent().width();

      $el
        .width(newWidth)
        .height(newWidth * $el.attr('data-aspectRatio'));
    });

  };

  $(window).resize(resizeVideos).resize();
});
