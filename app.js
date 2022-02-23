console.log("This is my Portfolio");

//Setting Side Menu Bar ---->
let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  let menuList = document.getElementById("menuList");
  menuList.classList.remove("hidden");
  menuList.classList.add("menuBar");
});
let crossBtn = document.getElementById("crossBtn");
crossBtn.addEventListener("click", () => {
  let menuList = document.getElementById("menuList");
  menuList.classList.add("hidden");
  menuList.classList.remove("menuBar");
});

//fixing Navbar ----->
let navbar = document.getElementById("navbar");
let aboutme_para = document.getElementById("aboutme_para");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > navbar.offsetHeight) {
    navbar.classList.remove("absolute", "bg-transparent");
    navbar.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "bg-slate-800",
      "shadow-md",
      "shadow-slate-900"
    );
  }
  if (window.pageYOffset <= navbar.offsetHeight) {
    navbar.classList.add("absolute", "top-0", "left-0");
    navbar.classList.remove(
      "fixed",
      "top-0",
      "left-0",
      "bg-slate-800",
      "shadow-md",
      "shadow-slate-900"
    );
  }

  // Making animation in progress Bar ---->
  if (window.pageYOffset > 1360) {
    Array.from(progressBar).forEach((e) => {
      setInterval(() => {
        let comStyles = getComputedStyle(e);
        let width = parseFloat(comStyles.getPropertyValue("--width")) || 0;
        if (width <= 200) {
          e.style.setProperty("--width", width + 5);
          e.style.setProperty("transition", "0.5s");
        } else {
          clearInterval();
        }
      }, 1);
    });
  }
});

// Setting the skills Tab --->
let expand = document.querySelectorAll(".expand");
let progressBar = document.querySelectorAll(".progress");

Array.from(expand).forEach((element) => {
  element.addEventListener("click", () => {
    let arrow = element.getElementsByClassName("arrow")[0];
    if (element.clientHeight <= 60) {
      element.style.height = "fit-content";
      arrow.classList.remove("fa-arrow-down");
      arrow.classList.add("fa-arrow-up");
    } else {
      element.style.height = "56px";
      arrow.classList.remove("fa-arrow-up");
      arrow.classList.add("fa-arrow-down");
    }
  });
});

// Making coarsol --->
let project_div = document.getElementsByClassName("project_div")[0];
let project_divSize = project_div.getBoundingClientRect().width;
let allCards = project_div.querySelectorAll(".project_card");
let cardsArr = Array.from(allCards);

// Currentcard position = project_divSize * 0 + 'px';
// Currentcard position = project_divSize * 1 + 'px';
// Currentcard position = project_divSize * 2 + 'px';

// Set position of each card -->
cardsArr.forEach((card, index) => {
  card.style.left = project_divSize * index + "px";
});

// coarsol buttons --->
let nextBtn = document.getElementsByClassName("next-btn")[0];
let prevBtn = document.getElementsByClassName("prev-btn")[0];

nextBtn.addEventListener("click", () => {
  let Currentcard = document.querySelector(".current_card");
  let nextCard = Currentcard.nextElementSibling;
  let amounttomove = nextCard.style.left;
  // Move the card -->
  cardsArr.forEach((card, index) => {
    card.style.transform = "translateX(-" + amounttomove + ")";
  });

  Currentcard.classList.remove("current_card");
  nextCard.classList.add("current_card");
});
// Adding buttons to the coarsol --->
prevBtn.addEventListener("click", () => {
  let Currentcard = document.querySelector(".current_card");
  let prevCard = Currentcard.previousElementSibling;
  console.log(prevCard);
  let amounttomove = prevCard.style.left;
  console.log(amounttomove);
  // Move the card -->
  cardsArr.forEach((card, index) => {
    card.style.transform = "translateX(-" + amounttomove + ")";
  });

  Currentcard.classList.remove("current_card");
  prevCard.classList.add("current_card");
});
