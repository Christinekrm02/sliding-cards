const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

/*each active cirle */
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //console.log("onCurrentActiveClick:", currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  //beginning
  if (currentActive < 1) {
    currentActive = 1;
  }
  //console.log("onCurrentActiveClick:", currentActive);
  update();
});

/* enables next click functionality */
function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  /* blue line moves about halfway thru each checkpoint */
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  //console.log(actives.length, circles.length);

  /* enables previous functionality */
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
