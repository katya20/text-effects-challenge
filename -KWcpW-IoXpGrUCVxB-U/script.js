//var shown = true
//setInterval(function() {
//  if (shown) {
//    $(".blinking").css({"visibility": "hidden"});
//    shown = false;
//  } else {		
//    $(".blinking").css({"visibility": "visible"});
//    shown = true;
//  }
//}, 500)
//
//
//var lettersToFade = $(".by-letter-fade").children();
//var index = 0
//setInterval(function() {
//  if (index >= lettersToFade.length) {
//    index = 0
//  }
//
//  var letterToFade = $(lettersToFade[index]);
//
//  letterToFade.animate({"opacity": "0"}, {
//    complete: function() {
//      letterToFade.animate({opacity: "1"})
//    }
//  }) 	
//
//  index = index + 1
//}, 150)

var size = 100
var time = 2000

var diamond = $(".diamond")

diamond.animate({"font-size": size}, {
  complete: function() {
    diamond.animate({"font-size": "0px"}),
  },
  duration: time  
  }
)

                                              

//  diamond.height = 150;
//  diamond.width = 150;
//  diamond.top = y;
//  diamond.left = x;
