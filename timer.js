// Set the date we're counting down to
        var currentYear = new Date().getFullYear();
        var countDownDate = new Date("Feb 14, " + currentYear + " 12:00:00 AM GMT+1 (CET)").getTime();
        var now = new Date().getTime();
        if (countDownDate < now) {
              var currentYear = new Date().getFullYear()+1;
              var countDownDate = new Date("Feb 14, " + currentYear + " 12:00:00 AM GMT+1 (CET)").getTime();
        } else {
              var currentYear = new Date().getFullYear();
              var countDownDate = new Date("Feb 14, " + currentYear + " 12:00:00 AM GMT+1 (CET)").getTime();
        }

        // Update the count down every 1 second
        var x = setInterval(function() {

             // Get today's date and time
            var now = new Date().getTime();
            var distance = countDownDate - now;

            // Calculate the number of days until the countdown date
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));

            // Calculate the number of years until the countdown date
            var startDate = new Date();
            var endDate = new Date(countDownDate);
            var years = endDate.getFullYear() - startDate.getFullYear();
            if (startDate.getMonth() > endDate.getMonth() || (startDate.getMonth() == endDate.getMonth() && startDate.getDate() > endDate.getDate())) {
                years--;
            }
            // Calculate the number of days until the countdown date
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));

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
            if (years != 0) {
                document.getElementsByClassName("rainbow_text_animated")[0].textContent = years + " y\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += days + " d\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += hours + " h\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += minutes + " m\r\n"; 
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += seconds + " s\r\n";
            } else if (days != 0) {
                document.getElementsByClassName("rainbow_text_animated")[0].textContent = days + " d\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += hours + " h\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += minutes + " m\r\n"; 
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += seconds + " s\r\n";
             } else if (hours != 0) {
                document.getElementsByClassName("rainbow_text_animated")[0].textContent = hours + " h\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += minutes + " m\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += seconds + " s\r\n";
             } else if (minutes != 0) {
                document.getElementsByClassName("rainbow_text_animated")[0].textContent = minutes + " m\r\n";
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += seconds + " s\r\n";
             } else {
                document.getElementsByClassName("rainbow_text_animated")[0].textContent += seconds + " s\r\n";
             }
          // code written up by chatgpt xx love you mwah
        }, 1000);