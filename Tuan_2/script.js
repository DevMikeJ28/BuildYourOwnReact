const createTextElement = (child) => {
  const textElement = document.createElement();

  try {
    textElement.textContent = child.props.text ?? "";
    textElement.className = child.props.className ?? "";
    textElement.style = child.props.style ?? "";
  } catch (error) {
    console.log(`Error create new Text Element:: ${error}`);
  }

  return textElement;
};

const createElement = ({ type, props, childrens }) => {
  const newElement = document.createElement(type);

  try {
    newElement.textContent = props.text ?? "";
    newElement.className = props.className ?? "";
    newElement.style = props.style ?? "";
    props.key ? (newElement.id = props.key) : null;

    for (child of childrens) {
      const childElement = child.type.length
        ? createElement(child)
        : createTextElement(child);

      newElement.appendChild(childElement);
    }

    return newElement;
  } catch (error) {
    console.log(`Error create new Element:: ${error}`);
  }

  return newElement;
};

const main = () => {
  const nodeDemo = {
    type: "h1",
    props: {
      text: "Hello World!",
      style: "font-size: 20px; color: aqua",
      className: "class='demoClass'",
    },
    childrens: [
      {
        type: "span",
        props: {
          text: "Day la node con",
          style: "font-size: 16px; color: aqua",
          className: "class='demoClass'",
        },
        childrens: [
          {
            type: "ul",
            props: {
              text: "",
              style: "",
              className: "class='ulClass'",
            },
            childrens: [
              {
                type: "li",
                props: {
                  key: "list 1",
                  text: "list 1",
                  style: "font-size: 16px; color: red",
                  className: "class='liClass'",
                },
                childrens: [],
              },
              {
                type: "li",
                props: {
                  text: "list 2",
                  key: "list 2",
                  style: "font-size: 16px; color: red",
                  className: "class='liClass'",
                },
                childrens: [],
              },
              {
                type: "li",
                props: {
                  text: "list 3",
                  key: "list 3",
                  style: "font-size: 16px; color: red",
                  className: "class='liClass'",
                },
                childrens: [],
              },
              {
                type: "li",
                props: {
                  text: "list 4",
                  key: "list 4",
                  style: "font-size: 16px; color: red",
                  className: "class='liClass'",
                },
                childrens: [],
              },
              {
                type: "li",
                props: {
                  text: "list 5",
                  key: "list 5",
                  style: "font-size: 16px; color: red",
                  className: "class='liClass'",
                },
                childrens: [],
              },
            ],
          },
        ],
      },
    ],
  };

  const app = document.getElementById("app");
  try {
    const newNode = createElement(nodeDemo);
    app.appendChild(newNode);
  } catch (error) {
    console.error(`Error:: ${error}`);
  }
};

main();
