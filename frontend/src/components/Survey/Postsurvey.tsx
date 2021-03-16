import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import axios from '@config/axiosconfig';
import ENDPOINT from '@config/endpoint';

export default function PreSurvey(props) {

    const color = '#A29BFE'

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

    const Button3 = {
        ...Button,
        textDecoration: 'none',
        top: '170px',
        left: '205px',
        width: '200px',
        height: '50px',
        background: '#A29BFE',
        color: 'white',
        fontSize: '30px',
        lineHeight: '50px',
    } as React.CSSProperties;

    const thanks = {
        marginTop:'100px',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontSize: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        paddingLeft: '40px'
    } as React.CSSProperties;

    const saveSurvey = () => {
        if (satisfy != 0) {
        axios.put(`${ENDPOINT.URL}/updatePostSurvey`, { satisfy: satisfy, comment: comment })
        changeDone(true)
        }
    }

    const handleComment = (event) => {
        changeComment(event.target.value)
    }

    const [satisfy, changeSatisfy] = useState(0)
    const [comment, changeComment] = useState(null)
    const [done, changeDone] = useState(false)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="text-center">
                <div style={main}>
                    {!done &&
                        <Form>
                            <div className="mb-3" style={{ marginTop: '30px' }}>
                                <Form.Label>เธอชอบ QuBE มั้ย?</Form.Label>
                                <br />
                                <Form.Check inline onChange={() => changeSatisfy(1)} label="ไม่ชอบเลย" type='radio' name="formHorizontalRadios2" />
                                <Form.Check inline onChange={() => changeSatisfy(2)} label="ไม่ค่อยนะ" type='radio' name="formHorizontalRadios2" />
                                <Form.Check inline onChange={() => changeSatisfy(3)} label="เฉยๆ" type='radio' name="formHorizontalRadios2" />
                                <Form.Check inline onChange={() => changeSatisfy(4)} label="ชอบนะ" type='radio' name="formHorizontalRadios2" />
                                <Form.Check inline onChange={() => changeSatisfy(5)} label="ชอบมากเลยล่ะ" type='radio' name="formHorizontalRadios2" />
                            </div>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>มีอะไรอยากจะบอกพวกเรามั้ย?</Form.Label>
                                <textarea onChange={handleComment} rows={3} cols={50} />
                            </Form.Group>
                            <div style={Button1} onClick={props.onHide}>ไว้ทีหลังนะ</div>
                            <div style={Button2} onClick={() => saveSurvey()}>ส่งคำตอบ</div>
                        </Form>
                    }
                    {done &&
                        <React.Fragment>
                            <label style={thanks}>ขอบคุณที่ให้ความร่วมมือนะ!</label>
                            <div style={Button3} onClick={props.onHide}>เสร็จสิ้น</div>
                        </React.Fragment>
                    }
                </div>
            </Modal.Body>
        </Modal>
    );

}