$(function () {
  flipCover({
    css: "puddlejumper",
    url: "http://puddlejumper.space",
    text: "Visit PuddleJumper",
    width: "250px"
  });
  flipCover({
    css: "pj-github",
    url: "https://github.com/scottyschup/finalproject",
    text: "Source code",
    width: "125px"
  });
  flipCover({
    css: "asteroids",
    url: "http://scottschupbach.com/asteroidassault",
    text: "Play Stargate: Asteroid Assault",
    width: "250px"
  });
  flipCover({
    css: "aa-github",
    url: "https://github.com/scottyschup/asteroidassault",
    text: "Source code",
    width: "125px"
  });
  flipCover({
    css: "slappityslap",
    url: "http://scottyschup.github.io/slappityslap/",
    text: "Play Slappity Slap",
    width: "250px"
  });
  flipCover({
    css: "ss-github",
    url: "https://github.com/scottyschup/slappityslap",
    text: "Source code",
    width: "125px"
  });

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    var delta = -st / 5;
    $(".background").css("transform", "translateY(" + delta + "px)");
  });
}());
