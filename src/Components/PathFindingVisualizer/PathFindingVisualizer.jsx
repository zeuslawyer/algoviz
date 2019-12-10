import React, { Component } from 'react';

import Node from './Node/Node';
import '../../styling/App.css';

export default class PathFindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: []
    };
  }

  componentDidMount() {
    // create table with 20 rows and 50 cols
    let table = generateTable(20, 50);
    this.setState({ grid: table });
  }

  render() {
    return (
      <div className='grid' style={{ margin: '100px 0 0' }}>
        {this.state.grid.map((row, rIdx) => {
          return (
            <div className='table-row' key={rIdx}>
              {row.map((col, cIdx) => (
                <Node />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

/**
 *
 * @param {number} rows - rows
 * @param {number} cols - columns
 */
function generateTable(rows, cols) {
  let table = [];
  for (let row = 0; row < rows; row++) {
    let currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(col);
    }
    table.push(currentRow);
  }

  return table;
}
