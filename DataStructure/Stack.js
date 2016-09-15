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
 * <p>A stack is similar to lists in that they have an order, but they are limited to only pushing and popping values at
 * the end of the stack.</p>
 */
class Stack {

  /**
   * Start with an empty array and store the length of the "list".
   * Note that we to store the length separately because the "memory" doesn't have a length that can be read.
   * @constructor
   */
  constructor() {
    this._memory = [];
    this._length = 0;
  }

  /**
   * Add an item to the end of the list.
   * Adding a value after the end of our list. Just add the value and increment the length.
   * @param {*} value - Value that should be added to the list
   */
  push(value) {
    this._memory[this._length] = value;
    this._length++;
  }

  /**
   * And pop to remove items from the top of the stack.
   */

  /**
   * Pop items off of the end of our list.
   * Similar to push all we need to do is remove the value at the address at
   * the end of our list. Then just decrement length.
   * @returns {*}
   */
  pop() {
    // Direct return if the list is empty.
    if (this._length === 0) return;

    // Get the last value, remove it, and return it.
    this._length--;
    return this._memory.pop();
  }

  /**
   * Retrieve the item at the top of the stack without removing it from the stack
   * @returns {*}
   */
  peek() {
    // Direct return if the list is empty.
    if (this._length === 0) return;

    // Return the last item in "items" without removing it.
    return this._memory[this._length - 1];
  }
}

module.exports = Stack;