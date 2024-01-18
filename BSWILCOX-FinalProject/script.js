document.getElementById('myName').addEventListener('mouseenter', () => {
  document.getElementById('myName').style.transform = 'scale(1.2)';
});

document.getElementById('myName').addEventListener('mouseleave', () => {
  document.getElementById('myName').style.transform = 'scale(1)';
});


// script.js

// script.js

// script.js

let currentImageIndex = 1; // Start with the first image

function changeImage(offset) {
  currentImageIndex += offset;
  updateImage();
}

function changeImageTo(index) {
  currentImageIndex = index;
  updateImage();
}

function updateImage() {
  const imageElement = document.getElementById("portfolioImage");

  // Change image source based on the current index
  switch (currentImageIndex) {
      case 1:
          imageElement.src = "p2.jpg";
          break;
      case 2:
          imageElement.src = "p3.jpg";
          break;
      case 3:
          imageElement.src = "p4.jpg"; // Add new image source
          break;
      case 4:
          imageElement.src = "p5.jpg"; // Add new image source
          break;
      default:
          // Handle other cases or loop back to the beginning
          currentImageIndex = 1;
          imageElement.src = "project1.png";
          break;
  }
}