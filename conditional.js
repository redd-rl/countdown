
  var currentDate = new Date();
  var currentYear = new Date().getFullYear();
  var targetCountdownDay = new Date("Feb 14, " + currentYear + " 12:00:00 AM GMT+1 (CET)");
  var scriptAdded = false;
  
  function checkDate() {
    currentDate = new Date();
    if (currentDate >= targetCountdownDay && !scriptAdded) {
      scriptAdded = true;
      var fireworks = document.createElement("script");
      fireworks.src = "fireworks.js";
      document.body.appendChild(fireworks);

      var confetti = document.createElement("script");
      confetti.src = "confetti.js";
      document.body.appendChild(confetti);
    }
    if (currentDate > targetCountdownDay) {
      clearInterval(checkDateInterval);
      document.querySelectorAll("script[src='fireworks.js']").forEach(script => script.remove());
      document.querySelectorAll("script[src='confetti.js']").forEach(script => script.remove());
    }
  }

  var checkDateInterval = setInterval(checkDate, 1000);
