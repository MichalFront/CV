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

    //////////////
  ///// text animation strona 1
  //////////////

  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "I'm a Front-end Developer", "I Build Websites", "I Solve Problems"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("#textanimation").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 0);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });