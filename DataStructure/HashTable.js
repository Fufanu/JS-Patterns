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
 * <p>In order to store key-value pairs in memory from the hash table  a way to take the key and turn it into an address is
 * needed, this operation is known as hashing.
 * Basically it takes a key and serializes it into a unique number for that
 * key.</p>
 * <code>
 * &emsp;hashKey("abc") =>  96354 <br>
 * &emsp;hashKey("xyz") => 119193
 * </code>
 * <p>The hashing algorithm will limit the size of key, to prevent that the key is not to big. Which means that there are a
 * limit number of addresses for an unlimited number of values.</p>
 */
class HashTable {

  /**
   * Start with an empty array and store the length of the "hashtable".
   * @constructor
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Accepts a string and outputs a (mostly) unique address that will be used in other functions of this class.
   * @param {String} key - Key to get hashed
   * @returns {number}
   * @throws {ReferenceError} Key can not be undefined!
   * @throws {TypeError} The key needs to be type of string!
   * @static
   */
  static hashKey(key) {
    if (key === null || key === undefined) {
      throw new ReferenceError("Key can not be undefined!");
    }
    if (typeof key !== 'string') {
      throw new TypeError("The key needs to be type of string!");
    }

    var hash = 0;
    for (var index = 0; index < key.length; index++) {
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  /**
   * Retrieve the value of a given key. Hash the key and get value from "memory".
   * @param {String} key - Key to retrieve value
   * @returns {*}
   * @throws {ReferenceError} Key can not be undefined!
   * @throws {TypeError} The key needs to be type of string!
   */
  get(key) {
    if (key === null || key === undefined) {
      throw new ReferenceError("Key can not be undefined!");
    }
    if (typeof key !== 'string') {
      throw new TypeError("The key needs to be type of string!");
    }

    try {
      let address = this.hashKey(key);
      return this.memory[address];
    } catch (e) {
      throw e;
    }
  }

  /**
   * Set value for key. Hash the key and set value in "memory".
   * @param {String} key - Key
   * @param {*} value - Value for given key
   * @throws {ReferenceError} Key can not be undefined!
   * @throws {TypeError} The key needs to be type of string!
   */
  set(key, value) {
    try {
      let address = this.hashKey(key);
      this.memory[address] = value;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Remove a pair of data.
   * @param {String} key - Key of pair that should be removed
   * @throws {ReferenceError} Key can not be undefined!
   * @throws {TypeError} The key needs to be type of string!
   */
  remove(key) {
    try {
      var address = this.hashKey(key);
      if (this.memory[address]) {
        delete this.memory[address];
      }
    } catch(e) {
      throw e;
    }
  }
}

module.exports = HashTable;