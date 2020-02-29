import React, { Component } from 'react';

class Square extends React.Component {
    render() {
        // Here, change these from buttons to some other type of element?
        return (
            <button className="square" id={this.props.value}>

            </button>
        );
    }
}

class Table extends React.Component {
    drawSquare(id) {
        return <Square key={id} value={id} />
    }

    // Currently, this is a bit of a half-measure, but improvements will come in time
    render() {
        // These properties will determine the size of the grid table drawn
        const x = 20;
        const y = 20;

        // rows is an array of the rows of the table to be drawn
        let rows = [];
        for (let i = 0; i < y; i++) {
            let rowID = `row${i}`;
            // cells is an array of the actual square buttons to be drawn to the screen
            let cells = [];
            for (let j = 0; j < x; j++) {
                let cellID = `cell${i}-${j}`;

                // here, we push each square into the row of cells
                cells.push(this.drawSquare(cellID));
            }

            // here we establish the render for the table rows and the number of squares to draw
        rows.push(<div key={i} id={rowID}>{cells}</div>);
        }
        return (
            <div className="tabletop">
                {rows}
            </div>
        );
    }
}

export default Table;