const secondLine = document.querySelector('.second-hand');
  const minuteLine = document.querySelector('.min-hand');
  const hourLine = document.querySelector('.hour-hand');
  function setDate(){

    const date = new Date();

    const minute = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();

     const secondsDegrees = ((second / 60) * 360) + 90;
    secondLine.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minuteDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
    minuteLine.style.transform = `rotate(${minuteDegrees}deg)`;

    const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourLine.style.transform = `rotate(${hourDegrees}deg)`; 
  }
   

  setInterval(setDate, 1000);
  setDate();
