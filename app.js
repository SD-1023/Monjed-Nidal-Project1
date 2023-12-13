import { searchFetch, topicsFetch } from "./apiFetches.js";
const topicsContainer = document.getElementById("topicsContainer");
const homeMain = document.querySelector(".homeMain");
const inputField = document.querySelector(".inputField");
const topicsCounter = document.querySelector("#topicsCounter");
const sortSelect = document.querySelector("#sortSelect");
const filterSelect = document.querySelector("#filterSelect");
const loader = document.querySelector(".loaderContainer");

let topicsData = [];
let filteredTopics = [];
let categories = [];
const cache = {};
const DEBOUNCE_TIME = 300;
let timer;

function showLoader() {
  loader.style.display = "flex";
  homeMain.style.display = "none";
}
function hideLoader() {
  loader.style.display = "none";
  homeMain.style.display = "block";
}

function showErrorPage() {
  homeMain.style.display = "none";
  const errorPage = document.createElement("main");
  errorPage.classList.add("errorPage");
  errorPage.innerHTML = `
    <p class="error">Something went wrong. Web topics failed to load.</p>
    <a class="backBtn" href="./index.html">Reload Page</a>
  `;
  body.appendChild(errorPage);
}

async function getTopicsData() {
  showLoader();
  topicsData = await topicsFetch();
  filteredTopics = topicsData;
  hideLoader();
  if (!topicsData) {
    showErrorPage();
  }
}

function getAndLoadCategoris(topics) {
  topics.forEach((topic) => {
    if (!categories.includes(topic.category)) {
      categories.push(topic.category);
      const option = document.createElement("option");
      option.value = topic.category;
      option.textContent = topic.category;
      filterSelect.appendChild(option);
    }
  });
}

function renderTopics(topicsList) {
  getAndLoadCategoris(filteredTopics);
  topicsContainer.innerHTML = "";
  topicsCounter.innerHTML = topicsList ? `"${topicsList.length}"` : `No`;
  topicsList.forEach((topic) => {
    const topicCard = document.createElement("a");
    topicCard.href = `details/details.html?id=${topic.id}`;
    topicCard.className = "topic decoration-none box-shadow rounded";
    topicCard.innerHTML = `
      <img src="./assets/images/${topic.image}" alt="${topic.topic}" />
      <div class="topicInformation d-flex justify-between">
        <div>
          <p class="topicTitle text-overflow">${topic.category}</p>
          <p class="language">${topic.topic}</p>
        </div>
        <div>
          <div class="stars d-flex align-center">
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star-outline"></ion-icon>
          </div>
          <p class="author text-overflow">Author: ${topic.name}</p>
        </div>
        </div>
    `;
    topicsContainer.appendChild(topicCard);
  });
}
function sortTopics(arrayOfTopics, sortMethod) {
  const compareFunction = (topic1, topic2) => {
    const topic1Value = topic1[sortMethod].toLowerCase();
    const topic2Value = topic2[sortMethod].toLowerCase();
    return topic1Value.localeCompare(topic2Value);
  };
  return arrayOfTopics.sort(compareFunction);
}

function debouncedFormChangeHandler(searchTerm) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(async () => {
    await formChangeHandler(searchTerm);
  }, DEBOUNCE_TIME);
}

async function formChangeHandler(searchTerm) {
  if (inputField.value !== "") {
    if (cache[searchTerm]) {
      filteredTopics = cache[searchTerm];
    } else {
      filteredTopics = await searchFetch(searchTerm);
      cache[searchTerm] = filteredTopics;
    }

    if (filterSelect.value !== "default") {
      filteredTopics = filteredTopics.filter((topic) => {
        return topic.category === filterSelect.value;
      });
    }
    if (sortSelect.value !== "default") {
      filteredTopics = sortTopics(filteredTopics, sortSelect.value);
    }
  } else {
    if (filterSelect.value !== "default") {
      filteredTopics = topicsData.filter((topic) => {
        return topic.category === filterSelect.value;
      });
      console.log(filteredTopics);
    } else {
      filteredTopics = topicsData;
    }
    if (sortSelect.value !== "default") {
      filteredTopics = sortTopics(filteredTopics, sortSelect.value);
    } else {
      if (filterSelect.value === "default") {
        filteredTopics = topicsData;

        console.log(topicsData);
      }
    }
  }
  renderTopics(filteredTopics);
}

inputField.addEventListener("input", (event) => {
  debouncedFormChangeHandler(event.target.value);
});

filterSelect.addEventListener("change", () => {
  formChangeHandler(inputField.value);
});
sortSelect.addEventListener("change", () => {
  formChangeHandler(inputField.value);
});

window.addEventListener("load", async () => {
  await getTopicsData();
  await formChangeHandler(inputField.value);
  if (filteredTopics) {
    renderTopics(filteredTopics);
  } else {
    renderTopics(topicsData);
  }
});
