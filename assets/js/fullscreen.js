var imgs = [];
var currentSlide = 0;
var full;

window.addEventListener("load", (e) => {
    imgs = document.querySelectorAll('.gallery a img');
    full = document.querySelector('.fullscreen');
});

window.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowLeft') {
        navigate(-1);
    } else if (e.key == 'ArrowRight') {
        navigate(1);
    }
});

var fadeIn = (function() {
  image = document.querySelector('.fullscreen img');

	image.style.opacity = +image.style.opacity + 0.2;
	if (image.style.opacity >= 1.0) {
		image.style.opacity = 1.0;
		return false;
	} else {
		setTimeout("fadeIn()", 50);
	}
});

var fullscreen = (function(ID) {
    image = document.querySelector('.fullscreen img');
	image.src = imgs[ID].src;

    if (document.fullscreenElement == null) {
        if (full.requestFullscreen) {
            full.requestFullscreen();
        } else if (full.msRequestFullscreen) {
            full.msRequestFullscreen();
        } else if (full.webkitRequestFullscreen) {
            full.webkitRequestFullscreen();
        }
    }
    full.classList.remove('hide');
  	image.style.opacity = 0;
    fadeIn();
    currentslide = ID;
});

var navigate = (function(dir) {
    currentSlide = (currentSlide + dir) % imgs.length;
    if (currentSlide < 0) {
        currentSlide = imgs.length - 1;
    }
    fullscreen(currentSlide);
});

var exitscreen = (function() {
    full.classList.add('hide');
    currentslide = 0;

    if (document.fullscreenElement != null) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
});

