import firstSrc from "./images/first.jpg";
import secondSrc from "./images/second.png";
import thirdSrc from "./images/third.jpg";
import './style.css';

const imgContainer = document.createElement('div');
imgContainer.style =
  "display: flex; justify-content: center; align-items: center;";

// Length of images from 0 to n.
const imgListLength = 2;
// Image size is in px.
const imgSize = 400;

const first = new Image(imgSize, 300);
first.src = firstSrc;

const second = new Image(imgSize);
second.src = secondSrc;

const third = new Image(imgSize, 300);
third.src = thirdSrc;


const frame = document.createElement("div");
frame.style = `width: ${imgSize}px; overflow: hidden;`;
frame.value = "start";

const slides = document.createElement("div");
slides.style = "display:flex; position: relative;";

const leftArrow = document.createElement("div");
leftArrow.textContent = "<";
leftArrow.style = "font-size: 80px;";
const rightArrow = document.createElement("div");
rightArrow.textContent = ">";
rightArrow.style = "font-size: 80px;";

const dots = document.createElement("div");
dots.style.cssText = 'display: flex; justify-content: center;';

for(let i = 0; i <= imgListLength; i++) {
  const dot = document.createElement("span");
  dot.classList.add('dot');
  dots.appendChild(dot);
  dot.value = `${i}`
  if(i == 0) {
    dot.setAttribute('id', 'selectedDot');
  }
  
}



slides.appendChild(first);
slides.appendChild(second);
slides.appendChild(third);

imgContainer.appendChild(leftArrow);
imgContainer.appendChild(frame);
imgContainer.appendChild(rightArrow);
frame.appendChild(slides);

document.body.appendChild(imgContainer);
document.body.appendChild(dots);

let order = 0;

const switchPrev = function switchToPreviousImage() {
  if (order != 0) {
    slides.style = `display: flex; position: relative; right: ${(order - 1) * imgSize}px;`;
    order -= 1;
    return;
  }
  slides.style = `display: flex; position: relative; right: ${(order + imgListLength) * imgSize}px;`;
  order = 2;
};

const switchNext = function switchToNextImage() {
  if (order != 2) {
    slides.style = `display: flex; position: relative; right: ${(order + 1) * imgSize}px;`;
    order += 1;
    return;
  }
  slides.style = "display: flex; position: relative;";
  order = 0;
};

leftArrow.addEventListener("click", switchPrev);
rightArrow.addEventListener("click", switchNext);

const clickDot = function moveImageOnDotClick (event) {
  if(event.target.classList == 'dot') {

    const prevDot = document.querySelector('#selectedDot');
    prevDot.removeAttribute('id');

    const imgIndex = event.target.value;
    slides.style.cssText = `display: flex; position: relative; right: ${imgIndex * imgSize}px;`;
    event.target.setAttribute('id', 'selectedDot')
  }
}

dots.addEventListener('click', clickDot);



setInterval(switchNext, 5000);

