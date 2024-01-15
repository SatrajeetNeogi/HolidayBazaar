AOS.init();

//background image slider

const sliderImage = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
];

let slider = document.querySelector(".s-background-image");
let sliderGridItems = [...document.querySelectorAll(".s-grid-item")];

let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 3000);

const changeSliderImage = () => {
  sliderGridItems.map((gridItem, index) => {
    setTimeout(() => {
      gridItem.classList.remove("hide");

      setTimeout(() => {
        if (index == sliderGridItems.length - 1) {
          if (currentImage >= sliderImage.length - 1) {
            currentImage = 0;
          } else {
            currentImage++;
          }
          slider.src = sliderImage[currentImage];

          sliderGridItems.map((item, i) => {
            setTimeout(() => {
              item.classList.add("hide");
            }, i * 70);
          });
        }
      }, 70);
    }, index * 70);
  });
};

const snavbar = document.querySelector(".s-navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 150) {
    snavbar.classList.add("bg");
  } else {
    snavbar.classList.remove("bg");
  }
});

// const navbar = document.querySelector(".s-navbar");

// window.addEventListener("scroll", () => {
//   const scroll = window.scrollY || document.documentElement.scrollTop;

//   if (scroll >= 170) {
//     navbar.classList.add("bg");
//   } else {
//     navbar.classList.remove("bg");
//   }
// });

const navbar = document.getElementById("navbar");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

const scrollrevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1500,
};

ScrollReveal().reveal(".home h1", scrollrevealOption);
ScrollReveal().reveal(".home h4", {
  ...scrollrevealOption,
  delay: 800,
});
ScrollReveal().reveal(".home .btn-explore", {
  ...scrollrevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".about .about-title", scrollrevealOption);
ScrollReveal().reveal(".about .about-desc", {
  ...scrollrevealOption,
  delay: 600,
});
ScrollReveal().reveal(".about .item-data", {
  ...scrollrevealOption,
  delay: 1200,
});
ScrollReveal().reveal(".btn-explore", {
  ...scrollrevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".btn-more", {
  ...scrollrevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".card", scrollrevealOption);

ScrollReveal().reveal(".card .image", {
  ...scrollrevealOption,
  delay: 600,
});
ScrollReveal().reveal(".card .content-card h4", {
  ...scrollrevealOption,
  delay: 1600,
});
ScrollReveal().reveal(".next .card .content-card  p", {
  ...scrollrevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".next .card .content-card p", {
  ...scrollrevealOption,
  delay: 600,
});

ScrollReveal().reveal("form .input", scrollrevealOption);
ScrollReveal().reveal("row .card", scrollrevealOption);

// <-------------new------------>
