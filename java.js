document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const circles = document.querySelectorAll(".circle");
    let counter = 0;
  
    function navigateTo(index) {
      counter = index;
      updateSlider();
    }
  
    function updateSlider() {
      const transformValue = -counter * 100 + "%";
      slider.style.transform = "translateX(" + transformValue + ")";
    }
  
    circles.forEach((circle, index) => {
      circle.addEventListener("click", function() {
        navigateTo(index);
      });
    });
  
    function navigate(direction) {
      if (direction === "next") {
        counter++;
      } else {
        counter--;
      }
  
      if (counter < 0) {
        counter = slider.childElementCount - 1;
      } else if (counter >= slider.childElementCount) {
        counter = 0;
      }
  
      updateSlider();
    }
  
    setInterval(function() {
      navigate("next");
    }, 3000); // Change image every 3 seconds (adjust as needed)
  });