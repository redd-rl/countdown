
  var currentDate = new Date();
  var currentYear = new Date().getFullYear();
  var targetCountdownDay = new Date("Feb 2, " + currentYear + " 12:00:00 AM GMT+1 (CET)");
  var scriptAdded = false;
  
  function checkDate() {
    currentDate = new Date();
    if (currentDate >= targetCountdownDay && !scriptAdded) {
      scriptAdded = true;
      var fireworks = document.createElement("script");
      fireworks.src = "fireworks.js";
      fireworks.id = "fireworks";
      document.body.appendChild(fireworks);

      var confetti = document.createElement("script");
      confetti.src = "confetti.js";
      confetti.id = "confetti";
      document.body.appendChild(confetti);
    }
    if (currentDate > targetCountdownDay) {
      scriptAdded = false;
      document.getElementById("fireworks").remove();
      document.getElementById("confetti").remove();
    }
  }

  var checkDateInterval = setInterval(checkDate, 1000);
