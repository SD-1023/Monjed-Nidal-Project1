const body = document.body;
favouritesButton = document.querySelectorAll(".navListButton")[1];
const favouritesSection = document.createElement("section");
const favouriteTopicsList = document.createElement("ul");

const showFavouriteSection = () => {
  favouritesSection.classList.toggle("hide");
};

window.addEventListener("load", () => {
  favouritesSection.className = "favouritesSection hide container box-shadow";
  favouritesSection.innerHTML = `
  <h3 class="favouritesTitle">My Favourite Topics</h3>
  `;
  favouriteTopicsList.classList.add("favouriteTopicsList");
  favouritesSection.appendChild(favouriteTopicsList);
  body.appendChild(favouritesSection);
});

favouritesButton.addEventListener("click", () => {
  const existingFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  if (existingFavourites[0]) {
    showFavouriteSection();
  }
});

const addTopicToFavourites = (topic) => {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
    <img
      class="favouriteTopicImg"
      src="../assets/images/${topic.image}"
      alt="${topic.topic}"
    />
    <div class="favouriteTopicInfo">
    <div>
      <h4 class="favouriteTopicTitle text-overflow">${topic.topic}</h4>
      <div class="stars favouriteTopicStars d-flex align-center">
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star"></ion-icon>
      <ion-icon class="star" name="star-outline"></ion-icon>
    </div>
    </div>
      <ion-icon class="removeIcon" name="heart-dislike-outline"></ion-icon>
    </div>`;
  newLi.className = "favouriteTopic rounded box-shadow";
  favouriteTopicsList.appendChild(newLi);
};
const saveTopic = (topic) => {
  const existingFavourites =
    JSON.parse(localStorage.getItem("favourites")) || [];
  const isTopicExists = existingFavourites.some(
    (existingTopic) => existingTopic.topic === topic.topic
  );
  if (!isTopicExists) {
    existingFavourites.push(topic);
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    showFavouriteSection();
    return true;
  }
  showFavouriteSection();
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
    (topic) => topic.topic !== language
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
}

// localStorage.clear();
