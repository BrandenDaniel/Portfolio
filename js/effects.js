$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$('#open-nav').click(function() {
  $('.mobile-nav').css('width', '50%');
  $('.hamburger-container').css('display', 'none');
  $('body').css('overflow', 'hidden');
});

$('#close-nav').click(function() {
  $('.mobile-nav').css('width', '0');
  $('body').css('overflow', 'auto');
  $('main').css('margin-right', '0');
  $('.hamburger-container').css('display', 'inline-block');
});

$('main').click(function() {
  $('.mobile-nav').css('width', '0');
  $('.hamburger-container').css('display', 'inline-block');
});
