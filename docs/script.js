// $(document).ready(function() {
//     $('.bar').click(function() {
//       var sectionId = $(this).data('section');
//       var sectionOffset = $('#' + sectionId).offset().top;

//       $('html, body').animate({ scrollTop: sectionOffset }, 500);
//     });
//   });

//   $(document).ready(function() {
//     $('.menu-item').click(function() {
//       var sectionId = $(this).data('section');
//       var sectionOffset = $('#' + sectionId).offset().top;

//       $('html, body').animate({ scrollTop: sectionOffset }, 500);
//     });
//   });
//   $(document).ready(function() {
//     $('.menu-item').click(function() {
//       $('.menu-item').removeClass('active');
//       $(this).addClass('active');
//     });
//   });


  ///////////////////

  $(document).ready(function() {
    $('.menu-item').click(function() {
      var sectionId = $(this).data('section');
      var sectionOffset = $('#' + sectionId).offset().top;

      $('html, body').animate({ scrollTop: sectionOffset }, 50);

      return false;
    });


    $(window).scroll(function() {
      var currentSection = null;

      $('.menu-item').each(function() {
        var sectionId = $(this).data('section');
        var sectionTop = $('#' + sectionId).offset().top;
        var windowTop = $(window).scrollTop();

        if (windowTop >= sectionTop) {
          currentSection = sectionId;
        }
      });

      $('.menu-item').removeClass('active');
      $('.menu-item[data-section="' + currentSection + '"]').addClass('active');
    });
  });
  $(document).ready(function() {
    $('.bar').click(function() {
      var sectionId = $(this).data('section');
      var sectionOffset = $('#' + sectionId).offset().top;

      $('html, body').animate({ scrollTop: sectionOffset }, 50);

      return false;
    });


    $(window).scroll(function() {
      var currentSection = null;

      $('.bar').each(function() {
        var sectionId = $(this).data('section');
        var sectionTop = $('#' + sectionId).offset().top;
        var windowTop = $(window).scrollTop();

        if (windowTop >= sectionTop) {
          currentSection = sectionId;
        }
      });

      $('.bar').removeClass('active');
      $('.bar[data-section="' + currentSection + '"]').addClass('active');
    });
  });

  //////////////
  /////moje
  //////////////
  $(document).ready(function() {
    $('.bar').click(function() {
      $('.bar').removeClass('active');
      $(this).addClass('active');
    });
  });



    //////////////
  /////scroll kółkiem o całą stronę
  //////////////

  $(document).ready(function() {
    var isScrolling = false;

    $(window).on('wheel', function(event) {
      if (!isScrolling) {
        isScrolling = true;

        var delta = event.originalEvent.deltaY;
        var sectionHeight = $(window).height();
        var currentSection = $(window).scrollTop() / sectionHeight;
        var targetSection;

        if (delta > 0) {
          targetSection = Math.ceil(currentSection);
        } else {
          targetSection = Math.floor(currentSection);
        }

        $('html, body').animate({
          scrollTop: targetSection * sectionHeight
        }, 1, function() {
          isScrolling = false;
        });
      }
    });
  });

