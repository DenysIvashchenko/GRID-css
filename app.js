const container = document.querySelectorAll(".container div");
const addId = () => {
  [...container].forEach((item) => item.setAttribute("id", "mous"));
};
addId();

function mouseAll() {
  const mouse = document.querySelectorAll("#mous");
  [...mouse].forEach((item) => (item.onmouseenter = bgChange));
}
mouseAll();

function bgChange() {
  if (this.classList.contains("bg1")) {
    this.classList.remove("bg1");
    this.classList.add("bg2");
  } else {
    this.classList.remove("bg2");
    this.classList.add("bg1");
  }
}
