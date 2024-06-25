import "./style.scss";
import gsap from "gsap";

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const titles = document.querySelector(".titles");

const duration = 1.5;
const ease = "elastic.out(1, 0.9)";

let open = false;
card1.addEventListener("click", () => {
  if (open) {
    open = false;
    gsap.to(card1, {
      duration: duration,
      width: "380px",
      height: "495px",
      x: 0,
      ease: ease,
    });
    gsap.to(".card-1 img", {
      duration: duration,
      width: "380px",
      height: "340px",
      ease: ease,
    });
    gsap.to(".titles-1", {
      duration: duration,
      scale: 1,
      y: 0,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
    gsap.to(".card-2, .card-3", {
      duration: duration,
      x: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
  } else {
    open = true;
    gsap.to(card1, {
      duration: duration,
      width: "970px",
      height: "942px",
      x: 425,
      ease: ease,
    });
    gsap.to(".card-1 img", {
      duration: duration,
      width: "970px",
      height: "660px",
      ease: ease,
    });
    gsap.to(".titles-1", {
      duration: duration,
      scale: 1.5,
      y: 30,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 500,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
    gsap.to(".card-2, .card-3", {
      duration: duration,
      x: 500,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
  }
});

card2.addEventListener("click", () => {
  if (open) {
    open = false;
    gsap.to(card2, {
      duration: duration,
      width: "380px",
      height: "495px",
      x: 0,
      ease: ease,
    });
    gsap.to(".card-2 img", {
      duration: duration,
      width: "380px",
      height: "340px",
      ease: ease,
    });
    gsap.to(".titles-2", {
      duration: duration,
      scale: 1,
      y: 0,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
    gsap.to(".card-1", {
      duration: duration,
      x: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
    gsap.to(".card-3", {
      duration: duration,
      x: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
    gsap.to(".card-2-img-1", {
      top: "64px",
      left: "112px",
      width: "200px",
      height: "250px",
      rotate: -4,
      duration: 0.3,
    });
    gsap.to(".card-2-img-2", {
      top: "24px",
      left: "50%",
      width: "200px",
      height: "250px",
      rotate: 3,
      duration: 0.3,
    });
    gsap.to(".card-2-img-3", {
      top: "96px",
      right: "128px",
      width: "200px",
      height: "250px",
      rotate: 6,
      duration: 0.3,
    });
  } else {
    open = true;
    gsap.to(card2, {
      duration: duration,
      width: "1100px",
      height: "942px",
      x: 0,
      ease: ease,
    });
    gsap.to(".card-2 img", {
      duration: duration,
      width: "970px",
      height: "660px",
      ease: ease,
    });
    gsap.to(".titles-2", {
      duration: duration,
      scale: 2,
      y: -250,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 500,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
    gsap.to(".card-1", {
      duration: duration,
      x: -300,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
    gsap.to(".card-3", {
      duration: duration,
      x: 300,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
    gsap.to(".card-2-img-1", {
      top: "350px",
      left: "190px",
      width: "300px",
      height: "370px",
      rotate: 0,
      duration: 0.3,
    });
    gsap.to(".card-2-img-2", {
      top: "350px",
      width: "300px",
      height: "370px",
      rotate: 0,
      duration: 0.3,
    });
    gsap.to(".card-2-img-3", {
      top: "350px",
      right: "140px",
      width: "300px",
      height: "370px",
      rotate: 0,
      duration: 0.3,
    });
  }
});

card3.addEventListener("click", () => {
  if (open) {
    open = false;
    gsap.to(card3, {
      duration: duration,
      width: "380px",
      height: "495px",
      x: 0,
      ease: ease,
    });
    gsap.to(".card-3 img", {
      duration: duration,
      width: "380px",
      height: "340px",
      ease: ease,
    });
    gsap.to(".titles-3", {
      duration: duration,
      scale: 1,
      y: 0,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
    gsap.to(".card-1, .card-2", {
      duration: duration,
      x: 0,
      scale: 1,
      opacity: 1,
      ease: ease,
    });
  } else {
    open = true;
    gsap.to(card3, {
      duration: duration,
      width: "970px",
      height: "942px",
      x: -425,
      ease: ease,
    });
    gsap.to(".card-3 img", {
      duration: duration,
      width: "970px",
      height: "660px",
      ease: ease,
    });
    gsap.to(".titles-3", {
      duration: duration,
      scale: 1.5,
      y: 30,
      ease: ease,
    });
    gsap.to(titles, {
      duration: duration,
      y: 500,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
    gsap.to(".card-1, .card-2", {
      duration: duration,
      x: -500,
      scale: 0.5,
      opacity: 0,
      ease: ease,
    });
  }
});
