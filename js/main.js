let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a) {
    a.addEventListener('click', function() {
        navCollapse.classList.remove('show');
    })
});

//counter js design automation
document.addEventListener("DOMContentLoaded",() =>{
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0, 500, 10);
    counter("count2",0, 1000, 20);
    counter("count3",0, 3000, 30);
    counter("count4",0, 4000, 50);
});

// JavaScript for carousel functionality
var slideIndex = 0;
var slides = document.getElementsByClassName("slider");
var dots = document.getElementsByClassName("swiper-pagination")[0].getElementsByTagName("span");
// var index = 0;
// Function to show slide by index
function showSlide(index) {
    // Hide all slides and remove active class
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].classList.remove("active");
    }

    // Show the slide at the given index and add active class
    slides[index].style.opacity = 1;
    slides[index].classList.add("active");
    index++;

    if (index >= slides.length) {
        index = 0;
    }
    // Set active class to the corresponding pagination dot
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
    

    slideIndex = index;
    setTimeout(() => {
        showSlide(index);
    }, 5000);
}

// Function to switch to the next slide
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Function to switch to the previous slide
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Event listeners for next and previous buttons
// document.getElementById("nextBtn").addEventListener("click", nextSlide);
// document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Event listener for pagination dots
function clickDots() {
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            var dotIndex = Array.prototype.indexOf.call(this.parentElement.children, this);
            showSlide(dotIndex);
            console.log("dot clicked at index "+dotIndex)
        });
    }
}

// Show the initial slide
showSlide(slideIndex);
clickDots();

/*Comment for JS*/
//To use this code, make sure you have added id="nextBtn" and id="prevBtn" to the next and previous buttons, respectively. 
//Also, ensure that you have added the necessary event listeners for the next and previous buttons as well as the pagination dots.

/*
window.addEventListener('DOMContentLoaded', () => {
    const partnerWrapper = document.querySelector('.partner-wrapper');
    const partnerSlides = document.querySelectorAll('.partner-slide');
  
    console.log("from within the scroll function");
    // Calculate the total width of all partner slides
    const totalWidth = Array.from(partnerSlides).reduce(
      (acc, slide) => acc + slide.offsetWidth,
      0
    );
  
    // Set the width of the wrapper to accommodate all slides
    partnerWrapper.style.width = `${totalWidth}px`;
  
    // Scroll animation function
    const scrollAnimation = () => {
      if (partnerWrapper.scrollLeft >= totalWidth) {
        // If reached the end, reset the scroll position
        partnerWrapper.scrollLeft = 0;
      } else {
        // Scroll by 1 pixel
        partnerWrapper.scrollLeft++;
      }
    };
  
    // Start the scroll animation
    const animationInterval = setInterval(scrollAnimation, 10);
  
    // Stop the scroll animation on mouse hover
    partnerWrapper.addEventListener('mouseenter', () => {
      clearInterval(animationInterval);
    });
  
    // Restart the scroll animation on mouse leave
    partnerWrapper.addEventListener('mouseleave', () => {
        let animationInterval = setInterval(scrollAnimation, 10);
    });
  });
  */
  window.addEventListener('load', () => {
    const partnerWrapper = document.querySelector('.partner-wrapper');
    const partnerSlides = document.querySelectorAll('.partner-slide');
  
    // Calculate the total width of all partner slides
    const totalWidth = Array.from(partnerSlides).reduce(
      (acc, slide) => acc + slide.offsetWidth,
      0
    );
  
    // Set the width of the wrapper to accommodate all slides
    partnerWrapper.style.width = `${totalWidth}px`;
  
    // Scroll animation function
    const scrollAnimation = () => {
      if (partnerWrapper.scrollLeft >= totalWidth) {
        // If reached the end, reset the scroll position
        partnerWrapper.scrollLeft = 0;
      } else {
        // Scroll by 1 pixel
        partnerWrapper.scrollLeft++;
      }
    };
  
    // Start the scroll animation
    let animationInterval = setInterval(scrollAnimation, 10);
  
    // Stop the scroll animation on mouse hover
    partnerWrapper.addEventListener('mouseenter', () => {
      clearInterval(animationInterval);
    });
  
    // Restart the scroll animation on mouse leave
    partnerWrapper.addEventListener('mouseleave', () => {
      animationInterval = setInterval(scrollAnimation, 10);
    });
  });
  