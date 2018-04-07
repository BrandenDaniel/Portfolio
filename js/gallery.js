let $modal = $('#modal');
let $modalImagesCont = $('.modal-thumbnail-images');
let $modalImages = $('.modal-thumbnail-images img');
let $mainImg = $('.main-img');
let $body = $('body');
let currentMain;

// IMAGE ARRAYS
let foodieHotspots = ['./img/foodie-hotspots.png', './img/foodie-hotspots-2.png', './img/foodie-hotspots-3.png'];
let redditSearcher = ['./img/reddit-searcher.png', './img/reddit-searcher-fullpage.png'];
let memoryGame = ['./img/memory-game-playing.png', './img/memory-game.png', './img/memory-game-winner.png'];
let frogger = ['./img/frogger.png', './img/frogger-playing.png'];
let eCom = ['./img/e-com.png', './img/e-com-1.png', './img/e-com-2.png', './img/e-com-fullpage.png'];
let cms = ['./img/cms.png', './img/cms2.png', './img/cms3.png', './img/cms4.png', './img/cms1.png'];

$(window).click(function(e) {
  if (e.target == modal) {
    $modal.css('display', 'none');
    $body.css('overflow', 'auto');
    $('.hamburger-icon').css('display', 'inline-block');
  }
})

$('.close-modal').click(function() {
  $modal.css('display', 'none');
  $body.css('overflow', 'auto');
  $('.hamburger-icon').css('display', 'inline-block');
})

$('.foodie-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/foodie-hotspots.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < foodieHotspots.length; i++) {
    $modalImagesCont.append(`<img src='${foodieHotspots[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');

})

$('.reddit-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/reddit-searcher.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < redditSearcher.length; i++) {
    $modalImagesCont.append(`<img src='${redditSearcher[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');

})

$('.memory-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/memory-game-playing.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $('.hamburger-container').css('display', 'none');
  $modalImagesCont.empty();

  for (var i = 0; i < memoryGame.length; i++) {
    $modalImagesCont.append(`<img src='${memoryGame[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');
})

$('.frogger-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/frogger.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < frogger.length; i++) {
    $modalImagesCont.append(`<img src='${frogger[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');
})

$('.eCom-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/e-com.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < eCom.length; i++) {
    $modalImagesCont.append(`<img src='${eCom[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');
})

$('.cms-gallery').click(function() {
  $('.hamburger-icon').css('display', 'none');
  $mainImg.attr('src', './img/cms.png');
  currentMain = $mainImg.attr('src');
  $modal.css('display', 'block');
  $body.css('overflow', 'hidden');
  $modalImagesCont.empty();

  for (var i = 0; i < cms.length; i++) {
    $modalImagesCont.append(`<img src='${cms[i]}' alt='gallery images'>`);
  }

  $('.modal-thumbnail-images img').click(function() {
    $('.modal-thumbnail-images img').css('border', 'none');
    $(this).css('border', '2px solid #30ba41');
    $mainImg.attr('src', this.src);
    currentMain = $mainImg.attr('src');
  })

  $(`.modal-thumbnail-images img[src$='${currentMain}']`).css('border', '2px solid #30ba41');
})
