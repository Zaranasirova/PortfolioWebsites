const menuBar = document.querySelector(".menubar");
const asideSection = document.querySelector("aside");
const mainContent = document.querySelector(".main-content");
const moonSun = document.querySelector(".moon-sun");
const main = document.querySelector("main");
const gear = document.querySelector(".gear");
const icons = document.querySelector(".icons");
const homeColors = document.querySelector(".home-colors");
const threePoints = document.querySelector(".point");
const more = document.querySelector(".motivation-letter-more");
const educationContent = document.querySelector(".education-content");
const experienceContent = document.querySelector(".experience-content");
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const subject = document.querySelector("#subject");
const message = document.querySelector("#text");
const homebtn = document.querySelector(".homebtn");
const aboutbtn = document.querySelector(".aboutbtn");

//slider//
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
//dark mode//
moonSun.addEventListener("click", () => {
  main.classList.toggle("main-container");
});
// gear translate//
count = false;
gear.addEventListener("click", () => {
  if (count === false) {
    icons.style.transform = "translateX(-120px)";
    homeColors.style.display = "flex";
    count = true;
  } else {
    icons.style.transform = "translateX(0px)";
    homeColors.style.display = "none";
    count = false;
  }
});
//colors deyişmə//
function changeRootColor(color) {
  document.documentElement.style.setProperty("--colorpink", color);
}
//scrollda icons itmək// //!işləmədiii!!!!//

// window.addEventListener("scroll",()=>{
//   if(icons.style.transform == "translateX(-120px)" || homeColors.style.display == "flex"){
//     homeColors.classList.add("hidden");
//     icons.style.transform = "translateX(0px)";
//   }
// });

//3 nöqtə clic etmek//
threePoints.addEventListener("click", () => {
  more.classList.add("hidden");
  threePoints.style.display = "none";
});
//education,experience Html yazdirma//
let education = [
  {
    id: 1,
    year: "2020 - 2022",
    caption: "BDU-TARIX",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
  {
    id: 2,
    year: "2022 - 2025",
    caption: "Unec Marketing",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
  {
    id: 3,
    year: "2024",
    caption: "Texnoera Academy Frontend Developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
];
education.map((item) => {
  educationContent.innerHTML += `<div class="education-item">
  <span><i class="fa-regular fa-calendar"></i>${item.year}</span>
  <h4 class="education-caption">${item.caption}</h4>
  <p class="education-text">
  ${item.text}
  </p>
</div>
`;
});
let experience = [
  {
    id: 1,
    year: "2020-2024",
    caption: "Master in computer Science",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
  {
    id: 2,
    year: "2023",
    caption: "Kolorit Cafe HR asisstant",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
  {
    id: 3,
    year: "2024",
    caption: "Prestij Autoservis Mühasib asisstant",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsum, asperiores perspiciatis aspernatur quasi error
    dolores optio, ex molestiae laborum sit corporis! Incidunt
    praesentium tempore dignissimos.`,
  },
];
experience.map((item) => {
  experienceContent.innerHTML += `   <div class="experience-item">
<span><i class="fa-regular fa-calendar"></i>${item.year}</span>
<h4 class="experience-caption">
${item.caption}
</h4>
<p class="experience-text">
${item.text}
</p>
</div>
`;
});

//form//

form.addEventListener("submit", (event) => {
  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    subject.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    event.preventDefault();
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

//active class///
document.querySelectorAll(".link-aside").forEach(function (element) {
  element.addEventListener("click", function (event) {
    document.querySelector(".link-aside.active")?.classList.remove("active");
    element.classList.add("active");
  });
});

document.getElementById("home").classList.add("open");
document.querySelectorAll(".link-aside").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".content").forEach(function (section) {
      section.classList.remove("open");
    });
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add("open");
  });
});

homebtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("home").classList.remove("open");
  document.getElementById("contact").classList.add("open");
  document.querySelector(".link-aside.active")?.classList.remove("active");
  document.querySelectorAll(".link-aside").forEach((item) => {
    const atribut = item.getAttribute("href");
    if (atribut === "#contact") {
      item.classList.add("active");
    }
  });
});
aboutbtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("about").classList.remove("open");
  document.getElementById("contact").classList.add("open");
  document.querySelector(".link-aside.active")?.classList.remove("active");
  document.querySelectorAll(".link-aside").forEach((item) => {
    const atribut = item.getAttribute("href");
    if (atribut === "#contact") {
      item.classList.add("active");
    }
  });
});


menuBar.addEventListener("click", function () {
  if (asideSection.style.transform === "translateX(0px)") {
    asideSection.style.transform = "translateX(-100%)";
     mainContent.style.marginLeft = "0";
  } else {
    asideSection.style.transform = "translateX(0px)";
     mainContent.style.marginLeft = "250px";
    // count = false;
  }
});


var typed = new Typed(".mark-profession",{
  strings:[""," Frontend Developer"],
  typeSpeed:50,
  BackSpeed:10,
  loop:true
}
);