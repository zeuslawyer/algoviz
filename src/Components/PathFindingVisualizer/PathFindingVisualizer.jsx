import React, { Component } from 'react';

import Node from './Node/Node';
import '../../styling/App.css';

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id='mainGrid'>
        <div id='mainText'>
          <ul>
            <li>
              <div className='start'></div>Start Node
            </li>
            <li>
              <div className='target'></div>Target Node
            </li>
            <li id='bombLegend'>
              <div className='object'></div>Bomb Node
            </li>
            <li id='weightLegend'>
              <div className='borderlessWeight'></div>Weight Node
            </li>
            <li>
              <div className='unvisited'></div>Unvisited Node
            </li>
            <li>
              <div className='visited'></div>
              <div className='visitedobject'></div>Visited Nodes
            </li>
            <li>
              <div className='shortest-path'></div>Shortest-path Node
            </li>
            <li>
              <div className='wall'></div>Wall Node
            </li>
          </ul>
        </div>
        <div id='algorithmDescriptor'>Pick an algorithm and visualize it!</div>
        <table id='board' />
      </div>
    );
  }
}
