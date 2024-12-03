
  
  var countDownDate = new Date("May 24, 2024 01:08:25").getTime();
  var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;


  if (distance < 0) {
            clearInterval(x); // Stop the countdown
            document.getElementById("day").innerHTML = 0;
            document.getElementById("hour").innerHTML = 0;
            document.getElementById("minute").innerHTML = 0;
            document.getElementById("second").innerHTML = 0;
            document.getElementById("message").style.display = "block"; // Show the message
        }
    }, 1000);

