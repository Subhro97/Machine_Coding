const linkElms = Array.from(document.querySelectorAll(".link-item"));

const linkCont = document.querySelector(".links-container");
const navElms = document.querySelectorAll("ul li");

function addToolTip(e) {
  const targetElm = e.target;

  if (targetElm.className !== "link-item") return;

  console.log(targetElm);

  let { top, left, right, bottom } = targetElm.getBoundingClientRect();

  right = window.screen.width - right;

  const tooltipElm = document.createElement("div");
  const tooltipTxtElm = document.createElement("p");
  tooltipTxtElm.textContent = "This is a Tool tip!";

  if (top < 200) {
    tooltipElm.style.top = "60px";
    tooltipElm.classList.add("top");
  }

  if (left < 100) {
    tooltipElm.style.left = "90%";
    // tooltipElm.classList.add("top");
  }

  if (left > 100 && right < 100) {
    tooltipElm.style.left = "20%";
    // tooltipElm.classList.add("top");
  }

  tooltipElm.classList.add("tooltip");

  tooltipElm.append(tooltipTxtElm);

  targetElm.append(tooltipElm);
}

function initialiseEvents() {
  // linkElms.forEach((item, idx) => {
  linkCont.addEventListener("mouseover", addToolTip);

  linkCont.addEventListener("mouseout", (e) => {
    const tooltip = document.querySelector(".tooltip");

    if (tooltip) tooltip.remove();
  });
}
// });

function cleanUp() {
  linkCont.removeEventListener("mouseout", (e) => {
    const tooltip = document.querySelector(".tooltip");

    tooltip.remove();
  });

  linkCont.removeEventListener("mouseover", addToolTip);
}

window.addEventListener("DOMContentLoaded", () => {
  initialiseEvents();

  // Clean up event listners
  navElms.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.currentTarget === navElms[1]) {
        linkCont.style.display = "none";
        cleanUp();
      } else {
        cleanUp();
        linkCont.style.display = "flex";
        initialiseEvents();
      }
    });
  });
});
