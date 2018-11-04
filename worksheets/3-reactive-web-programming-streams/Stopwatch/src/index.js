import { Observable } from 'rxjs/Rx';

const canvas = document.getElementById('stopwatch');
const digital = document.getElementById('digital');
const splits = document.getElementById('splits');

const source = Observable
  .interval(100 /* ms */ )
  .timeInterval();

let started = false;
let time = 0; // 1/10 seconds

const subscription = source.subscribe(
  x => 
  {
    if(!started) return;

    time++;
    draw(time);
    digital.innerHTML = Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";

  });

Observable.fromEvent(document.getElementById('start'), 'click')
  .subscribe(e => {
    started = true;
  });

Observable.fromEvent(document.getElementById('stop'), 'click')
  .subscribe(e => {
    started = false;
  });

Observable.fromEvent(document.getElementById('split'), 'click')
  .subscribe(e => {
    splits.innerHTML += digital.innerHTML + "<br/>";
  });

Observable.fromEvent(document.getElementById('reset'), 'click')
  .subscribe(e => {
    started = false;
    time = 0;
    draw(time);
    digital.innerHTML = "0:0:00";
    splits.innerHTML = "";
  });

//References for the clock face
//https://www.encodedna.com/html5/canvas/simple-analog-clock-using-canvas-javascript.htm

//Stopwatch Face 
const draw = (time) => {
  if (canvas.getContext) 
  {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    const watchSize = 150;
    const watchInternals = 0.95;
    
    // Center dial
    context.fillStyle = "DarkGrey";
    context.beginPath();
    context.arc(watchSize, watchSize, 2, 0, 2 * Math.PI, true);
    context.fill();

    context.strokeStyle = "DarkGray";
    context.beginPath();

    // Minute Lines
    for (let i = 0; i < 12; i++)
    {
      let angle = i * (Math.PI * 2 / 12);
      const armLength = watchSize * 0.15;
      context.moveTo(watchSize + watchSize * Math.cos(angle) * watchInternals, watchSize + watchSize * Math.sin(angle) * watchInternals);
      context.lineTo(watchSize + (watchSize - armLength) * Math.cos(angle) * watchInternals, watchSize + (watchSize - armLength) * Math.sin(angle) * watchInternals);
    }

    // Second Lines
    for (let i = 0; i < 60; i++) 
    {
      let angle = i * (Math.PI * 2 / 60);
      const armLength = watchSize * 0.05;
      context.moveTo(watchSize + watchSize * Math.cos(angle) * watchInternals, watchSize + watchSize * Math.sin(angle) * watchInternals);
      context.lineTo(watchSize + (watchSize - armLength) * Math.cos(angle) * watchInternals, watchSize + (watchSize - armLength) * Math.sin(angle) * watchInternals);
    }

    // Long Hand (Minutes)
    let angle = (time / 600 / 60 - 0.25) * (Math.PI * 2);
    let armLength = watchSize * 0.5;
    context.moveTo(watchSize, watchSize);
    context.lineTo(watchSize + armLength * Math.cos(angle), watchSize + armLength * Math.sin(angle));

    // Short Hand (Seconds)
    angle = (time / 10 / 60 - 0.25) * (Math.PI * 2);
    armLength = watchSize * 0.8;
    context.moveTo(watchSize, watchSize);
    context.lineTo(watchSize + armLength * Math.cos(angle), watchSize + armLength * Math.sin(angle));

    context.stroke();
  }
}

draw();