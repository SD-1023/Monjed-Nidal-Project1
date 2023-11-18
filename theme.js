const darkModeButton = document.querySelectorAll(".navListButton")[0];
const body = document.body;
const theme = window.localStorage.getItem("theme");

const setDarkTheme = () => {
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
};
const setLightTheme = () => {
  body.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

darkModeButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
});

if (localStorage.getItem("theme") === "dark") {
  setDarkTheme();
}

// localStorage.setItem(
//   "theme",
//   localStorage.getItem("theme") === "dark" ? "dark" : "light"
// );

// if (localStorage.getItem("theme") === "light") {
// }

// darkModeButton.addEventListener("click", themeToggle);
