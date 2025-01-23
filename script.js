const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videoCon() {
  var videocon = document.querySelector("#video-container");
  var play = document.querySelector("#play");

  videocon.addEventListener("mousemove", function () {
    gsap.to(play, {
      opacity: 1,
      scale: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(play, {
      left: dets.x,
      top: dets.y,
    });
  });
}

videoCon();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.3,
  });
}

loadingAnimation();
