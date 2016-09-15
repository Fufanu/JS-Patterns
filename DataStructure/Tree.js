/**
 * Created: 02.09.2016
 * Author: Philip Hermes
 *
 * Copyright: 2016 by Hytera Mobilfunk GmbH, All Rights Reserved.
 *
 * NOTICE:
 * THIS MATERIAL IS CONSIDERED A TRADE SECRET BY HYTERA.
 * UNAUTHORIZED ACCESS, USE, REPRODUCTION OR DISTRIBUTION IS PROHIBITED.
 */
"use strict";

/**
 * @class
 * @memberOf DataStructure
 * @classdesc
 * <p>Simple tree structure. It doesn't have any special rules to it and looks something like this:<br>
 * <code>
 * Tree {<br>
 * &emsp;root: {<br>
 * &emsp;&emsp;value: 1,<br>
 * &emsp;&emsp;children: [{<br>
 * &emsp;&emsp;&emsp;value: 2,<br>
 * &emsp;&emsp;&emsp;children: [...]<br>
 * &emsp;&emsp;},{<br>
 * &emsp;&emsp;&emsp;value: 3,<br>
 * &emsp;&emsp;&emsp;children: [...]<br>
 * &emsp;&emsp;}]<br>
 * &emsp;}<br>
 * }<br>
 * </code></p>
 */
class Tree {

  /**
   * The tree has to start with a single parent, the "root" of the tree.
   * @constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * Traverse the tree and call a function on each node in the tree.
   * @param callback
   */
  traverse(callback) {
    // A walk function that executed recursively on every node in the tree.
    function walk(node) {
      // First call the callback on the node.
      callback(node);
      // Then recursively call the walk function on all of its children.
      node.children.forEach(walk);
    }
    // Kick off at root node.
    walk(this.root);
  }

  /**
   * Add a node to the tree and define the parent node
   * @param {*} value - Value of new node
   * @param {*} parentValue - Parent node
   */
  add(value, parentValue) {
    var newNode = {
      value    : value,
      children : []
    };

    // If there is no root, set it to the new node.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Otherwise traverse the entire tree and find a node with a matching value and add the new node to its children.
    this.traverse(function (node) {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}

module.exports = Tree;