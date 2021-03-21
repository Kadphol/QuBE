import React from 'react';
import Composer from '@components/Composer'
import Sidebar from '@components/Composer/Sidebar'
import './Playground.scoped.css'

class Playground extends React.Component {

    render() {
        return (
            <div className="flex">
                <Sidebar/>
                <Composer column={17} n={2} quiz={false} answerCheck={()=>{}}/>
            </div>
        );
    }
}

export default Playground;