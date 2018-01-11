// MOBILE
$('.mobile i').hover(function() {
  $('.mobile h3 a').css('text-decoration', 'underline');
  $(this).css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
}, function() {
  $('.mobile h3 a').css('text-decoration', 'none');
  $(this).css('background', 'rgba(0,0,0, 0)');
  $(this).css('color', 'rgba(255,255,255,.45)');
});

$('.mobile h3 a').hover(function() {
  $('.mobile i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'underline');
}, function() {
  $('.mobile i').css({
    'background': 'rgba(0,0,0,0)',
    'transition': '.4s',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'none');
});

// EMAIL
$('.email i').hover(function() {
  $('.email h3 a').css('text-decoration', 'underline');
  $('.email i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
}, function() {
  $('.email h3 a').css('text-decoration', 'none');
  $('.email i').css('background', 'rgba(0,0,0,0)');
  $('.email i').css('color', 'rgba(255,255,255,.45)');
});

$('.email h3 a').hover(function() {
  $('.email i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'underline');
}, function() {
  $('.email i').css({
    'background': 'rgba(0,0,0,0)',
    'transition': '.4s',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'none');
});

// GITHUB
$('.github i').hover(function() {
  $('.github h3 a').css('text-decoration', 'underline');
  $('.github i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
}, function() {
  $('.github h3 a').css('text-decoration', 'none');
  $('.github i').css('background', 'rgba(0,0,0,0)');
  $('.github i').css('color', 'rgba(255,255,255,.45)');
});

$('.github h3 a').hover(function() {
  $('.github i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'underline');
}, function() {
  $('.github i').css({
    'background': 'rgba(0,0,0,0)',
    'transition': '.4s',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'none');
});

// LINKEDIN
$('.linkedin i').hover(function() {
  $('.linkedin h3 a').css('text-decoration', 'underline');
  $('.linkedin i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
}, function() {
  $('.linkedin h3 a').css('text-decoration', 'none');
  $('.linkedin i').css('background', 'rgba(0,0,0,0)');
  $('.linkedin i').css('color', 'rgba(255,255,255,.45)');
});

$('.linkedin h3 a').hover(function() {
  $('.linkedin i').css({
    'background': 'rgba(0,0,0,0.2)',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'underline');
}, function() {
  $('.linkedin i').css({
    'background': 'rgba(0,0,0,0)',
    'transition': '.4s',
    'color': 'rgba(255,255,255,.45)'
  });
  $(this).css('text-decoration', 'none');
});

var hamburger = $('.hamburger-icon');
var nav = $('.mobile-nav');

$('.hamburger-icon').click(function(){
   $('.mobile-nav').css('display', 'block');
   $('body').css('overflow', 'hidden');
});
