var currentYear = new Date().getFullYear();
var countDownDate = new Date("July 29, " + currentYear + " 11:33:40 PM GMT+1 (CET)").getTime();
var now = new Date().getTime();
if (countDownDate < now) {
              var currentYear = new Date().getFullYear()+1;
              var countDownDate = new Date("July 29, " + currentYear + " 11:33:40 PM GMT+1 (CET)").getTime();
        }
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (countDownDate < now) {
      currentYear = new Date().getFullYear() + 1;
      countDownDate = new Date("July 29, " + currentYear + " 11:33:40 PM GMT+1 (CET)").getTime();
      distance = countDownDate - now;
    }
    
    // Calculate the time passed from a certain date
    var timePassed = now - 1690666420112    ; // Replace certainDate with the desired date in milliseconds
  
    // Calculate the number of days until the countdown date
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
    // Calculate the number of years until the countdown date
    var startDate = new Date();
    var endDate = new Date(countDownDate);
    var years = endDate.getFullYear() - startDate.getFullYear();
    if (startDate.getMonth() > endDate.getMonth() || (startDate.getMonth() == endDate.getMonth() && startDate.getDate() > endDate.getDate())) {
      years--;
    }
  
    // Subtract the number of days in previous years
    days -= years * 365;
  
    // Adjust for any leap years that have occurred
    for (var i = startDate.getFullYear(); i < endDate.getFullYear(); i++) {
      if (isLeapYear(i)) {
        days--;
      }
    }
  
    // Check if a year is a leap year
    function isLeapYear(year) {
      if (year % 4 != 0) {
        return false;
      } else if (year % 400 == 0) {
        return true;
      } else if (year % 100 == 0) {
        return false;
      } else {
        return true;
      }
    }
  
    // Calculate the number of hours, minutes, and seconds until the countdown date
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the time passed and the countdown in the second instance of rainbow text
    var secondRainbowText = document.getElementsByClassName("rainbow_text_animated")[1];
    if (timePassed > 0) {
      var passedYears = Math.floor(timePassed / (1000 * 60 * 60 * 24 * 365));
      var passedDays = Math.floor(timePassed / (1000 * 60 * 60 * 24)) % 365;
      var passedHours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var passedMinutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
      var passedSeconds = Math.floor((timePassed % (1000 * 60)) / 1000);
  
      secondRainbowText.textContent = "";
      if (passedYears != 0) {
        secondRainbowText.textContent += passedYears + " y\r\n";
      }
      if (passedDays != 0) {
        secondRainbowText.textContent += passedDays + " d\r\n";
      }
      secondRainbowText.textContent += passedHours + " h\r\n";
      secondRainbowText.textContent += passedMinutes + " m\r\n";
      secondRainbowText.textContent += passedSeconds + " s\r\n";
    } else {
      secondRainbowText.textContent = "0 s\r\n";
    }
  
    // Display the countdown in the first instance of rainbow text
    var firstRainbowText = document.getElementsByClassName("rainbow_text_animated")[0];
    if (years != 0) {
      firstRainbowText.textContent = years + " y\r\n";
      if (days > 0) {
        firstRainbowText.textContent += days + " d\r\n";
      } else {
        // pass
      }
      firstRainbowText.textContent += hours + " h\r\n";
      firstRainbowText.textContent += minutes + " m\r\n";
      firstRainbowText.textContent += seconds + " s\r\n";
    } else if (days != 0) {
      firstRainbowText.textContent = days + " d\r\n";
      firstRainbowText.textContent += hours + " h\r\n";
      firstRainbowText.textContent += minutes + " m\r\n";
      firstRainbowText.textContent += seconds + " s\r\n";
    } else if (hours != 0) {
      firstRainbowText.textContent = hours + " h\r\n";
      firstRainbowText.textContent += minutes + " m\r\n";
      firstRainbowText.textContent += seconds + " s\r\n";
    } else if (minutes != 0) {
      firstRainbowText.textContent = minutes + " m\r\n";
      firstRainbowText.textContent += seconds + " s\r\n";
    } else if (seconds != 0) {
      firstRainbowText.textContent += seconds + " s\r\n";
    } else if (seconds == 0) {
      firstRainbowText.textContent = "Expired\r\n";
    } else {
      firstRainbowText.textContent = "Error\r\n";
      currentYear = new Date().getFullYear() + 1;
      countDownDate = new Date("July 29, " + currentYear + " 11:33:40 PM GMT+1 (CET)").getTime();
    }
  
    // code written up by chatgpt xx love you mwah
  }, 1000);
  