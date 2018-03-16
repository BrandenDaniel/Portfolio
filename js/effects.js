$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$('#open-nav').click(function() {
  $('.mobile-nav').css('width', '250px');
  $('.hamburger-container').css('display', 'none');
  $('body').css('overflow', 'hidden');
});

$('#close-nav').click(function() {
  $('.mobile-nav').css('width', '0');
  $('body').css('overflow', 'auto');
  $('.hamburger-container').css('display', 'inline-block');
});
