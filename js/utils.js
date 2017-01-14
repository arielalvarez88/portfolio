var offsetBody = function(){

    var navBar = $("#principal-navbar"),
    navBarHeight = navBar.outerHeight();

    $(".category").css("padding-top",navBarHeight);
    $(".category").css("padding-bottom",navBarHeight);
    centralizeSectionsContent = function(sectionSelector){
      var sectionHeight = $(sectionSelector).outerHeight(),
          sectionContentHeight = $(sectionSelector + "> .container").outerHeight(),
          sectionPaddingTop= (sectionHeight - navBarHeight)/2 - (sectionContentHeight/2);

          if(sectionPaddingTop > 0){
            $(sectionSelector + "> .container").css("padding-top",sectionPaddingTop);
          }

    };

    centralizeSectionsContent(".first-section");
    
};


$(window).resize(offsetBody);
$(document).ready(offsetBody);



var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var $animation_elements = $('.animation-element');

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');


    }
    $element.removeClass('initially-transparent');
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
$(document).ready(check_if_in_view);
$(document).ready(function(){

  $(function() {
      $('body').vegas({
          timer: false,
          slides: [
              { src: '/img/backgrounds/bg1.jpg' },
              { src: '/img/backgrounds/bg2.jpg' },
              { src: '/img/backgrounds/bg3.jpg' },
              { src: '/img/backgrounds/bg4.jpg' },
              { src: '/img/backgrounds/bg5.jpg' },
              { src: '/img/backgrounds/bg6.jpg' }


          ]      });
  });


});
