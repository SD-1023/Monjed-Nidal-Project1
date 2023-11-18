favouratesButton = document.querySelectorAll(".navListButton")[1];
favouratesSection = document.querySelector(".favouratesSection");

const showFavouriteSection = () => {
  favouratesSection.classList.toggle("hide");
};
favouratesButton.addEventListener("click", showFavouriteSection);
