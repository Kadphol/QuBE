import React from 'react';
// import './App.css';

import Draggable,{DraggableEvent,DraggableData} from 'react-draggable';

class Drag extends React.Component {

  state = {
    deltaXyPos: {
      x: 0, 
      y: 0
    }
  };

  checkPosition = (e:DraggableEvent) => {
      let a = e.target as Element
      console.log(a.getBoundingClientRect().x,a.getBoundingClientRect().y)
      
  };

  render() {

    const { deltaXyPos } = this.state;

    return (
      <Draggable
        onStop={this.checkPosition}
      >
        <div className="drag-wrapper">
          <p>Drag position:</p>
          <div>
            <strong>x: {deltaXyPos.x.toFixed(0)}, </strong>
            <strong>y: {deltaXyPos.y.toFixed(0)}</strong>
          </div>
        </div>
        
      </Draggable>
    );
  }
}

export default Drag;