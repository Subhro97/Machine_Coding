const i18n = {
  en: {
    title: "This is i18n",
    firstPara: "This is the first text",
    secondPara: "This is the second text",
  },
  hi: {
    title: "यह i18n है",
    firstPara: "यह पहला पाठ है",
    secondPara: "यह दूसरा पाठ है",
  },
  ar: {
    title: "هذا هو i18n",
    firstPara: "له هو النص الأول",
    secondPara: "وهذا هو النص الثاني",
  },
};

const btnList = document.querySelectorAll("button");

const title = document.querySelector("h1");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

btnList.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    let code = elm.getAttribute("data-code");

    if (code === "ar") document.body.dir = "rtl";
    else document.body.dir = "ltr";

    title.textContent = i18n[code].title;
    first.textContent = i18n[code].firstPara;
    second.textContent = i18n[code].secondPara;
  });
});
