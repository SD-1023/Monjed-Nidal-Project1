import { fetchTopicDetails } from "../apiFetches.js";
const detailsContainer = document.getElementById("detailsContainer");
const info = document.querySelector(".info");
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
const loader = document.querySelector(".loaderContainer");

let selectedTopic;

function showLoader() {
  loader.style.display = "flex";
  detailsContainer.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  detailsContainer.style.display = "block";
}
function showErrorPage() {
  detailsContainer.style.display = "none";
  const errorPage = document.createElement("main");
  errorPage.classList.add("errorPage");
  errorPage.innerHTML = `
    <p class="error">Error Loading the page!</p>
    <a class="backBtn" href="../index.html">Back to home page</a>
  `;
  body.appendChild(errorPage);
}

async function fetchSelectedTopic() {
  showLoader();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  selectedTopic = await fetchTopicDetails(id);
  hideLoader();
  if (!selectedTopic) {
    showErrorPage();
  }
}

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
