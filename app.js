const topicsContainer = document.getElementById("topicsContainer");
const detailsContainer = document.getElementById("detailsContainer");

let topicsData = [
  {
    imageSource: "assets/images/html.png",
    title: "Web Development Languages",
    language: "HTML",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
    author: "Sarah Smith",
  },
  {
    imageSource: "assets/images/css.webp",
    title: "Web Development Languages",
    language: "CSS",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
    author: "David Lee",
  },
  {
    imageSource: "assets/images/javascript.jpg",
    title: "Web Development Languages",
    language: "JavaScript",
    author: "Emily Chen",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/jquery.png",
    title: "Frontend Frameworks and Libraries",
    language: "jQuery",
    author: "John Johnson",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/angular.png",
    title: "Frontend Frameworks and Libraries",
    language: "Angular",
    author: "Jessica Davis",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/react.webp",
    title: "Frontend Frameworks and Libraries",
    language: "Angular",
    author: "Daniel Brown",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/vuejs.jpeg",
    title: "Frontend Frameworks and Libraries",
    language: "Vue.js",
    author: "Ava Jones",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/nodejs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Node.js",
    author: "Michael Kim",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/expressjs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Express JS",
    author: "Sophia Rodriguez",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
  {
    imageSource: "assets/images/ruby.jpeg",
    title: "Backend Frameworks and Libraries",
    language: "Ruby on Rails",
    author: "William Lee",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
  },
];

function renderTopics() {
  topicsData.forEach((topic) => {
    const topicCard = document.createElement("a");
    topicCard.href = "/details/details.html";
    topicCard.className = "topic box-shadow rounded";
    topicCard.innerHTML = `
    <img src="${topic.imageSource}" alt="" />
    <div class="topicDescription">
      <div>
        <p class="topicTitle text-overflow">${topic.title}</p>
        <b class="language">${topic.language}</b>
      </div>
      <p class="author">Author: ${topic.author}</p>
    </div>
    `;
    topicCard.addEventListener("click", () => showTopicDetails(topic));
    topicsContainer.appendChild(topicCard);
  });
}
renderTopics();

function showTopicDetails(topic) {
  localStorage.setItem("selectedTopic", JSON.stringify(topic));
}
