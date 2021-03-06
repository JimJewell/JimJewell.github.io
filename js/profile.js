// Jim Jewell Porfolio js

// Modal
let modalBox = document.querySelector(".modalBox");
let openButton = document.querySelector(".openButton");
let closeButton = document.querySelector(".closeButton");

function toggleModal() {
    modalBox.classList.toggle("showModal");
    console.log(event);
}

function windowOnClick(event) {
    if (event.target === modalBox) {
        toggleModal();
    }
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Carousel of Images/links with help from https://medium.com/@magyarn/simple-carousel-with-vanilla-js-3dd10a143ff2

// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);

// Add the click events
leftButton.addEventListener("click", function() {
    if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
      }
  });
    
  rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
      offset -= carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });


  run();

  function run() {
    bindNavButtonToNavList();
  }
  
  function toggleHide(element) {
    element.classList.toggle('hide');
  }
  
  function bindNavButtonToNavList() {
    const navButton = document.querySelector('.nav__button');
    
    navButton.addEventListener('click', function() {
      const navList = document.querySelector('.nav__list');
      toggleHide(navList);
    });
  }



  let collapsible = document.getElementsByClassName("collapsible");
  let height;

for (height = 0; height < collapsible.length; height++) {
  collapsible[height].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 