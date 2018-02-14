var repoData;
var contribution = 12; //12 added contributions due to deleted projects that github persist to display
var addition = null;


$.ajax({
  type: 'GET',
  url: 'https://api.github.com/users/brandendaniel?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    repoData = data.public_repos;
    $('.repoData').html(repoData);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/BrandenDaniel.github.io/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/Portfolio/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/FroggerSimulator/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/MatchingGame/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/E-commerce-Project/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/Pixel-Art-Maker/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/Overwatch-Quote-Generator/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});

$.ajax({
  type: 'GET',
  url: 'https://api.github.com/repos/brandendaniel/CMS-theme-BootStrap/stats/contributors?access_token=4388b2658182341d61c1506bdbf249d49d5f2acc',
  success: function(data) {
    contribution += data[0].total;

    for (var i=0; i < data[0].weeks.length; i++) {
      addition += data[0].weeks[i].a;
    }
    $('.contribution').html(contribution);
    $('.addition').html(addition);
  }
});
