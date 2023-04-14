"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = insert(this.rootNode, data);

    function insert(node, value) {
      if (node === null) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        node.left = insert(node.left, data);
      } else {
        node.right = insert(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    function findNode(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }

    return findNode(this.rootNode, data);
  }
}

const tree1 = new BinarySearchTree();

tree1.add(30);
tree1.add(45);
tree1.add(57);
tree1.add(35);
tree1.add(13);
tree1.add(36);
tree1.add(17);
tree1.add(78);
tree1.add(7);
tree1.add(14);

console.log(tree1.has(30));

console.log("\n\nFINAL TREE:\n", tree1);

// tree1.has(10);
