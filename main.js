/*import translations from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("languageSelector");
  const storedLanguage = localStorage.getItem("lang");
  const defaultLanguage = storedLanguage || "en"; // Default to English if no language is stored

  setLanguage(defaultLanguage);

  languageSelector.value = defaultLanguage;
  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
  });
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[translation]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("translation");
    element.textContent = translations[language][translationKey];
  });

  // Set text direction based on the selected language
  document.dir = language === "ar" ? "rtl" : "ltr";
};
*/
// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
