document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".enlarge-image");
    const closeButton = document.createElement("div");
    closeButton.innerHTML = "&#10006;";
    closeButton.classList.add("close-button");
  
    images.forEach(image => {
      image.addEventListener("click", function() {
        if (this.classList.contains("enlarged")) {
          this.classList.remove("enlarged");
          document.body.removeChild(closeButton);
        } else {
          this.classList.add("enlarged");
          document.body.appendChild(closeButton);
        }
      });
    });
  
    closeButton.addEventListener("click", function() {
      const enlargedImage = document.querySelector(".enlarge-image.enlarged");
      if (enlargedImage) {
        enlargedImage.classList.remove("enlarged");
        document.body.removeChild(closeButton);
      }
    });
  });
  