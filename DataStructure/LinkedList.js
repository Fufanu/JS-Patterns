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
 * <p>Linked lists are used to implement other data structures because of its ability to efficiently add items
 * to the start, middle, and end.</p>
 * <p> A linked list is similar to a graph. You have nodes that point to other nodes. They look sorta like this:<br>
 *     1 -> 2 -> 3 -> 4 -> 5<br>
 * Visualizing them as a JSON-like structure looks like this:<br>
 * <code>
 * {<br>
 * &emsp;value: 1,<br>
 * &emsp;next: {<br>
 * &emsp;&emsp;value: 2,<br>
 * &emsp;&emsp;next: {<br>
 * &emsp;&emsp;&emsp;value: 3,<br>
 * &emsp;&emsp;&emsp;next: {...}<br>
 * &emsp;&emsp;}<br>
 * &emsp;}<br>
 * }
 * </code></p>
 */
class LinkedList {

  /**
   * A linked list has a single node that starts off the entire chain. This is known as the "head" of the linked
   * list
   * Note that we to store the length separately because the "memory" doesn't have a length that can be read.
   * @constructor
   */
  constructor() {
    this._head = null;
    this._length = 0;
  }

  /**
   * Retrieve a value in a given position.
   * This works differently than normal lists as we can't just jump to the correct position. Instead we need to
   * move through the individual nodes.
   * @param {Number} position - Position of element in List
   * @returns {null|*|{value: *, next: null}}
   */
  get(position) {
    // Start with the head of the list.
    var current = this._head;

    // Slide through all of the items using node.next until reaching the specified position.
    for (var index = 0; index < position; index++) {
      current = current.next;
    }

    // Return found node
    return current;
  }

  /**
   * Add nodes to the specified position
   * @param {*} value - Value that should be added to the list
   * @param {Number} position - Postion where the value should be added
   */
  add(value, position) {
    // Create a node to hold the value.
    var node = {
      value : value,
      next  : null
    };

    // Special case for nodes being inserted at the head.
    // Set the "next" field to the current head and then replace it with the new node.
    if (position === 0) {
      node.next = this._head;
      this._head = node;

      // If adding a node in any other position we need to splice it in between the current node and the previous node.
    } else {
      // Find the previous node and the current node.
      let prev = this.get(position - 1);
      let current = prev.next;
      // Insert the new node in between them by setting its "next" field to the current node and updating
      // the previous node's "next" field to the new one.
      node.next = current;
      prev.next = node;
    }

    // Increment the length.
    this._length++;
  }

  /**
   * Look up a node by its position and splice it out of the chain.
   * @param {Number} position - Position of node that should be spliced out
   */
  remove(position) {
    // Removing the first node simply need set the head to the next node in the chain
    if (position === 0) {
      this._head = this._head.next;

      // Any other position look up the previous node and set it to the node after the current position.
    } else {
      let prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // Decrement the length.
    this._length--;
  }
}

module.exports = LinkedList;