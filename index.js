const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const CHANGE_COLORS_DELAY = 1000;
let timeoutId = null;
let isActive = false;
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

refs.stop.disabled = true;

// Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

function onStartClick() {
  if (isActive) {
    return;
  }
  timeoutId = setInterval(addBgColor, CHANGE_COLORS_DELAY);
  isActive = true;
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopClick() {
  clearTimeout(timeoutId);
  isActive = false;
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function addBgColor() {
  refs.body.style.cssText = `background-color: ${newColor()}`;
}

function newColor() {
  const idxColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[idxColor];
}