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
 * <p>Queue which is complimentary to stacks. The difference is that this time you remove items from the start of the queue
 * rather than the end. Removing the oldest items rather than the most recent.</p>
 */
class Queue {

  /**
   * Start with an empty array and store the length of the "queue".
   * Note that we to store the length separately because the "memory" doesn't have a length that can be read.
   * @constructor
   */
  constructor() {
    this._memory = [];
    this._length = 0;
  }
  /**
   * Push values to the end of the list.
   * @param {*} value - Value that should be added to the list
   */
  enqueue(value) {
    this._length++;
    this._memory.push(value);
  }

  /**
   * Instead of removing the item from the end of the list, we're going to remove it from the start.
   * @returns {*}
   */
  dequeue() {
    // Direct return if the list is empty.
    if (this._length === 0) { return; }

    // Shift the first item off the start of the list and return the value.
    this._length--;
    return this._memory.shift();
  }

  /**
   * Getting the next value without removing it from the stack.
   * @returns {*}
   */
  peek() {
    return this._memory[0];
  }
}

module.exports = Queue;