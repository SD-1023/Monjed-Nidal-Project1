const body = document.body;
favouritesButton = document.querySelectorAll(".navListButton")[1];
const favouritesSection = document.createElement("section");
const favouriteTopicsList = document.createElement("ul");

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
    <div class="favouriteTopicInfo">
      <h4 class="favouriteTopicTitle text-overflow">${topic.language}</h4>
      <ion-icon class="removeIcon" name="heart-dislike-outline"></ion-icon>
    </div>
    `;
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
const renderFavouriteTopics = () => {
  favouriteTopicsList.innerHTML = ""; // Clear previous topics
  const existingFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];

  existingFavourites.forEach((topic) => {
    addTopicToFavourites(topic);
  });

  // Show or hide the favorites section based on whether there are favorites
  favouritesSection.style.display =
    existingFavourites.length > 0 ? "block" : "none";
};

const removeTopicFromFavourites = (language) => {
  const existingFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  const updatedFavourites = existingFavourites.filter(
    (topic) => topic.language !== language
  );
  localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  renderFavouriteTopics();
};
favouriteTopicsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeIcon")) {
    const topicDiv = event.target.closest(".favouriteTopic");
    const language = topicDiv.querySelector(".favouriteTopicTitle").textContent;
    removeTopicFromFavourites(language);
  }
});

if (JSON.parse(localStorage.getItem("favourites"))) {
  let favArray = JSON.parse(localStorage.getItem("favourites"));
  favArray.forEach((topic) => {
    addTopicToFavourites(topic);
  });
} else {
  favouritesSection.style.display = "none";
}
