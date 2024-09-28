const accordian = document.querySelector(".accordian");
const accordianElms = Array.from(document.querySelectorAll(".accordian-item"));

accordian.addEventListener("click", (e) => {
  let target = e.target;

  target =
    target.className === "accordian-title" ? target.parentElement : target;
  let isOpen = target.classList.contains("active");

  accordianElms.forEach((item, idx) => {
    item.classList.remove("active");
  });

  !isOpen ? target.classList.add("active") : target.classList.remove("active");
});
