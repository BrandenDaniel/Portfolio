// MOBILE
// $('.mobile i').hover(function() {
//   $('.mobile h3 a').css('text-decoration', 'underline');
//   $(this).css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
// }, function() {
//   $('.mobile h3 a').css('text-decoration', 'none');
//   $(this).css('background', 'rgba(0,0,0, 0)');
//   $(this).css('color', '#eee');
// });
//
// $('.mobile h3 a').hover(function() {
//   $('.mobile i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'underline');
// }, function() {
//   $('.mobile i').css({
//     'background': 'rgba(0,0,0,0)',
//     'transition': '.4s',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'none');
// });
//
// // EMAIL
// $('.email i').hover(function() {
//   $('.email h3 a').css('text-decoration', 'underline');
//   $('.email i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
// }, function() {
//   $('.email h3 a').css('text-decoration', 'none');
//   $('.email i').css('background', 'rgba(0,0,0,0)');
//   $('.email i').css('color', '#eee');
// });
//
// $('.email h3 a').hover(function() {
//   $('.email i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'underline');
// }, function() {
//   $('.email i').css({
//     'background': 'rgba(0,0,0,0)',
//     'transition': '.4s',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'none');
// });
//
// // GITHUB
// $('.github i').hover(function() {
//   $('.github h3 a').css('text-decoration', 'underline');
//   $('.github i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
// }, function() {
//   $('.github h3 a').css('text-decoration', 'none');
//   $('.github i').css('background', 'rgba(0,0,0,0)');
//   $('.github i').css('color', '#eee');
// });
//
// $('.github h3 a').hover(function() {
//   $('.github i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'underline');
// }, function() {
//   $('.github i').css({
//     'background': 'rgba(0,0,0,0)',
//     'transition': '.4s',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'none');
// });
//
// // LINKEDIN
// $('.linkedin i').hover(function() {
//   $('.linkedin h3 a').css('text-decoration', 'underline');
//   $('.linkedin i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
// }, function() {
//   $('.linkedin h3 a').css('text-decoration', 'none');
//   $('.linkedin i').css('background', 'rgba(0,0,0,0)');
//   $('.linkedin i').css('color', '#eee');
// });
//
// $('.linkedin h3 a').hover(function() {
//   $('.linkedin i').css({
//     'background': 'rgba(0,0,0,0.2)',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'underline');
// }, function() {
//   $('.linkedin i').css({
//     'background': 'rgba(0,0,0,0)',
//     'transition': '.4s',
//     'color': '#eee'
//   });
//   $(this).css('text-decoration', 'none');
// });


$('.hamburger-icon').click(function(){
   $('.mobile-nav').css('display', 'block');
   $('body').css('overflow', 'hidden');
});

$('.x').click(function(){
  $('.mobile-nav').css('display', 'none');
  $('body').css('overflow', 'auto');
});

$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
