// var audio = new Audio("sound.mp3");

// setInterval(() => {
//     // audio.play()
// });

var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true
audio.play();