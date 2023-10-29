const homeText = document.querySelector("#home img:nth-child(2)");
const falcon = document.querySelector("#home img:nth-child(1)");
const ours = document.querySelector("#home img:nth-child(4)");
const allImageInArticle = document.querySelectorAll(".menu img");

const transValue = 80;

gsap.to(homeText, {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.2,
  y: "100%",
});

gsap.to(falcon, {
  scrollTrigger: {
    scrub: 1,
  },
  x: -transValue,
});
gsap.to(ours, {
  scrollTrigger: {
    scrub: 1,
  },
  x: transValue,
});

gsap.to(allImageInArticle, {
  scrollTrigger: {
    scrub: true,
    // once : true,

    // start : "top bottom",
    // end : "center center"
  },

  stagger: 0.4,
  y: 0,
});
