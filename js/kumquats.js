(function($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function(context, settings) {

      $(document).ready(function () {
      
        $(document).on("scroll", onScroll);

        $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          $('a').each(function () {
            $(this).removeClass('active');
          })
          $(this).addClass('active');
          let target = this.hash,
              menu = target;
              $target = $(target);
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
          }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          });
        });
      });
      
      function onScroll(event){
        let scrollPos = $(document).scrollTop();
        $('ul.front-navigation li a').each(function () {
          let currLink = $(this);
          let refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('ul.front-navigation li a').removeClass("active");
            currLink.addClass("active");
          } else {
            currLink.removeClass("active");
          }
        });
      }

    }
  };
})(jQuery, Drupal);
