
$('.hamburger-container').click(function() {
  $('.mobile-nav').css('display', 'block');
  $('.hamburger-container').css('display', 'none');
  $('body').css('overflow', 'hidden');
});

$('.x').click(function() {
  $('.hamburger-container').css('display', 'inline-block');
  $('.mobile-nav').css('display', 'none');
  $('body').css('overflow', 'auto');
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});
