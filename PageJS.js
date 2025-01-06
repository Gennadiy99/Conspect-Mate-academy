"use strict";
// const page = document.documentElement;
const page = document.querySelector(".page");
const switcher = document.querySelector(".theme-switcher");
const themeName = document.querySelector(".theme-name");

switcher.addEventListener("click", () => {
  if (page.classList.contains("page--theme--dark")) {
    page.classList.remove("page--theme--dark");
    switcher.classList.remove("theme-switcher--theme--dark");
    themeName.textContent = "Theme: light";
  } else {
    page.classList.add("page--theme--dark");
    switcher.classList.add("theme-switcher--theme--dark");
    themeName.innerHTML = "Theme: <strong>dark</strong>";
  }
});
// выпадающий список

const dropdown = document.querySelector(".dropdown");
const trigger = dropdown.querySelector(".dropdown__trigger");
const content = dropdown.querySelector(".dropdown__content");
const initialHeight = content.clientHeight;

// content.style.height = "0";

trigger.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  dropdown.classList.toggle("dropdown--active");

  // if (dropdown.classList.contains("dropdown--active")) {
  //   content.style.height = "0";
  //   dropdown.classList.remove("dropdown--active");
  // } else {
  //   content.style.height = `${initialHeight}px`;
  //   dropdown.classList.add("dropdown--active");
  // }
});
