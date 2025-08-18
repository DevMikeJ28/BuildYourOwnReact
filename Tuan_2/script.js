/**
 * Week 2 – Virtual DOM Implementation
 * -----------------------------------
 * Mục tiêu: Tạo hàm createElement và render để mô phỏng cách React hoạt động cơ bản.
 */

/**
 * Tạo Virtual DOM node
 * @param {string|function} type - Loại element (vd: "div", "h1")
 * @param {object|null} props - Thuộc tính của element
 * @param  {...any} children - Danh sách children (text hoặc Virtual DOM khác)
 * @returns Virtual DOM object
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

/**
 * Tạo Virtual DOM node cho text
 * @param {string|number} text
 */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

/**
 * Render Virtual DOM thành DOM thật
 * @param {object} vdom - Virtual DOM object
 * @param {HTMLElement} container - DOM node sẽ mount vào
 */
function render(vdom, container) {
  const dom =
    vdom.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(vdom.type);

  // Gán props (trừ children)
  for (const prop in vdom.props) {
    if (prop !== "children") {
      dom[prop] = vdom.props[prop];
    }
  }

  // Render children
  vdom.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

/** ------------------------------
 *  Demo sử dụng Virtual DOM
 * ------------------------------- */
const vdom = createElement(
  "div",
  { id: "root" },
  createElement("h1", null, "Hello World"),
  createElement("p", null, "This is a paragraph"),
  createElement(
    "ul",
    null,
    createElement("li", null, "Item 1"),
    createElement("li", null, "Item 2")
  )
);

// Render vào #app
const root = document.getElementById("app");
render(vdom, root);
