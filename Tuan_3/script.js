// @ts-check

// Const data to execute demo
const oldData = {
  type: "div",
  props: {
    id: "app",
    children: [
      { type: "h1", props: { children: ["Hello World"] } },
      { type: "p", props: { children: ["This is a paragraph"] } },
    ],
  },
};

const newData = {
  type: "div",
  props: {
    id: "app",
    children: [
      { type: "h1", props: { children: ["Hello React"] } },
      { type: "p", props: { children: ["This is an updated paragraph"] } },
      { type: "button", props: { children: ["Click Me"] } },
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

const updateElement = (parent, newNode, oldNode = null) => {
  // First case: adding child or modifying the root node:
  if (oldNode === null) {
    // Modyfing the root node:
    if (parent === null) {
    }
  }
};

/**
 * This function use to check the different between 2 VDOM
 *
 * @param { object } oldNode
 * @param { object } newNode
 */
const diffHeuristic = (oldNode, newNode, parentNode = null) => {
  console.log(isModified(oldNode, newNode));

  //Handle case that is the root node:
  if (!parentNode && isModified(oldNode, newNode)) {
    return newNode;
  }

  // Continue to the child:
};

/**
 *
 * @param {object} oldNode
 * @param {object} newNode
 * @returns
 */
const isModified = (oldNode, newNode) => {
  //Step 1: Compare the type of the element:
  if (newNode?.type !== oldNode?.type) return true;

  //Step 2: Compare the attribute:
  const { childOld, restOld } = { ...oldNode };
  const { childNew, restNew } = { ...newNode };

  if (typeof restOld !== typeof restNew) return true;
  if (restNew && restNew && Object.keys(restNew) !== Object.keys(restOld))
    return true;

  //Step 2: Compare the child
  if (childOld?.length !== childNew?.length) return true;

  return false;
};

const main = () => {
  let VDOM = diffHeuristic(oldData, newData);
  console.log(VDOM);
  return VDOM;
};

main();
