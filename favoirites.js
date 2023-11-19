// body = document.body;

// const favouratesSection = document.createElement("section");
// favouratesSection.innerHTML = `
// <h3 class="favouratesTitle">My Favourite Topics</h3>
// <div class="favouriteTopicsList">
// </div>`;
// favouratesSection.className = "favouratesSection hide container box-shadow";

// body.appendChild(favouratesSection);
// const favouriteTopicsList = document.querySelector("favouriteTopicsList");

// favouratesButton = document.querySelectorAll(".navListButton")[1];
// const showFavouriteSection = () => {
//   favouratesSection.classList.toggle("hide");
// };
// favouratesButton.addEventListener("click", showFavouriteSection);

// const addTopicToFavourites = (topic) => {
//   const newDiv = document.createElement("div");
//   newDiv.className = "favouriteTopic rounded box-shadow";
//   newDiv.innerHTML = `
//   <img
//   class="favouriteTopicImg"
//   src="${topic.imgSource}"
//   alt="${topic.language}"
//   />
//   <h4 class="favouriteTopicTitle text-overflow">${topic.language}</h4>`;
//   localStorage.setItem(
//     "favourites",
//     JSON.stringify([...JSON.parse(localStorage.getItem("favourites")), topic])
//   );
//   console.log(JSON.parse(localStorage.getItem("favourites")));
// };
body = document.body;

const favouritesSection = document.createElement("section");
favouritesSection.innerHTML = `
  <h3 class="favouritesTitle">My Favourite Topics</h3>
  <div class="favouriteTopicsList">
  </div>`;
favouritesSection.className = "favouritesSection hide container box-shadow";

body.appendChild(favouritesSection);
const favouriteTopicsList = document.querySelector(".favouriteTopicsList");

favouritesButton = document.querySelectorAll(".navListButton")[1];
const showFavouriteSection = () => {
  favouritesSection.classList.toggle("hide");
};
favouritesButton.addEventListener("click", showFavouriteSection);

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

  if (!isTopicExists) {
    existingFavourites.push(topic);
    localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    showFavouriteSection();
  }
};
if (JSON.parse(localStorage.getItem("favourites"))) {
  let favArray = JSON.parse(localStorage.getItem("favourites"));
  favArray.forEach((topic) => {
    addTopicToFavourites(topic);
  });
} else {
  favouritesSection.style.display = "none";
}
