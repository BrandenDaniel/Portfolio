$(document).ready(function(){

  var randomNum;
  var randomQuote;
  var randomAuthor;

  function getQuote(){

    var quotes = ["Pass into the iris.", "Let’s drop the beat!", "Warīhum quwitak! / Show them your power!", "Apagando las luces. / Turning off the lights.", "Heroes never die!", "冻住，不许走! / Freeze! don't move!", "Ogon po gotovnosti! / Fire at will!", "Cease your resistance!", "Hammer down!", "Molten core!", "Personne n’échappe à mon regard / No one can hide from my sight.", "Bomb's away!", "Ryuugekiken!", "Ryuu-ga, Wa-ga-te-ki-wo, Ku-ra-u!", "Eat this!", "ROARRRRR!!!", "It's high noon.", "I've got you in my sights!", "DIE, DIE, DIE!", "Justice rains from above!", "Fire in the hole!", "Du do do doooo do DUUUU", "Nerf this!", "Imagination is the essence of discovery.", "Death walks among you.", "Justice will be done", "One shot, one kill.", "Make defeat an impossibility in your mind.", "Cheers, love! The calvary's here!", "The true enemy of humanity is disorder.", "I will protect the innocent.", "True self is without form.", "With every death comes honor. With honor, redemption.", "It's a perfect day for some mayhem!", "I play to win.", "A steady blade balances the soul.", "Watch and learn.", "You seem familiar. Ain't I killed you before?", "What are you looking at?", "I didn't start this war... But I'm damn well gonna finish it.", "Not on my watch.", "Where's the fun in playing fair?", "Boop!", "You're taking this very seriously.", "You got it!", "Check me out.", "The world could always use more heroes.", "Looks like you need a time out.", "Ever get that feeling of déjà vu?", "Dweet! Dweet! Dweet!", "Bwoo chirr chirr chirr chirr chirr chirr chirr", "I choose you, spirit dragon", "Remember this moment.", "From one thing, know ten thousand things.", "I do what I must.", "Ignore all distractions.", "Tick-Tock-Tick-Tock-Tick-Tock!", "If at first you don't succeed... Blow it up again!", "Gong fi xa cai!", "It's the little things.", "Hang in there.", "A-Mei-zing!", "Sorry! Sorry, I'm sorry. Sorry.", "You have to let it go.", "I hope you learned your lesson.", "Overcome all obstacles.", "Hard work pays off!", "Don't get caught with your beard in the letter box.", "People always underestimate the engineers.", "For the last time, I'm Swedish!", "Let them eat cake.", "Ouh là là.", "I don't miss.", "What's an aimbot?"];

    var author = ["-Zenyatta", "-Lucio", "-Ana", "-Sombra","-Mercy", "-Mei", "-Zarya", "-Orisa", "-Reinhardt", "-Torbjörn", "-Widowmaker", "-Tracer", "-Genji", "-Hanzo", "-Roadhog", "-Winston", "-McCree", "-Soldier:76", "-Reaper", "-Pharah", "-Junkrat", "-Baston", "-D.Va", "-Winston", "-Reaper", "-Reinhardt", "-Widowmaker", "-Zenyatta", "-Tracer", "-Symmetra", "-Pharah", "-Zenyatta", "-Hanzo", "-Junkrat", "-D.Va", "-Genji", "-McCree", "-McCree", "-Reaper", "-Soldier:76", "-Soldier:76", "-Sombra", "-Sombra", "-Sombra", "-Tracer", "-Tracer", "-Tracer", "-Tracer", "-Tracer", "-Bastion", "-Bastion", "-Hanzo", "-Hanzo", "-Hanzo", "-Hanzo", "-Hanzo", "-Junkrat", "-Junkrat", "-Junkrat", "-Junkrat", "-Mei", "-Mei", "-Mei", "-Mei", "-Mei", "-Mei", "-Torbjörn", "-Torbjörn", "-Torbjörn", "-Torbjörn", "-Widowmaker", "-Widowmaker", "-Widowmaker", "-Widowmaker"];

    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];

    $(".generator p").text('"'+randomQuote+'"');
    $(".author").text(randomAuthor);
  }

  $("#gen").on("click", function(){
    getQuote();
  });

  $(".twitter").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuote+" "+randomAuthor);
  });
});
