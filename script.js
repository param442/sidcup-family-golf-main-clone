/*
// let nav = document.getElementById("nav");

// // Function to handle the scroll event
// function handleScroll() {
//   // Check the scroll position
//   if (window.scrollY > 0) {
//     // User has scrolled down, change the background color
//     nav.style.backgroundColor = "black";
//   } else {
   
//     nav.style.backgroundColor = "transparent"; 
//   }
// }
// window.addEventListener('scroll', handleScroll);
This method of scroll with only java script 
below with gsap
*/
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: true,
  },
});

// let main = document.getElementById("main");

// function handleScroll() {
//   let alpha;

//   if (window.scrollY < 10) {
//     alpha = Math.min(0.4 + window.scrollY * 0.3, 1);
//   } else if (window.scrollY < 100) {
//     alpha = Math.min(0.4 + window.scrollY * 0.0003, 1);
//   } else if (window.scrollY < 1000) {
//     alpha = Math.min(0.4 + window.scrollY * 0.003, 1);
//   } else if (window.scrollY < 10000) {
//     alpha = Math.min(0.4 + window.scrollY * 0.00003, 1);
//   }

//   console.log(alpha);
//   console.log(window.scrollY);

//   main.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
// }

// window.addEventListener('scroll', handleScroll);

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: true,
  },
});

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

let heading = document.querySelectorAll("#nav h4");
heading.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.cursor = "pointer";
  });
  e.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.cursor = "auto";
    crsr.style.backgroundColor = "#95c11e";
  });
});
gsap.from("#about_us .img22,#about_us #span", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about_us",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 52%",
    scrub: 2,
  },
});
gsap.from("#cards-container .card", {
  y: 20,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#about_us",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 52%",
    scrub: 2,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,

  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    // markers:true,
    start: "top 50%",
    end: "top 47%",
    scrub: 3,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,

  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    // markers:true,
    start: "top 65%",
    end: "top 45%",
    scrub: 5,
  },
});
gsap.from("#footer .text h1,#footer .text .info ", {
  y: 50,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 52%",
    scrub: 1,
  },
});

let bar = document.getElementById("bar");
let h4List = document.querySelectorAll("#nav h4");
let body = document.getElementById("nav");
let body2 = document.querySelector("body");
let cross = document.getElementById("cross");
function display() {
  h4List.forEach(function (h4) {
    h4.style.opacity = 1;
  });
  bar.style.display = "none";
  body.style.backgroundColor = "black";
  body.style.height = "100vh";
  body2.style.overflow = "hidden";
  cross.style.display = "block";
}
function revert() {
  h4List.forEach(function (h4) {
    h4.style.opacity = 0;
    body.style.backgroundColor = "transparent";
  });
  bar.style.display = "block";
  cross.style.display = "none";
  body2.style.overflow = "auto";
}

bar.addEventListener("touchstart", display);
cross.addEventListener("touchstart", revert);
