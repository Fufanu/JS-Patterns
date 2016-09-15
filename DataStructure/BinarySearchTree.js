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
 * <p>Organize data and with have the ability to efficiently access, search, insert and delete values while
 * keeping them in a sorted order. Binary search trees are similar to linked lists in the sense that it is only
 * necessary to update the immediately surrounding items when adding or removing a value.</p>
 * <p>Each node can have two children:</p>
 * <ul>
 *  <li> Left: Less than parent node's value
 *  <li> Right: Greater than parent node's value
 * </ul>
 * <p><b>Note:</b> All values must be unique in the tree.<p>
 *
 * <p>Example:<br>
 * A sequence of numbers:<br>
 * 1  2  3  4  5  6  7<br>
 * And turning it into a tree starting from the center.<br>
 * <img src="../img/btree1.jpg" /><br>
 * This makes the traversal to find a value very efficient. Say we're trying to find the number 5 in our tree:<br>
 * <img src="../img/btree2.jpg" /><br>
 * Only had to do 3 checks to reach the number 5.</p>
 */
class BinarySearchTree {

  /**
   * The tree has to start with a single parent, the "root" of the tree.
   * @constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * In order to test if the value exists in the tree, we first need to search
   * through the tree.
   */

  /**
   * Search through the tree it it contains the value.
   * @param {*} value - Value mathing to node in the tree
   * @returns {boolean}
   */
  contains(value) {
    // Start at the root.
    var current = this.root;

    // Keep running as long as their is another node.
    // If a `left` or `right` node is `null` the loop ends.
    while (current) {

      // Move to the right if the value is greater than the current.
      if (value > current.value) {
        current = current.right;
      // Move to the left if the value is less than the current.
      } else if (value < current.value) {
        current = current.left;
      // Otherwise it must be equal and return true.
      } else {
        return true;
      }
    }
    // Return false, if nothing matched.
    return false;
  }

  /**
   * Add a new item to the tree. Start traversal through current nodes, bouncing between left and right nodes
   * depending on them being less than or greater than the value. Add the value if a node is 'null'.
   * @param value
   */
  add(value) {
    // Setup node.
    var node = {
      value: value,
      left: null,
      right: null
    };

    // Simple add node if there is no root.
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Start at the root.
    var current = this.root;

    // Loop until the item has been added or discovered it already exists in the tree.
    while (true) {

      // Move to the right if the value is greater than the current.
      if (value > current.value) {

        // If `right` does not exist, set it to the node, and stop traversing.
        if (!current.right) {
          current.right = node;
          break;
        }

        // Otherwise move on to the right node.
        current = current.right;

      // Move to the left if the value is less than the current.
      } else if (value < current.value) {

        // If `left` does not exist, set it to the node, and stop traversing.
        if (!current.left) {
          current.left = node;
          break;
        }

        // Otherwise move on to the left node.
        current = current.left;

      // Don't do anything, if the number isn't less than or greater, then it must be the same.
      } else {
        break;
      }
    }
  }
}

module.exports = BinarySearchTree;