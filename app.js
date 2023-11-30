const topicsContainer = document.getElementById("topicsContainer");
const inputField = document.querySelector(".inputField");

let topicsData = [
  {
    imageSource: "/assets/images/html.png",
    title: "Web Development Languages",
    language: "HTML",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images , and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.",
    author: "Sarah Smith",
    supTopics: [
      "HTML syntax and structure",
      "HTML elements and attributes",
      "HTML forms and inputs elements",
      "HTML tables and lists",
      "HTML multimedia elements (audio, video, images)",
      "HTML accessibility and sematic markup",
    ],
  },
  {
    imageSource: "/assets/images/css.webp",
    title: "Web Development Languages",
    language: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a web technology that styles the presentation of HTML and XML documents. It defines how elements should appear on a webpage, including layout, colors, fonts, and spacing. CSS enables the separation of content and design, allowing for consistent and visually appealing web pages across different devices and screen sizes.",
    author: "David Lee",
    supTopics: [
      "CSS Selectors and Specificity",
      "CSS Box Model and Layout",
      "CSS Flexbox and Grid Layout",
      "CSS Transitions and Animations",
      "Responsive Web Design with Media Queries",
      "CSS Variables and Custom Properties",
    ],
  },
  {
    imageSource: "/assets/images/javascript.jpg",
    title: "Web Development Languages",
    language: "JavaScript",
    author: "Emily Chen",
    description:
      "JavaScript is a dynamic scripting language commonly used for web development. It runs in web browsers, enabling interactive and responsive features on websites. JavaScript handles client-side scripting tasks, such as modifying document content and managing events, contributing to the creation of engaging and user-friendly web applications.      ",
    supTopics: [
      "Asynchronous Programming with Promises",
      "React Native for Cross-Platform Development",
      "WebAssembly (Wasm) Integration",
      "Webpack and Babel for JavaScript Bundling",
      "Service Workers for Offline Capabilities",
      "TypeScript: Adding Static Typing to JavaScript",
    ],
  },
  {
    imageSource: "/assets/images/jquery.png",
    title: "Frontend Frameworks and Libraries",
    language: "jQuery",
    author: "John Johnson",
    description:
      "jQuery is a fast and lightweight JavaScript library designed to simplify web development. It streamlines tasks like HTML document traversal, event handling, and animation, allowing developers to write concise and efficient code. jQuery simplifies common tasks, promotes cross-browser compatibility, and enhances the creation of interactive and dynamic web pages with ease.",
    supTopics: [
      "DOM Manipulation with jQuery",
      "jQuery Events and Event Handling",
      "AJAX and Asynchronous Operations in jQuery",
      "jQuery Animations and Effects",
      "jQuery Plugins and Extensibility",
      "Best Practices for jQuery Development",
    ],
  },
  {
    imageSource: "/assets/images/angular.png",
    title: "Frontend Frameworks and Libraries",
    language: "Angular",
    author: "Jessica Davis",
    description:
      "Angular is a powerful open-source web framework by Google. It simplifies the development of dynamic, single-page web applications with features like declarative templates and two-way data binding. Its modular structure and tools enhance efficiency, making it a popular choice for building complex web projects.",
    supTopics: [
      "Angular Services and Dependency Injection",
      "Angular Directives for DOM Manipulation",
      "Angular Routing for Single Page Applications (SPAs)",
      "Angular Forms and Reactive Forms",
      "Angular Pipes for Data Transformation",
      "Angular Modules and Component Lifecycle",
    ],
  },
  {
    imageSource: "/assets/images/react.webp",
    title: "Frontend Frameworks and Libraries",
    language: "React",
    author: "Daniel Brown",
    description:
      "React is a JavaScript library for building user interfaces, known for its efficiency in creating reusable components. Developed by Facebook, it enables the construction of dynamic web applications by efficiently updating the interface when data changes, using a virtual DOM for optimal performance.",
    supTopics: [
      "Managing State with React Context API",
      "React Router for Navigation in React Apps",
      "Implementing Redux for State Management in React",
      "Composing and Reusing Logic with Higher-Order Components (HOCs)",
      "Optimizing Performance in React Applications",
      "Effective Testing with React Testing Library",
    ],
  },
  {
    imageSource: "/assets/images/vuejs.jpeg",
    title: "Frontend Frameworks and Libraries",
    language: "Vue.js",
    author: "Ava Jones",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces. It excels in simplicity and flexibility, allowing developers to incrementally adopt its features. Vue.js focuses on the view layer, providing reactive data binding and component-based architecture. Its lightweight nature and ease of integration make it an excellent choice for building modern, dynamic web applications.",
    supTopics: [
      "Vue Router Navigation Guards in Vue.js",
      "Using Vue CLI for Project Management",
      "Vuex State Management in Vue.js",
      "Understanding Vue Directives (v-bind, v-if)",
      "Integrating Vue.js with TypeScript",
      "Vue.js Server-Side Rendering (SSR) Techniques",
    ],
  },
  {
    imageSource: "/assets/images/nodejs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Node.js",
    author: "Michael Kim",
    description:
      "Node.js is a runtime environment that executes JavaScript code outside of a browser. Built on the V8 JavaScript engine, it enables server-side scripting and the development of scalable network applications. Node.js excels in handling concurrent connections and asynchronous I/O, making it ideal for building fast and efficient server-side applications, including web servers and APIs.     ",
    supTopics: [
      "Express.js Middleware for Customization",
      "Real-Time Communication with WebSockets in Node.js",
      "Best Practices for REST API Design in Node.js",
      "User Authentication with Passport.js in Node.js",
      "Bidirectional Communication with Socket.io",
      "Dockerizing Node.js Applications for Deployment",
    ],
  },
  {
    imageSource: "/assets/images/expressjs.webp",
    title: "Backend Frameworks and Libraries",
    language: "Express JS",
    author: "Sophia Rodriguez",
    description:
      "Express.js is a minimal and flexible web application framework for Node.js. It simplifies the creation of robust and scalable web applications and APIs. With a rich set of features for routing, middleware, and HTTP utility methods, Express.js streamlines the development process. It is widely used for building fast and modular server-side applications in the Node.js environment.      ",
    supTopics: [
      "Organizing Routes in Express.js",
      "Effective Error Handling in Express.js",
      "Working with Template Engines in Express.js (e.g., Pug)",
      "Security Best Practices in Express.js",
      "Documenting RESTful APIs with Swagger in Express.js",
      "Testing Express.js Applications (e.g., Mocha, Chai)",
    ],
  },
  {
    imageSource: "/assets/images/ruby.jpeg",
    title: "Backend Frameworks and Libraries",
    language: "Ruby on Rails",
    author: "William Lee",
    description:
      "Ruby on Rails, often referred to as Rails, is a web application framework written in Ruby. It follows the MVC (Model-View-Controller) architectural pattern, promoting the use of convention over configuration and emphasizing code readability. Rails simplifies and accelerates web development by providing built-in tools and conventions for tasks like database management, routing, and authentication.",
    supTopics: [
      "Understanding ActiveRecord Associations in Rails",
      "Scaffolding and Code Generation with Rails Generators",
      "Real-Time Features with Action Cable in Rails",
      "Behavior-Driven Development with RSpec Testing in Rails",
      "Security Best Practices in Ruby on Rails",
      "Implementing GraphQL APIs in Rails",
    ],
  },
];

function renderTopics(filteredTopics) {
  topicsContainer.innerHTML = "";

  filteredTopics.forEach((topic) => {
    const topicCard = document.createElement("a");
    topicCard.href = "/details/details.html";
    topicCard.className = "topic decoration-none box-shadow rounded";
    topicCard.innerHTML = `
      <img src="${topic.imageSource}" alt="${topic.language}" />
      <div class="topicInformation d-flex justify-between">
        <div>
          <p class="topicTitle text-overflow">${topic.title}</p>
          <b class="language text-overflow">${topic.language}</b>
        </div>
        <p class="author text-overflow">Author: ${topic.author}</p>
      </div>
    `;
    topicCard.addEventListener("click", () => showTopicDetails(topic));
    topicsContainer.appendChild(topicCard);
  });
}

function filterTopics(searchTerm) {
  const filteredTopics = topicsData.filter((topic) =>
    topic.language.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderTopics(filteredTopics);
}

inputField.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  filterTopics(searchTerm);
});

function showTopicDetails(topic) {
  localStorage.setItem("selectedTopic", JSON.stringify(topic));
}

renderTopics(topicsData);
