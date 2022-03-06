import React, { Component } from 'react';
import Box from "./Box";
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 20,
        allColors: ["purple", "magenta", "black", "pink", "blue", "red",
         "yellow", "brown", "orange", "green", "grey","gold",
        "skyblue", "tomato", "navy", "teal", "slateblue", "yellowgreen"]
    }
    render() {
            const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors}/>
            ));
            return <div className="BoxContainer">{boxes}</div>
    }
}

export default BoxContainer;