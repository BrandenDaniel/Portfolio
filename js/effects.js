
$('.hamburger-icon').click(function() {
  $('.mobile-nav').css('display', 'block');
  $('body').css('overflow', 'hidden');
});

$('.x').click(function() {
  $('.mobile-nav').css('display', 'none');
  $('body').css('overflow', 'auto');
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});
