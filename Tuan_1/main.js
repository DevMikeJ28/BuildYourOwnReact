const tmpData = [
  {
    id: 1,
    status: "Todo",
    title: "Learning HTML",
    description: "Learn the Base of DOM",
  },
  {
    id: 2,
    status: "Todo",
    title: "Learning HTML",
    description: "Learn the DOM Advantage",
  },
  {
    id: 3,
    status: "Todo",
    title: "Practice DOM",
    description: "Using DOM to create a page",
  },
];

const createTask = (description) => {
  const ele = document.getElementById("listData");
  const firstNode =
    ele.firstChild.nodeType === Node.TEXT_NODE
      ? ele.firstChild.nextSibling
      : ele.firstChild;
  const newEle = document.createElement("li");
  newEle.textContent = description;
  newEle.style.cursor = 'pointer';  

  const btnDelete = document.createElement("button");
  btnDelete.type = "button";
  btnDelete.textContent = "Delete";
  btnDelete.style.background = "red";
  btnDelete.style.color = "#fff";
  btnDelete.addEventListener("click", () => btnDelete.parentElement.remove());

  newEle.appendChild(btnDelete);
  firstNode.appendChild(newEle);
};

const initData = () => {
  for (task of tmpData) {
    createTask(task.description);
  }
};

// init sample Data for the TodoList:
window.onload = function () {
  initData();
};

const createNewTask = () => {
  const ipData = document.getElementById("inputCreateTask").value;
  createTask(ipData);
};

