const bodeyElement = document.querySelector("body");
bodeyElement.style.fontFamily = "Roboto";

const h1Element = document.querySelector(".title");
h1Element.style.textAlign = "center";

const foodElement = document.querySelectorAll(".main .food-category");
console.log(foodElement);
foodElement.forEach((el, index) => {
  const categoryElement = el.querySelector(".category");
  categoryElement.style.fontStyle = "italic";
  categoryElement.style.textDecoration = "underline";
  const bgColor = ["salmon", "plum", "lightpink"];
  el.style.backgroundColor = bgColor[index];
  el.style.flexBasis = "30%";
  el.style.boxSizing = "boder-box";
  el.style.margin = "10px";
});

const titleWarningElement = document.getElementById("warning");
titleWarningElement.style.fontSize = "1.4rem";
titleWarningElement.style.fontFamily = "Tapestry";

const allergyEthchild = document.querySelectorAll(
  ".allergies .allergy-info:nth-child(2n)"
);
allergyEthchild.forEach((el) => {
  el.style.backgroundColor = "lightblue";
});

const allergies = document.querySelector(".allergy-warning");
allergies.style.display = "flex";
allergies.style.flexDirection = "column";
allergies.style.alignItems = "center";

const allergyItem = document.querySelectorAll(".allergies .allergy-info");
allergyItem.forEach((el) => {
  el.style.listStyle = "none";
  el.style.width = "400px";
});

const footerElement = document.querySelector(".footer");
footerElement.style.display = "flex";
footerElement.style.justifyContent = "center";

const footerDeskElement = document.querySelectorAll(".footer .food-desc");
footerDeskElement.forEach((el) => {
  el.style.border = "5px solid orange";
  el.style.borderRadius = "50%";
  el.style.width = "100px";
  el.style.height = "100px";
  el.style.display = "flex";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.style.margin = "10px";
});

const mainElement = document.querySelector(".main");
function media(x) {
  if (x.matches) {
    mainElement.style.display = "flex";
    mainElement.style.justifyContent = "space-between";
  } else {
    mainElement.style.display = "flex";
    mainElement.style.flexDirection = "column";
  }
}

let mediaElement = window.matchMedia("(min-width:768px)");
media(mediaElement);
mediaElement.addListener(media);
