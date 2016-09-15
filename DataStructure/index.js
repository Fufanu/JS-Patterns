/**
 * Created: 08.09.2016
 * Author: Philip Hermes
 *
 * Copyright: 2016 by Hytera Mobilfunk GmbH, All Rights Reserved.
 *
 * NOTICE:
 * THIS MATERIAL IS CONSIDERED A TRADE SECRET BY HYTERA.
 * UNAUTHORIZED ACCESS, USE, REPRODUCTION OR DISTRIBUTION IS PROHIBITED.
 */
"use strict";

var BinaryTree = require('./BinarySearchTree');
var Graph = require('./Graph');
var HashTable = require('./HashTable');
var LinkedList = require('./LinkedList');
var List = require('./List');
var Queue = require('./Queue');
var Stack = require('./Stack');
var Tree = require('./Tree');

/**
 * <p>Templates for common data structures</p>
 * @namespace
 */
var DataStructure = {
  BinaryTree,
  Graph,
  HashTable,
  LinkedList,
  List,
  Queue,
  Stack,
  Tree
};
module.exports = DataStructure;