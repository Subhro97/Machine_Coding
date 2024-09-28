function getPathFromChildToParent(parent, child) {
  let currentNode = child;
  const path = [];

  while (currentNode !== parent) {
    const parentElm = currentNode.parentElement;
    const childernArray = Array.from(parentElm.children);
    path.push(childernArray.indexOf(currentNode));
    currentNode = parentElm;
  }

  return path;
}

function getValueFromPath(parent, path) {
  let currentNode = parent;

  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }

  return currentNode.innerText;
}

const rootA = document.getElementById("rootA");
const nodeA = document.getElementById("nodeA");
const rootB = document.getElementById("rootB");

const path = getPathFromChildToParent(rootA, nodeA);

console.log(getValueFromPath(rootB, path));
