const topicsContainer = document.getElementById("topicsContainer");
const inputField = document.querySelector(".inputField");
const topicsCounter = document.querySelector("#topicsCounter");
const sortSelect = document.querySelector("#sortSelect");
const filterSelect = document.querySelector("#filterSelect");
let topicsData = [];

async function fetchTopicsData() {
  await fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      topicsData = data;
    })
    .catch((error) => console.error("Error fetching topics data:", error));
}

function renderTopics(filteredTopics) {
  topicsContainer.innerHTML = "";
  topicsCounter.innerHTML = filteredTopics
    ? `"${filteredTopics.length}"`
    : `No`;
  filteredTopics.forEach((topic) => {
    const topicCard = document.createElement("a");
    topicCard.href = `details/details.html`;
    topicCard.className = "topic decoration-none box-shadow rounded";
    topicCard.innerHTML = `
      <img src=".${topic.imageSource}" alt="${topic.language}" />
      <div class="topicInformation d-flex justify-between">
        <div>
          <p class="topicTitle text-overflow">${topic.title}</p>
          <p class="language">${topic.language}</p>
        </div>
        <div>
          <div class="stars d-flex align-center">
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star-outline"></ion-icon>
          </div>
          <p class="author text-overflow">Author: ${topic.author}</p>
        </div>
        </div>
    `;
    topicCard.addEventListener("click", () => showTopicDetails(topic));
    topicsContainer.appendChild(topicCard);
  });
}

function handleSearch(searchTerm) {
  let filteredTopics = topicsData.filter((topic) =>
    topic.language.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderTopics(filteredTopics);
}

inputField.addEventListener("input", (event) => {
  handleSearch(event.target.value);
});

function showTopicDetails(topic) {
  localStorage.setItem("selectedTopic", JSON.stringify(topic));
}

await fetchTopicsData();
renderTopics(topicsData);
