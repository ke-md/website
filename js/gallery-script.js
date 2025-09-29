// --- Fullscreen Slider ---
document.addEventListener("DOMContentLoaded", () => {
  const openSliderBtn = document.querySelector(".open-slider-btn");
  const sliderOverlay = document.getElementById("fullscreen-slider");
  const closeSliderBtn = document.querySelector(".slider-close-btn");
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slider-slide");
  const nextBtn = document.querySelector(".slider-nav-btn.next");
  const prevBtn = document.querySelector(".slider-nav-btn.prev");

  if (!sliderOverlay) return; // Exit if the slider is not on the page

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    updateSliderPosition();
  }

  openSliderBtn.addEventListener("click", () => {
    sliderOverlay.classList.add("active");
    showSlide(0); // Start at the first slide
  });

  closeSliderBtn.addEventListener("click", () => {
    sliderOverlay.classList.remove("active");
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  // Optional: Close slider with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sliderOverlay.classList.contains("active")) {
      sliderOverlay.classList.remove("active");
    }
  });

  // --- Thumbnail Filmstrip ---
  const filmstripGallery = document.querySelector(".filmstrip-gallery");
  if (filmstripGallery) {
    const mainImage = filmstripGallery.querySelector(
      ".filmstrip-main-image img",
    );
    const thumbnails = filmstripGallery.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Update main image source and alt text
        mainImage.src = this.src;
        mainImage.alt = this.alt;

        // Update active class on thumbnails
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }
});