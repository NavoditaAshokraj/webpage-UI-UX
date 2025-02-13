
//neww//

const slider = document.querySelector(".slider");
const arrowBtns = document.querySelectorAll(".slider-container i");
const firstCardWidth = slider.querySelector(".photo-card-spa1,.photo-card-spa2,.photo-card-spa3,.photo-card-spa4").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    slider.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})

const dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return; 
  slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
}

slider.addEventListener("mousedown", dragStart)
slider.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)

//newwww//
const slider2 = document.querySelector(".slider2");
const arrowBtns2 = document.querySelectorAll(".slider-container2 i");
const firstCardWidth2 = slider2.querySelector(".photo-card-swimmingpool,.photo-card-indoorgames,.photo-card-volleyball,.photo-card-garden").offsetWidth;

let isDragging2 = false, startX2, startScrollLeft2;

arrowBtns2.forEach(btn => {
  btn.addEventListener("click", () => {
    slider2.scrollLeft += btn.id === "left" ? -firstCardWidth2 : firstCardWidth2;
  })
})

const dragStart2 = (e) => {
  isDragging2 = true;
  slider2.classList.add("dragging2");
  startX2 = e.pageX;
  startScrollLeft2 = slider2.scrollLeft;
}

const dragging2 = (e) => {
  if(!isDragging2) return; 
  slider2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
  isDragging2 = false;
  slider2.classList.remove("dragging2");
}

slider2.addEventListener("mousedown", dragStart2)
slider2.addEventListener("mousemove", dragging2)
document.addEventListener("mouseup", dragStop2)


// mobile navigation bar

var mobileNav = document.getElementsByClassName('mobile')[0];
var bars = document.getElementById('icon');
var adjust = 0;

function responsive() {   // opens responsive nav bar
  if (adjust == 0) {
    mobileNav.style.animationName = 'left_slide';
    mobileNav.style.display = 'block';

    adjust = 1
  }
  else {
    mobileNav.style.display = 'none';
    adjust = 0
  }
}