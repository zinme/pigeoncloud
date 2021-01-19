jQuery(window).scroll(function() {
  if ($(this).scrollTop()>0)
   {
     $('.fixed-menu').addClass('header_menu_fixed');
   }
  else
   {

    $('.fixed-menu ').removeClass('header_menu_fixed');
     
   }
});
// End Fixed Menu

// Video Popup

var p = $(".popup__overlay");

$("#popup__toggle").click(function() {
  p.css("display", "block");
});
p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p).css("display", "none");
  }
});
$(".popup__close").click(function() {
  p.css("display", "none");
});

//video popup
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("popupVid");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'hide' ? 'none' : '';
  func = state == "hide" ? "pauseVideo" : "playVideo";
  iframe.postMessage(
    '{"event":"command","func":"' + func + '","args":""}',
    "*"
  );
}

$("#popup__toggle").click(function() {
  p.css("visibility", "visible").css("opacity", "1");
});

p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p)
      .css("visibility", "hidden")
      .css("opacity", "0");
    toggleVideo("hide");
  }
});

$(".popup__close").click(function() {
  p.css("visibility", "hidden").css("opacity", "0");
  toggleVideo("hide");
});
// End Video Popup

// Gallery
$(document).ready(function() {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox","mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".gallery a").fancybox();
});
// End Gallery


// BACK To Top
$(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 800,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 800,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});
