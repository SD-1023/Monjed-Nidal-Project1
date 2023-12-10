const detailsContainer = document.getElementById("detailsContainer");
const info = document.querySelector(".info");
const infoSection = document.querySelector(".infoSection");
const infoContainer = document.querySelector(".infoContainer");
const topicCategory = document.querySelector(".topicCategory");
const language = document.querySelector(".detailsLanguage");
const asideLanguage = document.querySelector(".asideLanguage");
const topicDescription = document.querySelector(".topicDescription");
const topicImg = document.querySelector(".topicImg");
const subTopicsContainer = document.querySelector(".subTopics");
const subTopicsTitleLanguage = document.querySelector(
  ".subTopicsTitleLanguage"
);
const subTopicsList = document.querySelector(".subTopicsList");
const devName = document.querySelector(".devName");
const addToFavButton = document.querySelector(".addToFavButton");
let selectedTopic;

async function fetchSelectedTopic() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log("ID:", id);
  await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
    .then((response) => response.json())
    .then((data) => {
      selectedTopic = data;
      console.log(selectedTopic);
    })
    .catch((error) => console.error("Error fetching topic details:", error));
}
fetchSelectedTopic();

function fillContent() {
  topicCategory.innerText = selectedTopic.category;
  language.innerText = selectedTopic.topic;
  asideLanguage.innerText = selectedTopic.topic;
  topicDescription.innerText = selectedTopic.description;
  topicImg.src = `../assets/images/${selectedTopic.image}`;
  devName.innerText = selectedTopic.name;
  subTopicsTitleLanguage.innerText = selectedTopic.topic;
  selectedTopic.subtopics.forEach((sup) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <ion-icon class="checkmarkIcon" name="checkmark-circle-outline">
      </ion-icon>${sup}
    `;
    li.classList.add("subTopicsListItem");
    li.classList.add("d-flex");
    li.classList.add("align-center");
    subTopicsList.appendChild(li);
  });
}

addToFavButton.addEventListener("click", () => {
  if (saveTopic(selectedTopic)) {
    addTopicToFavourites(selectedTopic);
  }
});

let leftOffset;

// Function to update leftOffset
function updateLeftOffset() {
  leftOffset = info.offsetLeft;
  subTopicsContainer.style.left = leftOffset + "px";
  if (window.innerWidth > 1010) {
    subTopicsContainer.style.width = info.offsetWidth + "px";
    subTopicsContainer.parentNode.classList.remove("container");
  } else {
    subTopicsContainer.parentNode.classList.add("container");
    subTopicsContainer.style.width = "unset";
  }
}

window.addEventListener("resize", () => {
  updateLeftOffset();
});
window.addEventListener("load", async () => {
  await fetchSelectedTopic();
  fillContent();
  updateLeftOffset();
});

// infoContainer.innerHTML = `
// <span class="">${selectedTopic.title}</span>
// <h2 class="language">${selectedTopic.language}</h2>
// <p class="topicDescription">
//   ${selectedTopic.description}
// </p>
// </div>
// <aside class="box-shadow">
// <img class="topicImg" src="${selectedTopic.imageSource}" alt="" />
// <div class="asideInfo">
//   <p><b class="language">${selectedTopic.language}</b> by <a class="devName" href="#">${selectedTopic.author}</a></p>
//   <div class="addToFavourites">
//     <p>Interested about this topic?</p>
//     <a class="addToFavButton" href="#"
//       >Add to Favoutites
//       <ion-icon class="icon" name="heart-outline"></ion-icon
//     ></a>
//     <small class="unlimitedCreds">Unlimited Credits</small>
//   </div>
// </div>
// </aside>`;
