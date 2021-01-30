import React from 'react';
import Composer from '../../components/Composer'
import Sidebar from '../../components/Composer/Sidebar'
import './Playground.scoped.css'

class Playground extends React.Component {

    render() {
        return (
            <div className="flex">
                <Sidebar/>
                <Composer column={13} quiz={false} answerCheck={()=>{}}/>
            </div>
        );
    }
}

export default Playground;