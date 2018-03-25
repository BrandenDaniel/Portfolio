let $modal = $('#modal');
let $modalImagesCont = $('.modal-thumbnail-images');
let $modalImages = $('.modal-thumbnail-images img');
let $mainImg = $('.main-img');
let $body = $('body');
let currentMain;


let redditSearcher = ['./img/reddit-searcher.png', './img/reddit-searcher-fullpage.png'];
let memoryGame = ['./img/memory-game.png','./img/memory-game-playing.png','./img/memory-game-winner.png'];
let frogger = ['./img/frogger.png','./img/frogger-playing.png'];
let eCom = ['./img/e-com.png','./img/e-com-1.png','./img/e-com-2.png','./img/e-com-fullpage.png'];
let cms = ['./img/cms.png','./img/cms2.png','./img/cms3.png','./img/cms4.png', './img/cms1.png'];

$(window).click(function(e) {
  if (e.target == modal) {
    $modal.css('display' , 'none');
    $body.css('overflow', 'auto');
  }
})




$('.reddit-gallery').click(function() {
  $mainImg.attr('src', './img/reddit-searcher.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < redditSearcher.length; i++) {
    $modalImagesCont.append(`<img src='${redditSearcher[i]}' alt='gallery images'>`);
  }

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border' , '3px solid tomato');

})

$('.memory-gallery').click(function() {
  $mainImg.attr('src', './img/memory-game.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < memoryGame.length; i++) {
    $modalImagesCont.append(`<img src='${memoryGame[i]}' alt='gallery images'>`);
  }

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border' , '3px solid tomato');

})

$('.frogger-gallery').click(function() {
  $mainImg.attr('src', './img/frogger.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < frogger.length; i++) {
    $modalImagesCont.append(`<img src='${frogger[i]}' alt='gallery images'>`);
  }

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border' , '3px solid tomato');

})

$('.eCom-gallery').click(function() {
  $mainImg.attr('src', './img/e-com.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < eCom.length; i++) {
    $modalImagesCont.append(`<img src='${eCom[i]}' alt='gallery images'>`);
  }

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border' , '3px solid tomato');

})

$('.cms-gallery').click(function() {
  $mainImg.attr('src', './img/cms.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < cms.length; i++) {
    $modalImagesCont.append(`<img src='${cms[i]}' alt='gallery images'>`);
  }

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border' , '3px solid tomato');

})
