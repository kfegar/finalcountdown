function getWorkingDaysRemaining(endDate) {
    var daysRemaining = 0;
    var currentDate = new Date();
    while (currentDate.getTime() <= endDate.getTime()) {
      var dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        daysRemaining++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysRemaining;
  }
  
  function getWorkingHoursRemaining(daysRemaining) {
    var hoursToEnd = daysRemaining * 7.30;
    var now = new Date();
    var endOfDay = (new Date(now)).setHours(17, 30, 0, 0); 
    var hoursRemainingToday = (endOfDay.getTime() - now.getTime()) / (1000 * 60 * 60);
    if(hoursRemainingToday < 0 || hoursRemainingToday >= 7.30) {
        result = hoursToEnd;
    } else {
        result = hoursToEnd + hoursRemainingToday;
    }
    return result;

  }
  
  function updateCounters() {
    var endDate = new Date("2023-04-28");
    var daysRemaining = getWorkingDaysRemaining(endDate);
    var hoursRemaining = getWorkingHoursRemaining(daysRemaining);
  
    document.getElementById("days").innerHTML = daysRemaining + " jours ouvrables restants";
    document.getElementById("hours").innerHTML = hoursRemaining.toFixed(2) + " heures de travail restantes";
  }
  
  setInterval(updateCounters, 1000);