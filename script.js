document.getElementById('yesBtn').addEventListener('click', function() {
  var responseElement = document.getElementById('response');
  responseElement.innerText = "As I sit down to express the depths of my love and appreciation for you, words seem inadequate to describe what you mean to me. From the moment i met you, my life has been infinitely brighter, richer, and more meaningful. Every day spent with you is a treasure, a journey filled with laughter, understanding, and unwavering support. Your kindness, your strength remindings me of the incredible blessing it is to have you by my side. To know that I am honored to be your future husband fills me with a profound sense of gratitude and joy. The thought of building a life together, of sharing dreams, aspirations, and creating memories side by side, fills me with excitement and anticipation. You are my rock, my confidante, and my greatest adventure, and I am endlessly thankful to call you mine.";
  responseElement.style.color = 'red'; // Set text color to red
});

document.getElementById('noBtn').addEventListener('click', function() {
  var responseElement = document.getElementById('response');
  responseElement.innerText = "CAP!!! You play too much LOL! INVALID SELECTION";
  responseElement.style.color = 'red'; // Set text color to red
});
// Target date
const targetDate = new Date('March 1, 2024 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Current date and time
  const now = new Date().getTime();

  // Difference between current date and target date
  const difference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (difference < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = 'You are officially my fiance!';
  }
}, 1000);
