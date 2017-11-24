/*jshint esversion: 6 */

//Jquery objects holding the icons
let $icon1 = $('<i class="fa fa-diamond"></i>');
let $icon2 = $('<i class="fa fa-diamond"></i>');
let $icon3 = $('<i class="fa fa-cube"></i>');
let $icon4 = $('<i class="fa fa-cube"></i>');
let $icon5 = $('<i class="fa fa-paper-plane-o"></i>');
let $icon6 = $('<i class="fa fa-paper-plane-o"></i>');
let $icon7 = $('<i class="fa fa-anchor"></i>');
let $icon8 = $('<i class="fa fa-anchor"></i>');
let $icon9 = $('<i class="fa fa-bolt"></i>');
let $icon10 = $('<i class="fa fa-bolt"></i>');
let $icon11 = $('<i class="fa fa-leaf"></i>');
let $icon12 = $('<i class="fa fa-leaf"></i>');
let $icon13 = $('<i class="fa fa-bicycle"></i>');
let $icon14 = $('<i class="fa fa-bicycle"></i>');
let $icon15 = $('<i class="fa fa-bomb"></i>');
let $icon16 = $('<i class="fa fa-bomb"></i>');
let openCards = []; //Array that hold current opened cards
let clicks = 0;
let moves = 0;
let $moves = $('.moves');
let $stars = $('.stars');
let rating = "";
let start = false;  //timer does not start when page loads
let mins = 0;
let secs = 0;
let tick = 0;
let timerDisplay = "";
let array = [$icon1, $icon2, $icon3, $icon4, $icon5, $icon6, $icon7, $icon8, $icon9, $icon10, $icon11, $icon12, $icon13, $icon14, $icon15, $icon16];


loadCard(); //initial page with randomised cards
myTimer();  //timer ready to start when any card is clicked

$('.restart i, .modal-restart').on('click', function() {
  $('.modal').css('display', 'none'); //close modal when close button is clicked
  $('.card').removeClass('show open match');  //when restart button is clicked cards reset
  loadCard(); //when restart button is clicked, cards will randomise
  start = false; //when restart button is clicked, timer stops
  moves = 0;
  mins = 0;
  secs = 0;
  tick = 0;

  rating = "";  //ratings reset when restart button clicked
  rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
  rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
  rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
  $stars.html(rating);

  $('.clock').html('0:00'); //timer display resets when restart button clicked

  $moves.html('Moves: ' + moves); //moves display resets when restart button clicked

  $('.card').css('pointer-events', 'auto'); //cards clickability reenabled
});



$('.card').click(function() {

  start = true; //timer starts when any card is clicked
  $(this).addClass('open show'); //a card clicked will display
  clicks++;

  if (clicks < 2) {
    $('.card').css('pointer-events', 'auto'); //if user clicks less than twice, user is allowed to click once more
    $('.match').css('pointer-events', 'none'); //at this point, matched cards clickability will be disabled
    $('.restart').css('pointer-events', 'none'); //disable restart button while first click in progress
  } else if (clicks > 1) {
    $('.card').css('pointer-events', 'none'); //if user clicked more than once, all cards will be disabled
    $('.restart').css('pointer-events', 'auto'); //enable restart button after the first move is completed

    moves++;
    $moves.html('Moves: ' + moves); //update moves display during game
    setTimeout(function () {
      clicks = 0;
      $('.card').css('pointer-events', 'auto'); //after 2 clicks, clicks will reset back to 0 and cards wll be reenabled
      $('.match').css('pointer-events', 'none'); //matched cards will remain dsiabled
    }, 800);
  }

  if (moves >= 35) {  //Update star icons when users attempted over 35 times
    rating = "";
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star-o" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star-o" aria-hidden="true"></i> ';
    $stars.html(rating);
    $('.rating').html('Rating: ' + rating); //append stars to modal
  } else if (moves >= 20) { //Update star icons when users attempted over 20 times
    rating = "";
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star-o" aria-hidden="true"></i> ';
    $stars.html(rating);
    $('.rating').html('Rating: ' + rating); //append stars to modal
  } else if (moves < 20) { //3 stars if user complete 20 attempts
    rating = "";
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    rating += ' <i class="fa fa-star" aria-hidden="true"></i> ';
    $stars.html(rating);
    $('.rating').html('Rating: ' + rating); //append stars to modal
  }

  openCards.push($(this)); //Push current clicked card to the openCards array
  openCards[0].css('pointer-events', 'none'); //the clicked card will not longer be clickable
  $('.moves-count').html('Moves: <b>' + moves + '</b>'); //append updated number of moves to the modal

  if (openCards.length === 2) { //if there are 2 opened cards in openCards array, execute compareCards in 500ms
    setTimeout(function () {
      compareCards();
    }, 500);
  }
});



function loadCard() { //randomise cards in the deck function
  let newArray = shuffle(array);
  $('.deck li').empty();
  $('.deck li').each(function (index) {
    $(this).append(newArray[index]);
  });
}



function shuffle(array) { //shuffles the icons array
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function myTimer() {  //timer function
  setInterval(function () {
    if (start === true) {
      tick++; //setInterval function will increment tick every 1 second
      mins = Math.floor(tick / 60); //60 ticks will equate to 1 (1 minute)
      secs = tick % 60; //secs will increment up to 59 and then reset back to 0

      timerDisplay = "";
      if (secs < 10) {
        timerDisplay = "";
        timerDisplay += mins + ":" + "0" + secs;
      } else {
        timerDisplay = "";
        timerDisplay += mins + ":" + secs;
      }


      $('.clock').html(timerDisplay); //update timer while game is running every second
    }

    setInterval(function () { //when all cards are guessed, the timer stops immediately
      if ($('.match').length === 16) {
        start = false;
        $('.modal').css('display', 'block');
        $('.time').html('Time: <b>' + timerDisplay + '</b>');
      }
    }, -1000);  //-1000 ms to compensate for the 1000 delay setInterval function
  }, 1000);
}



function compareCards() { //comparing 2 cards from the openCards array
  if (openCards.length === 2) { //begin when there are 2 cards in OpenCards array

    if (openCards[0].children().attr('class') === openCards[1].children().attr('class')) { //if both cards have the same icon classes
      openCards[0].addClass('match'); //add match cards styles
      openCards[1].addClass('match');

    } else {
      openCards[0].removeClass('show open'); //if compared cards have different icons class then reset cards
      openCards[1].removeClass('show open');

      openCards[0].addClass('wrong');
      openCards[1].addClass('wrong');
    }

    if ($('.deck li').hasClass('wrong')) {  //wrong cards styles added for 500ms
      setTimeout(function () {
        $('.card').removeClass('wrong');
      }, 500);
    }
  }

  openCards = []; //reset openCards array
}
