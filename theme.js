const darkModeButton = document.querySelectorAll(".navListButton")[0];
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

if (
  !localStorage.getItem("theme") &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setDarkTheme();
} else if (localStorage.getItem("theme") === "dark") {
  setDarkTheme();
} else {
  localStorage.setItem("theme", "light");
}
