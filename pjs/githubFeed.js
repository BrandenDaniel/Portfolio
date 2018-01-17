var repoData;
var contribution = 12; //12 added contributions due to deleted projects that github persist to display
var addition = null;

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
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
 };
// Send it
githubIoReq.send();

var folioReq = new XMLHttpRequest();
folioReq.open('GET', 'https://api.github.com/repos/brandendaniel/Portfolio/stats/contributors');
folioReq.onload = function() {
   var commit = JSON.parse(folioReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
 };
// Send it
folioReq.send();

var froggerReq = new XMLHttpRequest();
froggerReq.open('GET', 'https://api.github.com/repos/brandendaniel/FroggerSimulator/stats/contributors');
froggerReq.onload = function() {
   var commit = JSON.parse(froggerReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
 };
// Send it
froggerReq.send();

var matchingReq = new XMLHttpRequest();
matchingReq.open('GET', 'https://api.github.com/repos/brandendaniel/MatchingGame/stats/contributors');
matchingReq.onload = function() {
   var commit = JSON.parse(matchingReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
 };
// Send it
matchingReq.send();

var eComReq = new XMLHttpRequest();
eComReq.open('GET', 'https://api.github.com/repos/brandendaniel/E-commerce-Project/stats/contributors');
eComReq.onload = function() {
   var commit = JSON.parse(eComReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
 };
// Send it
eComReq.send();

var pixelArtReq = new XMLHttpRequest();
pixelArtReq.open('GET', 'https://api.github.com/repos/brandendaniel/Pixel-Art-Maker/stats/contributors');
pixelArtReq.onload = function() {
   var commit = JSON.parse(pixelArtReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
};
// Send it
pixelArtReq.send();

var owQuoteReq = new XMLHttpRequest();
owQuoteReq.open('GET', 'https://api.github.com/repos/brandendaniel/Overwatch-Quote-Generator/stats/contributors');
owQuoteReq.onload = function() {
   var commit = JSON.parse(owQuoteReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
};
// Send it
owQuoteReq.send();

var cmsReq = new XMLHttpRequest();
cmsReq.open('GET', 'https://api.github.com/repos/brandendaniel/CMS-theme-BootStrap/stats/contributors');
cmsReq.onload = function() {
   var commit = JSON.parse(cmsReq.responseText);
   contribution += commit[0].total;
   for (var i = 0; i < commit[0].weeks.length; i++) {
     addition += commit[0].weeks[i].a;
   }
   $('.contribution').html(contribution);
   $('.addition').html(addition);
};
// Send it
cmsReq.send();
