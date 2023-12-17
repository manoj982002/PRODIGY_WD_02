let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];

function startPause() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startPause").innerHTML = "Resume";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startPause").innerHTML = "Pause";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  laps = [];
  updateDisplay();
  document.getElementById("startPause").innerHTML = "Start";
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.getElementById("display");
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function lap() {
  const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  laps.push(lapTime);

  const lapsDisplay = document.getElementById("laps");
  lapsDisplay.innerHTML = "";
  laps.forEach((lap, index) => {
    lapsDisplay.innerHTML += `Lap ${index + 1}: ${lap}<br>`;
  });
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
// ... (unchanged code)

function lap() {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  
    const lapsDisplay = document.getElementById("laps");
    const lapEntry = document.createElement("div");
    lapEntry.className = "lap-entry";
    lapEntry.innerHTML = `Lap ${laps.length + 1}: ${lapTime}`;
    lapsDisplay.appendChild(lapEntry);
  
    laps.push(lapTime);
  }
  