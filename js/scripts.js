// back-end logic
// get and set the current date
function setDate() {
  // get current date
  const currentDate = new Date();
  // console.log(currentDate);
  // get current second
  const currentSecond = currentDate.getSeconds();
  const secondDegrees = ((currentSecond / 60) * 360) + 90;
  secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
  // console.log(currentSecond);
  // console.log(secondDegrees);

  // get current minute
  const currentMinute = currentDate.getMinutes();
  const minuteDegrees = ((currentMinute / 60) * 360) + 90;
  minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
  // console.log(currentMinute);
  // console.log(minuteDegrees);

  // get current hour
  const currentHour = currentDate.getHours();
  const hourDegrees = ((currentHour / 12) * 360) + 90;
  hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
  // console.log(currentHour);
  // console.log(hourDegrees);

  // remove weird transition on clockhands when it reaches 12
  if (secondDegrees === 90) {
    // console.log('ding');
    clockHands.forEach(function(hand) {
      hand.classList.add('face__hand--transition');
    });
  } else {
    clockHands.forEach(function(hand) {
      hand.classList.remove('face__hand--transition');
    });
  }
}

// front-end logic:
// get all clock hands
const clockHands = document.querySelectorAll('.face__hand');

// get clock hands
const secondHand = document.querySelector('.face__hand--second');
const minuteHand = document.querySelector('.face__hand--minute');
const hourHand = document.querySelector('.face__hand--hour');
setInterval(setDate, 1000);
