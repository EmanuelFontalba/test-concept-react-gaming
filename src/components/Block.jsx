import React, {Component} from 'react';

class Block extends Component {
    constructor(props){
        super(props);
    }

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    render() {
        const { width, height, top, left, z, x, y} = this.props;
        const style = {
            width,
            height,
            top,
            left,
            //background: this.getRandomColor(),
            zIndex: z
        };

        return(
            <div className="block" style={style}>
                <img src="/textures/test-block.png" />
                <span>x: {x}<br/>
                y: {y}<br/>
                z: {z}</span>
            </div>
        );
    }
}

export default Block;