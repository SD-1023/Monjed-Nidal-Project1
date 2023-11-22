const [darkModeButtonText, favouratesButtonText] =
  document.querySelectorAll(".navButtonText");

function changeNavLinks() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 632) {
    darkModeButtonText.innerText = "";
    favouratesButtonText.innerText = "";
  } else {
    darkModeButtonText.innerText = "Dark Mode";
    favouratesButtonText.innerText = "Favourites";
  }
}
window.addEventListener("resize", changeNavLinks);

changeNavLinks();
