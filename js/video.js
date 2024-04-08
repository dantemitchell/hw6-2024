var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// video.js

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play');
	const pauseButton = document.getElementById('pause');
    const video = document.getElementById('player1');
    const volumeSpan = document.getElementById('volume');
	const slowerButton = document.getElementById("slower");
	const fasterButton = document.getElementById("faster");
	var skipButton = document.getElementById("skip");
	let slowDownCount = 0;
    
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
	pauseButton.addEventListener('click', function() {
		video.pause();
    });

	
	fasterButton.addEventListener("click", function() {
        if (slowDownCount > 0) {
			video.playbackRate += 0.1;

            console.log("New video speed:", video.playbackRate);
        }
    });
	slowerButton.addEventListener("click", function() {
        slowDownCount++;
        video.playbackRate -= 0.1;

        console.log("New video speed:", video.playbackRate);
    });
	skipButton.addEventListener("click", function() {
        video.currentTime += 10;
        
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        
        console.log("Current location of the video: " + video.currentTime);
    });

    const slider = document.getElementById('slider');
    slider.addEventListener('input', function() {
        volumeSpan.textContent = this.value;
        video.volume = this.value / 100;
    });
});


