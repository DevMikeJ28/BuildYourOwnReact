const tmpData = [
  {
    id: 1,
    status: "Todo",
    title: "Learning HTML",
    description: "Learn the DOM Advantage",
  },
  {
    id: 2,
    status: "Done",
    title: "Learning Angular",
    description: "Understand Middleware",
  },
  {
    id: 3,
    status: "Done",
    title: "Practice DOM",
    description: "Learn the Base of DOM",
  },
  {
    id: 4,
    status: "In Progress",
    title: "Learning JavaScript",
    description: "Build responsive UI",
  },
  {
    id: 5,
    status: "Todo",
    title: "Learning TypeScript",
    description: "Learn the DOM Advantage",
  },
  {
    id: 6,
    status: "In Progress",
    title: "Learning Vue",
    description: "Using DOM to create a page",
  },
  {
    id: 7,
    status: "Todo",
    title: "Build a Portfolio",
    description: "Implement CRUD operations",
  },
  {
    id: 8,
    status: "In Progress",
    title: "Build a Chat App",
    description: "Learn about State Management",
  },
  {
    id: 9,
    status: "Done",
    title: "Learning Vue",
    description: "Learn about State Management",
  },
  {
    id: 10,
    status: "In Progress",
    title: "Learning Node.js",
    description: "Implement CRUD operations",
  },
  {
    id: 11,
    status: "In Progress",
    title: "Learning TypeScript",
    description: "Design a Database Schema",
  },
  {
    id: 12,
    status: "Done",
    title: "Build a Blog",
    description: "Learn about State Management",
  },
  {
    id: 13,
    status: "Todo",
    title: "Build a Chat App",
    description: "Learn the Base of DOM",
  },
  {
    id: 14,
    status: "Done",
    title: "Build a Chat App",
    description: "Learn the Base of DOM",
  },
  {
    id: 15,
    status: "Todo",
    title: "Learning TypeScript",
    description: "Understand Grid Layout",
  },
  {
    id: 16,
    status: "Todo",
    title: "Learning MongoDB",
    description: "Learn the DOM Advantage",
  },
  {
    id: 17,
    status: "Done",
    title: "Learning NestJS",
    description: "Understand Middleware",
  },
  {
    id: 18,
    status: "In Progress",
    title: "Learning CSS",
    description: "Implement Redux",
  },
  {
    id: 19,
    status: "Todo",
    title: "Build a Blog",
    description: "Design a Database Schema",
  },
  {
    id: 20,
    status: "In Progress",
    title: "Learning JavaScript",
    description: "Understand Grid Layout",
  },
  {
    id: 21,
    status: "Done",
    title: "Learning Vue",
    description: "Understand Middleware",
  },
  {
    id: 22,
    status: "Todo",
    title: "Build a Blog",
    description: "Build REST API",
  },
  {
    id: 23,
    status: "In Progress",
    title: "Learning Angular",
    description: "Implement CRUD operations",
  },
  {
    id: 24,
    status: "In Progress",
    title: "Learning SQL",
    description: "Understand Middleware",
  },
  {
    id: 25,
    status: "Done",
    title: "Build a Blog",
    description: "Implement CRUD operations",
  },
  {
    id: 26,
    status: "In Progress",
    title: "Learning SQL",
    description: "Learn the Base of DOM",
  },
  {
    id: 27,
    status: "Todo",
    title: "Learning React",
    description: "Understand Flexbox",
  },
  {
    id: 28,
    status: "Todo",
    title: "Practice DOM",
    description: "Implement Redux",
  },
  {
    id: 29,
    status: "Todo",
    title: "Learning HTML",
    description: "Learn the Base of DOM",
  },
  {
    id: 30,
    status: "In Progress",
    title: "Learning SQL",
    description: "Understand Grid Layout",
  },
  {
    id: 31,
    status: "In Progress",
    title: "Build a Blog",
    description: "Learn the DOM Advantage",
  },
  {
    id: 32,
    status: "Todo",
    title: "Learning HTML",
    description: "Build REST API",
  },
  {
    id: 33,
    status: "Done",
    title: "Learning CSS",
    description: "Learn the DOM Advantage",
  },
  {
    id: 34,
    status: "Todo",
    title: "Learning NestJS",
    description: "Understand Flexbox",
  },
  {
    id: 35,
    status: "Done",
    title: "Learning SQL",
    description: "Handle Authentication",
  },
  {
    id: 36,
    status: "Todo",
    title: "Learning TypeScript",
    description: "Build REST API",
  },
  {
    id: 37,
    status: "Done",
    title: "Learning SQL",
    description: "Understand Flexbox",
  },
  {
    id: 38,
    status: "Todo",
    title: "Learning HTML",
    description: "Implement CRUD operations",
  },
  {
    id: 39,
    status: "Done",
    title: "Learning HTML",
    description: "Design a Database Schema",
  },
  {
    id: 40,
    status: "In Progress",
    title: "Build a Portfolio",
    description: "Practice API calls",
  },
  {
    id: 41,
    status: "In Progress",
    title: "Learning SQL",
    description: "Build GraphQL API",
  },
  {
    id: 42,
    status: "Todo",
    title: "Learning Angular",
    description: "Learn the DOM Advantage",
  },
  {
    id: 43,
    status: "Todo",
    title: "Learning NestJS",
    description: "Understand Flexbox",
  },
  {
    id: 44,
    status: "Todo",
    title: "Learning React",
    description: "Using DOM to create a page",
  },
  {
    id: 45,
    status: "Done",
    title: "Learning Angular",
    description: "Build GraphQL API",
  },
  {
    id: 46,
    status: "Done",
    title: "Learning React",
    description: "Handle Authentication",
  },
  {
    id: 47,
    status: "Todo",
    title: "Learning Node.js",
    description: "Learn about State Management",
  },
  {
    id: 48,
    status: "Todo",
    title: "Learning TypeScript",
    description: "Handle Authentication",
  },
  {
    id: 49,
    status: "Todo",
    title: "Practice DOM",
    description: "Learn the Base of DOM",
  },
  {
    id: 50,
    status: "Done",
    title: "Learning JavaScript",
    description: "Implement Redux",
  },
  {
    id: 51,
    status: "Done",
    title: "Practice DOM",
    description: "Understand Middleware",
  },
  {
    id: 52,
    status: "Todo",
    title: "Learning Vue",
    description: "Practice API calls",
  },
  {
    id: 53,
    status: "Done",
    title: "Learning CSS",
    description: "Implement Redux",
  },
  {
    id: 54,
    status: "Done",
    title: "Learning SQL",
    description: "Design a Database Schema",
  },
  {
    id: 55,
    status: "Todo",
    title: "Learning React",
    description: "Build responsive UI",
  },
  {
    id: 56,
    status: "In Progress",
    title: "Learning NestJS",
    description: "Implement Redux",
  },
  {
    id: 57,
    status: "In Progress",
    title: "Build a Blog",
    description: "Learn the Base of DOM",
  },
  {
    id: 58,
    status: "Todo",
    title: "Learning React",
    description: "Understand Flexbox",
  },
  {
    id: 59,
    status: "In Progress",
    title: "Learning SQL",
    description: "Understand Middleware",
  },
  {
    id: 60,
    status: "In Progress",
    title: "Learning SQL",
    description: "Handle Authentication",
  },
  {
    id: 61,
    status: "Todo",
    title: "Learning HTML",
    description: "Learn about State Management",
  },
  {
    id: 62,
    status: "In Progress",
    title: "Learning SQL",
    description: "Using DOM to create a page",
  },
  {
    id: 63,
    status: "Todo",
    title: "Learning SQL",
    description: "Implement Redux",
  },
  {
    id: 64,
    status: "Todo",
    title: "Learning TypeScript",
    description: "Implement CRUD operations",
  },
  {
    id: 65,
    status: "Todo",
    title: "Learning Vue",
    description: "Build GraphQL API",
  },
  {
    id: 66,
    status: "Todo",
    title: "Learning Angular",
    description: "Build GraphQL API",
  },
  {
    id: 67,
    status: "Done",
    title: "Learning SQL",
    description: "Learn the Base of DOM",
  },
  {
    id: 68,
    status: "Done",
    title: "Learning CSS",
    description: "Understand Flexbox",
  },
  {
    id: 69,
    status: "In Progress",
    title: "Build a Chat App",
    description: "Learn about State Management",
  },
  {
    id: 70,
    status: "Todo",
    title: "Learning HTML",
    description: "Design a Database Schema",
  },
  {
    id: 71,
    status: "Done",
    title: "Learning Angular",
    description: "Learn about State Management",
  },
  {
    id: 72,
    status: "In Progress",
    title: "Learning HTML",
    description: "Implement CRUD operations",
  },
  {
    id: 73,
    status: "Todo",
    title: "Learning Vue",
    description: "Handle Authentication",
  },
  {
    id: 74,
    status: "Todo",
    title: "Learning MongoDB",
    description: "Build responsive UI",
  },
  {
    id: 75,
    status: "Todo",
    title: "Learning SQL",
    description: "Using DOM to create a page",
  },
  {
    id: 76,
    status: "Todo",
    title: "Learning React",
    description: "Build GraphQL API",
  },
  {
    id: 77,
    status: "Todo",
    title: "Learning Node.js",
    description: "Build REST API",
  },
  {
    id: 78,
    status: "Todo",
    title: "Learning Vue",
    description: "Learn the DOM Advantage",
  },
  {
    id: 79,
    status: "Done",
    title: "Learning Angular",
    description: "Learn the Base of DOM",
  },
  {
    id: 80,
    status: "Todo",
    title: "Learning MongoDB",
    description: "Learn the Base of DOM",
  },
  {
    id: 81,
    status: "Todo",
    title: "Learning SQL",
    description: "Implement CRUD operations",
  },
  {
    id: 82,
    status: "Done",
    title: "Learning SQL",
    description: "Implement Redux",
  },
  {
    id: 83,
    status: "Done",
    title: "Practice DOM",
    description: "Learn the Base of DOM",
  },
  {
    id: 84,
    status: "Todo",
    title: "Practice DOM",
    description: "Build REST API",
  },
  {
    id: 85,
    status: "In Progress",
    title: "Build a Chat App",
    description: "Understand Middleware",
  },
  {
    id: 86,
    status: "Done",
    title: "Learning JavaScript",
    description: "Understand Middleware",
  },
  {
    id: 87,
    status: "Done",
    title: "Learning React",
    description: "Build GraphQL API",
  },
  {
    id: 88,
    status: "Done",
    title: "Learning Vue",
    description: "Learn about State Management",
  },
  {
    id: 89,
    status: "Todo",
    title: "Learning MongoDB",
    description: "Practice API calls",
  },
  {
    id: 90,
    status: "In Progress",
    title: "Practice DOM",
    description: "Build GraphQL API",
  },
  {
    id: 91,
    status: "In Progress",
    title: "Build a Portfolio",
    description: "Learn about State Management",
  },
  {
    id: 92,
    status: "Done",
    title: "Build a Chat App",
    description: "Practice API calls",
  },
  {
    id: 93,
    status: "In Progress",
    title: "Learning SQL",
    description: "Build GraphQL API",
  },
  {
    id: 94,
    status: "In Progress",
    title: "Learning NestJS",
    description: "Build REST API",
  },
  {
    id: 95,
    status: "In Progress",
    title: "Learning TypeScript",
    description: "Implement CRUD operations",
  },
  {
    id: 96,
    status: "Done",
    title: "Learning Vue",
    description: "Build REST API",
  },
  {
    id: 97,
    status: "In Progress",
    title: "Learning SQL",
    description: "Practice API calls",
  },
  {
    id: 98,
    status: "Todo",
    title: "Learning CSS",
    description: "Using DOM to create a page",
  },
  {
    id: 99,
    status: "In Progress",
    title: "Learning NestJS",
    description: "Learn the Base of DOM",
  },
  {
    id: 100,
    status: "Done",
    title: "Build a Portfolio",
    description: "Handle Authentication",
  },
];

const testClickGrandpa = () => {
  console.log("Div clicked");
};

const createTask = (description) => {
  const ele = document.getElementById("listData");
  ele.addEventListener("click", () => testClickGrandpa(), true);

  const firstNode =
    ele.firstChild.nodeType === Node.TEXT_NODE
      ? ele.firstChild.nextSibling
      : ele.firstChild;
  const newEle = document.createElement("li");
  newEle.textContent = description;
  newEle.style.cursor = "pointer";

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.textContent = "Delete";
  btnDelete.style.background = "red";
  btnDelete.style.color = "#fff";

  newEle.appendChild(btnDelete);
  firstNode.appendChild(newEle);
};

const initData = () => {
  console.time("functionExecuted");

  for (task of tmpData) {
    createTask(task.description);
  }
  eventDelegation();

  console.timeEnd("functionExecuted");
};

const appendFrag = () => {
  console.time("appendByFragment");
  const ulNode = document.getElementsByTagName("ul")[0];

  const fragment = new DocumentFragment();
  for (task of tmpData) {
    const li = document.createElement("li");
    li.textContent = task.description;
    li.addEventListener("click", () => {
      console.log("Li Clicked");
    });
    fragment.append(li);
  }

  ulNode.addEventListener("click", () => {
    console.log("ul, parent clicked");
  });
  ulNode.append(fragment);
  console.timeEnd("appendByFragment");
};

// init sample Data for the TodoList:
window.onload = function () {
  initData();
  appendFrag();
};

const createNewTask = () => {
  const ipData = document.getElementById("inputCreateTask").value;
  createTask(ipData);
};

const eventDelegation = () => {
  const element = document.getElementById("listData");

  element.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
    }
  });
};
