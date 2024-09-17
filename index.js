gsap.to(".page-2 h1", {
  transform: "translateX(-70%)",
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    scrub: 1,
    start: "top 0%",
    end: "top -100%",
    pin: true,
  },
});
// * mouse
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let img = document.querySelector(".img");
main.addEventListener("mousemove", (e) => {
  console.log(e.x);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
    // ease: "back.out",
  });
});
img.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    backgroundColor: "##faebd741",
    scale: 2,
  });
});
img.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    backgroundColor: "#fff",
    scale: 1,
  });
});

let value = "M 10 100 Q 500 10 990 100";
let finalValue = "M 10 100 Q 500 100 990 100";
let mouseEnterd = document.querySelector(".container");
mouseEnterd.addEventListener("mousemove", (dets) => {
  value = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  //  console.log(value);
  gsap.to("svg path", {
    attr: { d: value },
    duration: 0.3,
    ease: "power3.out",
  });
});
mouseEnterd.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalValue },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

// * text
const text = document.querySelector(".page-3 h1");
const textContent = text.textContent;

let splitedText = textContent.split("");
console.log(splitedText);
let halfValue = Math.floor(splitedText.length / 2);
let clutter = "";
splitedText.forEach((tex, idx) => {
    clutter += text.innerHTML = `<span>${tex}</span>`;
});
text.innerHTML = clutter;
gsap.from(".page-3 h1 span", {
  y: 350,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".page-3",
    markers: true,
    end: "end 200",
    start: "start 500",
    scroller: "body",
    duration: 1,
    scrub: 1,
  },
});
// *
gsap.from(".box img", {
  scale: 0,
  opacity: 0,
  duration: 2,
  rotate: 500,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body",
    duration: 2,
    end: "end 100",
    scrub: 1,
  },
});
