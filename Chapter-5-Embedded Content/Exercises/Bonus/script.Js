// Selecting document element
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// Initializing variable
let isSpeaking = true;

// text to speech function
const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  // If the synthesizer is not speaking 
  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  // if the length of the text is less than 50 
  if (text.length > 50) 

  // function for resume and pause
  {
    if (synth.speaking && isSpeaking) {
      button.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    button.innerText = "Speaking";
  }

  // Seting Interval for Updating text button
  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Convert to Speech";
    }
  });
};

// adding event listener
button.addEventListener("click", textToSpeech);

// adding event listener for soundboard 
document.addEventListener("DOMContentLoaded", function() {
  const samples = document.querySelectorAll(".sample");

  samples.forEach(sample => {
      sample.addEventListener("click", function() {
          const audioSrc = this.getAttribute("data-audio");
          if (audioSrc) {
              const audio = new Audio(audioSrc);
              audio.play();
          }
      });
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// function for next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// function for curent slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function for show slide
function showSlides(n) {
  var i;
  // getting element by id Slides
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}