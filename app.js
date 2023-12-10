const topicsContainer = document.getElementById("topicsContainer");
const homeMain = document.querySelector(".homeMain");
const inputField = document.querySelector(".inputField");
const topicsCounter = document.querySelector("#topicsCounter");
const sortSelect = document.querySelector("#sortSelect");
const filterSelect = document.querySelector("#filterSelect");
const loader = document.querySelector(".loaderContainer");
let isLoading = false;

let topicsData = [];
let categories = [];

function showLoader() {
  loader.style.display = "flex";
  homeMain.style.display = "none";
}
//<option value="Web Development Languages">Web Languages</option>

function hideLoader() {
  loader.style.display = "none";
  homeMain.style.display = "block";
}

async function fetchTopicsData() {
  showLoader();

  try {
    const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
    const data = await response.json();
    topicsData = data;
  } catch (error) {
    console.error("Error fetching topics data:", error);
  } finally {
    hideLoader();
  }
}

function renderTopics(filteredTopics) {
  topicsContainer.innerHTML = "";
  topicsCounter.innerHTML = filteredTopics
    ? `"${filteredTopics.length}"`
    : `No`;
  filteredTopics.forEach((topic) => {
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

function handleSearch(searchTerm) {
  let filteredTopics = topicsData.filter((topic) =>
    topic.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setTimeout(() => {
    renderTopics(filteredTopics);
  }, 300);
}

inputField.addEventListener("input", (event) => {
  handleSearch(event.target.value);
});

await fetchTopicsData();
renderTopics(topicsData);
