$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$('#open-nav').click(function() {
  $('.mobile-nav').css('width', '65%');
  $('.hamburger-container').css('display', 'none');
  $('body').css('overflow', 'hidden');
  $('.work, header, .featured-about, .featured-contact, .email-sent-container').css('filter', 'blur(1px)');
  $('.overlay').css('display', 'block');
});

$('#close-nav').click(function() {
  $('.mobile-nav').css('width', '0');
  $('body').css('overflow', 'auto');
  $('.hamburger-container').css('display', 'inline-block');
  $('.overlay').css('display', 'none');
  $('.work, header, .featured-about, .featured-contact, .email-sent-container').css('filter', 'blur(0px)');
});

$('main, .overlay').click(function() {
  $('body').css('overflow', 'auto');
  $('.overlay').css('display', 'none');
  $('.mobile-nav').css('width', '0');
  $('.hamburger-container').css('display', 'inline-block');
  $('.work, header, .featured-about, .featured-contact, .email-sent-container').css('filter', 'blur(0px)');
});
