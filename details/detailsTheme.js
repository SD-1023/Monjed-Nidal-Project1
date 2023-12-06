const darkModeButton = document.querySelectorAll(".navListButton")[0];
const theme = window.localStorage.getItem("theme");

const setDarkTheme = () => {
  body.classList.add("darkDetails");
  localStorage.setItem("theme", "dark");
};
const setLightTheme = () => {
  body.classList.remove("darkDetails");
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
} else {
  localStorage.setItem("theme", "light");
}
