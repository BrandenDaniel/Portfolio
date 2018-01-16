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


var repoData;
var contribution = 12; //12 added contributions due to deleted projects that github persist to display

var repoRequest = new XMLHttpRequest();
repoRequest.open('GET', 'https://api.github.com/users/brandendaniel');
repoRequest.onload = function() {
   var data = JSON.parse(repoRequest.responseText);
   repoData = data.public_repos;
   $('.repoData').html(repoData);
};
// Send it
repoRequest.send();

var githubIoReq = new XMLHttpRequest();
githubIoReq.open('GET', 'https://api.github.com/repos/brandendaniel/BrandenDaniel.github.io/stats/contributors');
githubIoReq.onload = function() {
   var commit = JSON.parse(githubIoReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
githubIoReq.send();

var folioReq = new XMLHttpRequest();
folioReq.open('GET', 'https://api.github.com/repos/brandendaniel/Portfolio/stats/contributors');
folioReq.onload = function() {
   var commit = JSON.parse(folioReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
folioReq.send();

var froggerReq = new XMLHttpRequest();
froggerReq.open('GET', 'https://api.github.com/repos/brandendaniel/FroggerSimulator/stats/contributors');
froggerReq.onload = function() {
   var commit = JSON.parse(froggerReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
froggerReq.send();

var matchingReq = new XMLHttpRequest();
matchingReq.open('GET', 'https://api.github.com/repos/brandendaniel/MatchingGame/stats/contributors');
matchingReq.onload = function() {
   var commit = JSON.parse(matchingReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
matchingReq.send();

var eComReq = new XMLHttpRequest();
eComReq.open('GET', 'https://api.github.com/repos/brandendaniel/E-commerce-Project/stats/contributors');
eComReq.onload = function() {
   var commit = JSON.parse(eComReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
eComReq.send();

var pixelArtReq = new XMLHttpRequest();
pixelArtReq.open('GET', 'https://api.github.com/repos/brandendaniel/Pixel-Art-Maker/stats/contributors');
pixelArtReq.onload = function() {
   var commit = JSON.parse(pixelArtReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
pixelArtReq.send();

var owQuoteReq = new XMLHttpRequest();
owQuoteReq.open('GET', 'https://api.github.com/repos/brandendaniel/Overwatch-Quote-Generator/stats/contributors');
owQuoteReq.onload = function() {
   var commit = JSON.parse(owQuoteReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
owQuoteReq.send();

var cmsReq = new XMLHttpRequest();
cmsReq.open('GET', 'https://api.github.com/repos/brandendaniel/CMS-theme-BootStrap/stats/contributors');
cmsReq.onload = function() {
   var commit = JSON.parse(cmsReq.responseText);
   contribution += commit[0].total;
   $('.contribution').html(contribution);
};
// Send it
cmsReq.send();
