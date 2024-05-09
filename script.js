const sectionOneVideo = document.getElementById("sectionOneVideo");
const sectionOneHeader = document.getElementById("sectionOneHeader");
const headerMouse = document.querySelector("#header-mouse");

const headerMouseDefaultPosition = {
  transform: "translate(-50% , -50%)",
  top: "50%",
  left: "50%",
};

sectionOneVideo.addEventListener("mouseenter", () => {
  headerMouse.style.top = 0;
  headerMouse.style.left = 0;
});

sectionOneVideo.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  headerMouse.style.transform = `translate( calc(${clientX}px - 45%) , calc(${clientY}px - 40%) )`;
});

sectionOneVideo.addEventListener("mouseleave", () => {
  headerMouse.style = headerMouseDefaultPosition;
});

sectionOneHeader.addEventListener("mouseenter", () => {
  console.log("enter");
});
