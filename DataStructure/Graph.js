/**
 * Created: 02.09.2016
 * Author: hermes_p
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
 * <p>A graph can hold multiple nodes with multiple lines connected to each other</p>
 * <img src="../img/graph.jpg" />
 * <p>Multiple "nodes" (A, B, C, D, ...) that are connected with lines.
 * These nodes are going to look like this:<br>
 * <code>
 * Node {<br>
 * &emsp;value: ...,<br>
 * &emsp;lines: [(Node), (Node), ...]<br>
 * }<br>
 * </code>
 * The entire graph will look like this:<br>
 * <code>
 * Graph {<br>
 * &emsp;nodes: [<br>
 * &emsp;&emsp;Node {...},<br>
 * &emsp;&emsp;Node {...},<br>
 * &emsp;&emsp;...<br>
 * &emsp;]<br>
 * }<br>
 * </code>
 *
 * <p>Usage example:</p>
 * <code>
 *     var graph = new Graph();<br>
 *     graph.addNode(1);<br>
 *     graph.addNode(2);<br>
 *     graph.addLine(1, 2);<br>
 * </code>
 */
class Graph {

  /**
   * Start with an empty array to store all nodes
   * @constructor
   */
  constructor() {
    this._nodes = [];
  }

  /**
   * We can start to add values to our graph by creating nodes without any
   * lines.
   */

  /**
   * Add a node without any lines
   * @param {*} value - Value for new node
   */
  addNode(value) {
    this._nodes.push({
      value : value,
      lines : []
    });
  }

  /**
   * Next we need to be able to lookup nodes in the graph. Most of the time
   * you'd have another data structure on top of a graph in order to make
   * searching faster.
   *
   * But for our case we're simply going to search through all of nodes to find
   * the one with the matching value. This is a slower option, but it works for
   * now.
   */

  /**
   * Lookup nodes in the graph. Simply search through all nodes to find one with matching value.
   * @param {*} value - Value of node that should match
   * @returns {*}
   */
  find(value) {
    return this._nodes.find(function (node) {
      return node.value === value;
    });
  }

  /**
   * Next we can connect two nodes by making a "line" from one to the other.
   */

  /**
   * Connect two nodes by making a "line" form one to the other.
   * @param {*} startValue - Start node of line
   * @param {*} endValue - End node of line
   * @throws {Error} Both nodes need to exist
   */
  addLine(startValue, endValue) {
    // Find the nodes for each value.
    var startNode = this.find(startValue);
    var endNode = this.find(endValue);

    if (!startNode || !endNode) {
      throw new Error("Both nodes need to exist");
    }

    // Add a reference to the endNode from the startNode.
    startNode.lines.push(endNode);
  }
}

module.exports = Graph;