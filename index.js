gsap.to(".page-2 h1",{
    transform:"translateX(-70%)",
    scrollTrigger:{
        trigger:".page-2",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 0%",
        end:"top -100%",
        pin:true,
    }
})

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
    duration:1.5,
    ease: "elastic.out(1,0.2)",
  });
});



// * bat man
gsap.from(".box img",{
    scale:0,
    opacity:0,
    duration:2,
    rotate:500,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",

        markers:true,
        duration:2,
        end:"end 100",
        scrub:1,
    }
})