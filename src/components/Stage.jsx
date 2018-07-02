import React, {Component} from 'react';

import Matrix3D from '../engine/Matrix';
import Block from './Block';

class Stage extends Component {
    constructor(props){
        super(props);

        this.matrix = new Matrix3D();
        this.matrix.load(2,2,1);
    }

    render(){
        return(
            <div className="stage">
                {this.matrix.position.map(x => 
                    x.map(y => 
                        y.map(block => (
                            <Block 
                                key={'block'+block.x+''+block.y+''+block.z}
                                width={this.matrix.size}
                                height={this.matrix.size}
                                left={block.x}
                                top={block.y}
                                z={block.z}
                                y={block.y}
                                x={block.x}
                            />
                        ))
                    )
                )}
            </div>
        );
    }
}

export default Stage;