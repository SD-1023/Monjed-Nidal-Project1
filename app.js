const navListAnchor = document.querySelectorAll(".navListAnchor");

function changeNavLinks() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 632) {
    navListAnchor[0].innerHTML = `<ion-icon class="icon" name="moon-outline"></ion-icon>`;
    navListAnchor[1].innerHTML = `<ion-icon class="icon" name="heart-outline"></ion-icon>`;
  } else {
    navListAnchor[0].innerHTML = `<ion-icon class="icon" name="moon-outline"></ion-icon>Dark Mode`;
    navListAnchor[1].innerHTML = `<ion-icon class="icon" name="heart-outline"></ion-icon>Favourites`;
  }
}
changeNavLinks();
window.addEventListener("resize", changeNavLinks);

let topics = [
  {
    imageSource: "assets/images/html.png",
    title: "Web Development Languages",
    language: "HTML",
    author: "Sarah Smith",
  },
  {
    imageSource: "assets/images/css.webp",
    title: "Web Development Languages",
    language: "CSS",
    author: "David Lee",
  },
  {
    imageSource: "assets/images/javascript.jpg",
    title: "Web Development Languages",
    language: "JavaScript",
    author: "Emily Chen",
  },
  {
    imageSource: "assets/images/jquery.png",
    title: "Frontend Frameworks and Libraries",
    language: "jQuery",
    author: "John Johnson",
  },
  {
    imageSource: "assets/images/angular.png",
    title: "Frontend Frameworks and Libraries",
    language: "Angular",
    author: "Jessica Davis",
  },
  {
    imageSource: "assets/images/react.webp",
    title: "Frontend Frameworks and Libraries",
    language: "Angular",
    author: "Daniel Brown",
  },
  {
    imageSource: "assets/images/vuejs.jpeg",
    title: "Frontend Frameworks and Libraries",
    language: "Vue.js",
    author: "Ava Jones",
  },
  {
    imageSource: "assets/images/nodejs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Node.js",
    author: "Michael Kim",
  },
  {
    imageSource: "assets/images/expressjs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Express JS",
    author: "Sophia Rodriguez",
  },
  {
    imageSource: "assets/images/ruby.jpeg",
    title: "Backend Frameworks and Libraries",
    language: "Ruby on Rails",
    author: "William Lee",
  },
];

function renderTopics() {
  const topicsContainer = document.getElementById("topicsContainer");
  topics.forEach((topic) => {
    const topicCard = document.createElement("a");
    topicCard.href = "#";
    topicCard.className = "topic box-shadow rounded";
    topicCard.innerHTML = `
    <img src="${topic.imageSource}" alt="" />
    <div class="topicDescription">
      <div>
        <p class="topicTitle">${topic.title}</p>
        <b class="language">${topic.language}</b>
      </div>
      <p class="author">Author: ${topic.author}</p>
    </div>
    `;
    topicsContainer.appendChild(topicCard);
  });
}
renderTopics();
