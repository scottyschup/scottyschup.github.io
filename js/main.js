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

  if (window.SSdotCom === undefined) {
    window.SSdotCom = {};
  }

  SSdotCom.animatePage = function () {
    SSdotCom.contactLeft = $(".contact hgroup").position().left;
    SSdotCom.sectionsLeft = $(".sections").position().left;

    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      var percComplete = (1 - (300 - st) / 225);
      var yDelta = -st / 5;
      $(".background").css("transform", "translateY(" + yDelta + "px)");

      if (st > 75 && st < 300) {
        // position fixed; translate
        var newContactLeft = SSdotCom.contactLeft * (1 - percComplete);
        $(".contact hgroup").css({
          "position": "fixed"
        });

        $(".contact hgroup").css({
          "left": newContactLeft + "px",
          "top": "46px"
        });
        var newSectionsLeft = SSdotCom.sectionsLeft +
          (SSdotCom.sectionsLeft * percComplete);
        $(".sections").css({
          "position": "absolute",
          "left": newSectionsLeft + "px",
          "top": (75 - st) + "px"
        })
      }

      if (st < 75) {
        // position
        $(".contact hgroup, .sections").css({
          "position": "static"
        });

        $(".contact hgroup").css({
          "background": "none"
        });
      }

      if (st > 75) {
        $(".contact hgroup").css({
          "background-color": "rgba(140, 175, 210, 0.85)"
        });
      }

      if (st > 300) {
        $(".contact hgroup").css({
          "left": "0px",
          "top": "46px",
          "background-color": "#7aa",
          "box-shadow": "0 0 10px #7aa",
          "margin-left": "-10px",
          "padding-left": "20px"
        });

        $(".sections").css({
          "left": (SSdotCom.sectionsLeft * 2) + "px",
          // "top": (75 - st) + "px"
        })
      }
    });
  };
}());
