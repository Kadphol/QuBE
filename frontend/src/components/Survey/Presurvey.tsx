import React, {useState} from 'react';
import { Modal, Form } from 'react-bootstrap';
import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint';

export default function PreSurvey(props) {

    const color = 'black'

    const main = {
        position: 'relative',
        width: 'auto',
        height: '320px',
        border: `1px solid ${color}`,
        borderRadius: '20px',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontSize: '17px',
        textAlign: 'left',
        paddingLeft: '50px'
    } as React.CSSProperties;

    const Button = {
        position: 'absolute',
        width: '150px',
        height: '40px',
        top: '250px',
        borderRadius: '50px',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '40px',
        cursor: 'pointer',
        textAlign: 'center',
        paddingLeft: '0'
    }

    const Button1 = {
        ...Button,
        textDecoration: 'none',
        left: '120px',
        background: '#F5EBED',
        color: color
    } as React.CSSProperties;

    const Button2 = {
        ...Button,
        textDecoration: 'none',
        left: '340px',
        background: color,
        color: 'white'
    } as React.CSSProperties;

    const saveSurvey = () => {
        axios.put(`${ENDPOINT.URL}/updatePreSurvey`, { degree: degree, type: type})
        props.onHide()
    }

    const [degree,changeDegree] = useState(0)
    const [type,changeType] = useState(false)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="text-center">
                <div style={main}>
                    <Form>
                            <div className="mb-3" style={{marginTop:'30px'}}>
                                <Form.Label>เธอกำลังเรียนอยู่ระดับชั้นอะไร?</Form.Label>
                                <br/>
                                <Form.Check inline onChange={()=>changeDegree(1)} label="มัธยมศึกษาตอนต้น" type='radio' name="formHorizontalRadios" />
                                <Form.Check inline onChange={()=>changeDegree(2)} label="มัธยมศึกษาตอนปลาย" type='radio' name="formHorizontalRadios" />
                                <br/>
                                <Form.Check inline onChange={()=>changeDegree(3)} label="อุดมศึกษา(ป.ตรี)." type='radio' name="formHorizontalRadios" />
                                <Form.Check inline onChange={()=>changeDegree(4)} label="อุดมศึกษา(ป.โทหรือสูงกว่า)." type='radio' name="formHorizontalRadios" />
                                <br/>
                                <Form.Check inline onChange={()=>changeDegree(5)} label="ปวช." type='radio' name="formHorizontalRadios" />
                                <Form.Check inline onChange={()=>changeDegree(6)} label="ปวส." type='radio' name="formHorizontalRadios" />
                                <Form.Check inline onChange={()=>changeDegree(7)} label="อื่นๆ" type='radio' name="formHorizontalRadios" />
                            </div>
                            <div className="mb-3">
                                <Form.Label>เธอเคยผ่านการเรียนหรือศึกษาเนื้อหาควอนตัมคอมพิวเตอร์มาก่อนหรือไม่?</Form.Label>
                                <br/>
                                <Form.Check inline onChange={()=>changeType(true)} label="เคย" type='radio' name="formHorizontalRadios2" />
                                <Form.Check inline onChange={()=>changeType(false)} label="ไม่เคย" type='radio' name="formHorizontalRadios2" />
                            </div>
                            <div style={Button1} onClick={props.onHide}>ไว้ทีหลังนะ</div>
                            <div style={Button2} onClick={()=>saveSurvey()}>ส่งคำตอบ</div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );

}