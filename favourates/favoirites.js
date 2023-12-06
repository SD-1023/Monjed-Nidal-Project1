const body = document.body;
favouritesButton = document.querySelectorAll(".navListButton")[1];
const favouritesSection = document.createElement("section");
const favouriteTopicsList = document.createElement("ul");

const showFavouriteSection = () => {
  favouritesSection.classList.toggle("hide");
};

window.addEventListener("load", () => {
  favouritesSection.className = "favouritesSection hide container box-shadow";
  favouritesButton.addEventListener("click", () => {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    if (existingFavourites[0]) {
      showFavouriteSection();
    }
  });
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
    <div>
      <h4 class="favouriteTopicTitle text-overflow">${topic.language}</h4>
      <div class="stars favouriteTopicStars d-flex align-center">
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star-outline"></ion-icon>
    </div>
    </div>
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

  if (existingFavourites.length === 0) {
    favouritesSection.classList.toggle("hide");
  }
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
