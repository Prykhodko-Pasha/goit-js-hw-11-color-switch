const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const min = 0;
const max = colors.length-1;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ======== START ========
refs.startBtn.addEventListener('click', () => {
    refs.startBtn.disabled = true;
    intervalId = setInterval(changeBodyColor, 1000);
})

function changeBodyColor() {
    // console.log(randomIntegerFromInterval(min,max));
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
}

// ======== STOP ========
refs.stopBtn.addEventListener('click', () => {
    refs.startBtn.disabled = false;
    clearInterval(intervalId);
})
