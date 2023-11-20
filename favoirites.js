const body = document.body;
favouritesButton = document.querySelectorAll(".navListButton")[1];
const favouritesSection = document.createElement("section");
const favouriteTopicsList = document.createElement("section");

const showFavouriteSection = () => {
  console.log("gg");
  favouritesSection.classList.toggle("hide");
};

window.addEventListener("load", () => {
  favouritesSection.className = "favouritesSection hide container box-shadow";
  favouritesButton.addEventListener("click", showFavouriteSection);
});
favouritesSection.innerHTML = `
<h3 class="favouritesTitle">My Favourite Topics</h3>
`;
favouriteTopicsList.classList.add("favouriteTopicsList");
favouritesSection.appendChild(favouriteTopicsList);
body.appendChild(favouritesSection);

const addTopicToFavourites = (topic) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <img
      class="favouriteTopicImg"
      src="${topic.imageSource}"
      alt="${topic.language}"
    />
    <h4 class="favouriteTopicTitle text-overflow">${topic.language}</h4>`;
  newDiv.className = "favouriteTopic rounded box-shadow";
  favouriteTopicsList.appendChild(newDiv);
};
const saveTopic = (topic) => {
  const existingFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  const isTopicExists = existingFavourites.some(
    (existingTopic) => existingTopic.language === topic.language
  );
  console.log(isTopicExists);
  if (!isTopicExists) {
    existingFavourites.push(topic);
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    showFavouriteSection();
    return true;
  }
  return false;
};
if (JSON.parse(localStorage.getItem("favourites"))) {
  let favArray = JSON.parse(localStorage.getItem("favourites"));
  favArray.forEach((topic) => {
    addTopicToFavourites(topic);
  });
} else {
  favouritesSection.style.display = "none";
}
// localStorage.clear();
