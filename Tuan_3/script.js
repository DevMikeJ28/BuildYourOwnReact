// @ts-check

// Const data to execute demo
const oldData = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "h1", props: { children: ["Hello World"] } },
      { type: "p", props: { children: ["This is a paragraph"] } },
    ],
  },
};

const newData = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "h1", props: { children: ["Hello React"] } }, // text thay đổi
      { type: "p", props: { children: ["This is an updated paragraph"] } }, // text thay đổi
      { type: "button", props: { children: ["Click Me"] } }, // thêm node mới
    ],
  },
};

/**
 * This function use to modify the child node, 
 * if that parent node does not has child, the old child will be null
 * 
 * @param { object } parent
 * @param { object } newNode
 * @param { object } oldNode
 */

const updateElement = (parent, newNode, oldNode = null) => {};

/**
 * This function use to check the different between 2 VDOM
 * 
 * @param { object } oldNode
 * @param { object } newNode
 */
const diffHeuristic = (oldNode, newNode) => {
  let isNeedToUpdate = false;

  //step 1: Compare type of node:
  if (oldNode?.type !== newNode?.type) return true;


  


  return isNeedToUpdate
};


const compare = (newNode, oldNode) {

  if(oldNode?.type !== newNode?.type)

}

const main = () => {
  diffHeuristic(oldData, newData);
};

main();
