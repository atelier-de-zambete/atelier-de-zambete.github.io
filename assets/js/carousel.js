// rotating carousel on homepage
var maxstep = 2;

var rotateDiv = function(step, div_id, timeout) {
  var divs = document.getElementById(div_id).getElementsByClassName("slide");
  for (var i = 0; i < divs.length; i++ ) {
    var div = divs[i];
    if (div.id != "") {
      if (i != step) {
        div.style.opacity = "0";
      }
      else {
        div.style.opacity = "1";
      }
    }
  }
  setTimeout(showNext, timeout, step, div_id, timeout);
}

var showNext = function(step, div_id, timeout) {
  if (step < maxstep) {
    step++;
  }
  else {
    step = 0;
  }

  rotateDiv(step, div_id, timeout);
}
var startCarousel = function() {

  showNext(-1, 'slider-top', 4500);
}

document.onload = startCarousel();
