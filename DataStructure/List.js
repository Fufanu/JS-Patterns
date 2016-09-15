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
 * <p>List pattern as representation of an ordered sequence of values where the same value may appear
 * many times. Because Lists have an order it is possible to insert elements at the start, middle or at
 * the end.</p>
 * <ul>
 *   <li> Push    - Add value to the end</li>
 *   <li> Pop     - Remove value from the end</li>
 *   <li> Unshift - Add value to the start</li>
 *   <li> Shift   - Remove value from the start</li>
 * </ul>
 */
class List {

  //TODO Add functions to add at the middle
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
   * Getter to retrieve list elements.
   * @param {Number} position - Position of element in List
   * @returns {null|*}
   */
  get(position) {
    return this._memory[position];
  }

  /**
   * Add and item to the end of the list.
   * Adding a value after the end of our list. Just add the value and increment the length.
   * @param {*} value - Value that should be added to the list
   */
  push(value) {
    this._memory[this._length] = value;
    this._length++;
  }

  /**
   * Pop items off of the end of our list.
   * Similar to push all we need to do is remove the value at the address at
   * the end of our list. Then just decrement length.
   * @returns {*}
   */
  pop() {
    // Direct return if the list is empty.
    if (this._length === 0) { return; }

    // Get the last value, remove it, and return it.
    let lastAddress = this._length - 1;
    let value = this._memory[lastAddress];
    delete this._memory[lastAddress];
    this._length--;
    return value;
  }

  /**
   * In order to add a new item at the beginning of the list, we need to make
   * room for the value at the start by sliding all of the values over by one.
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * In order to slide all of the items over we need to iterate over each one
   * moving the prev value over.
   * @param {*} value
   */
  unshift(value) {
    // Iterate through each item...
    for (var address = 0; address < this._length; address++) {
      // replacing the "current" value with the "previous" value and storing the
      // "current" value for the next iteration.
      let current = this._memory[address];
      this._memory[address] = value;
      value = current;
    }

    // Add the last item in a new position at the end of the list.
    this._memory[this._length] = value;
    this._length++;
  }

  /**
   * Shift function to move in the opposite direction.
   * Delete the first value and slide through every single item in the ist to move it down one address.
   *
   *     [x, a, b, c, d, e]
   *         1  2  3  4  5
   *      0  1  2  3  4
   *     [a, b, c, d, e]
   * @returns {*}
   */
  shift() {
    // Direct return if the list is empty.
    if (this._length === 0) { return; }

    let value = this._memory[0];

    // Iterate through each item...
    for (var address = 0; address < this._length; address++) {
      // and replace them with the next item in the list.
      this._memory[address] = this._memory[address + 1];
    }

    // Delete the last item since it is now in the previous address.
    delete this._memory[this._length - 1];
    this._length--;

    return value;
  }
}

module.exports = List;
