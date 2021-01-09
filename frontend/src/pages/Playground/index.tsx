import React from 'react';
import x from '../../assets/playground/x.png';
import h from '../../assets/playground/h.png';
import m from '../../assets/playground/m.png';
import empty from '../../assets/playground/line.png';
import q0 from '../../assets/playground/0.png';
// import q1 from '../../assets/playground/1.png';
import axios from '../../axiosconfig'
import { Row } from 'react-bootstrap';
import Composer from '../../components/Composer'
import Sidebar from '../../components/Composer/Sidebar'

const dict: { [id: string] : string; } = {'x':x,'h':h,'empty':empty};

interface IProps {
}

interface IState {
  listResult: string;
  active: string;
  n: number;
  ccimg: string[][];
  cc: string[]
}

class Playground extends React.Component <IProps,IState>{

    state = {
        listResult: '',
        active: 'empty',
        n:2,
        ccimg: [['empty'],['empty']],
        cc: Array()
    }

    render() {
        return (
            <div>
                <Sidebar/>
                <Composer/>
            </div>
        );
    }
}

export default Playground;