import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import './Sidebar.scoped.css';
import algo1 from '@assets/playground/algo1.png';
import algo2 from '@assets/playground/algo2.png';
import algo3 from '@assets/playground/algo3.png';
import algo4 from '@assets/playground/algo4.png';
import u1 from '@assets/playground/u1.png';
import u2 from '@assets/playground/u2.png';
import e from '@assets/playground/e.png';
import x from '@assets/playground/x_Inuse.png';
import h from '@assets/playground/h_Inuse.png';
import algo3u1 from '@assets/playground/algo3-u1.png';
import algo3u2 from '@assets/playground/algo3-u2.png';
import algo4u1 from '@assets/playground/algo4-u1.png';
import algo4u2 from '@assets/playground/algo4-u2.png';


const sfxClick = require('@assets/sound/sfx_click.mp3').default;

class Sidebar extends React.Component {

    state = {
        onShow: null,
        active: -1
    }

    click = new Audio(sfxClick)

    toggleShow = (id:number) => {
        let menu = document.getElementById("Menu")!
        menu.style['width'] = this.state.onShow? '25vw':'68vw'

        this.setState({onShow:!this.state.onShow, active:id})

    }

    render() {
        return (
            <div className="Menu" id="Menu">
                <Accordion defaultActiveKey="0">
                    {this.state.onShow && this.state.active!== 0 ? null: <Card> 
                        <Card.Header >
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1: Bell Pair
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <img className="sampleCircuit" src={algo1} alt="algo1 sample"/>
                                { this.state.onShow &&
                                <React.Fragment>
                                <p className="detail">
                                Bell pair คือ รูปแบบการต่อวงจรให้คิวบิตนั้นเกิดการพัวพันกันรูปแบบหนึ่ง โดยจะอยู่ในสถานะที่เรียกว่า Bell State 
                                โดยวิธีการคือต่อ Hadamard gate เพื่อให้คิวบิตหนึ่งมีสถานะ Superposition และจากนั้นต่อ C-NOT gate กับอีกหนึ่งคิวบิต
                                โดยให้คิวบิตตัวแรกนั้นเป็นคิวบิต Control
                                </p>
                                <p className="detail"> ผลลัพธ์ที่ได้คือ คิวบิตทั้งคู่จะมีสถานะตรงกันโดยจะเป็น 0 หรือ 1 พร้อมกันเท่านั้น 
                                และคิวบิตทั้งสองจะอยู่ในสถานะ Entanglement ไม่สามารถมองแยกกันได้ อีกทั้งยังสามารถนำไปต่อยอดในการสร้างวงจรอัลกอรึทึมอื่น ๆ 
                                ตัวอย่างเช่น Teleportation  </p>
                                </React.Fragment>
                                }
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" 
                                onMouseDown={()=>this.click.play()}
                                onClick={()=>this.toggleShow(0)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body> 
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 1 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2: Teleportation
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <img className="sampleCircuit" src={algo2} alt="algo2 sample"/>
                                { this.state.onShow &&
                                <React.Fragment>
                                <p className="detail">
                                Teleportation ไม่ใช่การเคลื่อนที่ข้ามมิติแบบที่เห็นในภาพยนตร์นะ! แต่เป็นการเคลื่อนย้ายสถานะของคิวบิตหนึ่ง ไปยังอีกคิวบิตหนึ่ง 
                                โดยทำการเตรียมสถานะของคิวบิตตั้งต้นของเราให้เป็นสถานะที่เราต้องการ จากนั้นต่อวงจรดังภาพ ก็จะสามารถย้ายสถานะจากคิวบิตที่หนึ่ง
                                ไปยังคิวบิตที่สามได้ แต่ข้อจำกัดก็คือ สถานะของคิวบิตตั้งต้นจะเปลี่ยนไป วิธีการนี้จึงไม่สามารถคัดลอกคิวบิตได้
                                </p>
                                <img className="subImage" src={u1} alt="utility"/>
                                <img className="subImage" src={e} alt="utility"/>
                                <img className="subImage" src={x} alt="utility"/>
                                <img className="subImage" src={h} alt="utility"/>
                                <p className="detail"> 
                                "U" ในที่นี้คือส่วนของการเตรียมสถานะของคิวบิตตั้งต้น 
                                 โดยหากไม่ใส่เกตอะไรเลย คิวบิตตั้งต้นจะมีสถานะเป็น |0{'> '} 
                                 หากใส่ X-gate คิวบิตตั้งต้นจะมีสถานะเป็น |1{'> '}
                                 และหากใส่ Hardamard gate คิวบิตตั้งต้นจะมีสถานะเป็น |+{'> '}
                                </p>
                                <p className="detail"> 
                                เราจะสังเกตผลลัพธ์ที่คิวบิตที่ 3 ซึ่งเป็นคิวบิตเป้าหมาย โดยจะมีค่าตรงกับสถานะตั้งต้นที่เรากำหนดด้วย U เสมอ ตัวอย่างเช่น หากเรากำหนดให้
                                คิวบิตตั้งต้นมีสถานะเป็น 0 คิวบิตที่สามจะแสดงผลลัพธ์เป็น 0 เท่านั้น
                                </p>
                                </React.Fragment>
                                }
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" 
                                onMouseDown={()=>this.click.play()}
                                onClick={()=>this.toggleShow(1)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 2 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3. Deutsch Jozsa algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>

                            <img className="sampleCircuit" src={algo3} alt="algo3 sample" />
                            { this.state.onShow &&
                                <React.Fragment>
                                <p className="detail">
                                Deutsch Jozsa Algorithm เป็นอัลกอริทึมที่ใช้สำหรับจำแนกประเภทของฟังก์ชัน 
                                ว่าเป็นฟังก์ชัน Constant หรือ Balanced ก่อนอื่นเราจะมาทำความเข้าใจความแตกต่างของสองฟังก์ชันนี้กันก่อน 
                                ฟังก์ชัน Constant คือฟังก์ชันที่ได้ผลลัพธ์ออกมาเป็น 0 เท่านั้นหรือ 1 เท่านั้น สำหรับทุก input
                                แต่ฟังก์ชัน Balanced คือฟังก์ชันที่ให้ผลลัพธ์ออกมาเป็น 0 และ 1 อย่างละเท่า ๆ กัน                              
                                </p>
                                <img className="subImage" src={u2} alt="utility"/>
                                <img className="subImage" src={algo3u1} alt="utility"/>
                                <img className="subImage" src={algo3u2} alt="utility"/>
                                <p className="detail"> 
                                "U" แสดงถึงฟังก์ชันที่เราสนใจจะตรวจสอบ โดยเราจะลองยกตัวอย่างดังภาพ
                                วงจรด้านซ้ายเป็นตัวอย่างฟังก์ชัน Constant และวงจรด้านขวาเป็นตัวอย่างฟังก์ชัน Balanced
                                </p>
                                <p className="detail"> 
                                โดยสำหรับผลลัพธ์ เราจะสนใจเฉพาะ 3 คิวบิตแรก หากผลลัพธ์เป็น 000 แสดงว่าฟังก์ชันที่ใช้ตรวจสอบเป็น Constant
                                แต่หากผลลัพธ์เป็นอย่างอื่น แสดงว่าฟังก์ชันนั้นเป็น Balanced 
                                </p>
                                </React.Fragment>
                                }
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" 
                                onMouseDown={()=>this.click.play()}
                                onClick={()=>this.toggleShow(2)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                    {this.state.onShow && this.state.active!== 3 ? null:<Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                4. Grover's algorithm
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <img className="sampleCircuit" src={algo4} alt="algo4 sample" />
                            { this.state.onShow &&
                                <React.Fragment>
                                <p className="detail">
                                Grover Algorithm เป็นอัลกอริทึมสำหรับการทำ Searching ผ่านฟังก์ชันที่จะกำหนดคำตอบเรียกว่า Oracle
                                โดยนอกจากการต่อวงจรดังภาพแล้ว ที่สำคัญคือการทำซ้ำส่วนที่อยู่ในกรอบสีแดง
                                เพื่อเพิ่มความแม่นยำของผลลัพธ์ โดยจะต้องมีส่วนนั้นทั้งหมด &#8730;2<sup>N</sup> ครั้ง เมื่อ N เป็นจำนวนคิวบิตที่ใช้
                                ตัวอย่างเช่น ในกรณีนี้เราใช้ 3 คิวบิต เราจึงต้องทำซ้ำ &#8730;2<sup>3</sup> &#8776; 2.828 ปัดเศษลงเท่ากับ 2 ครั้งนั่นเอง
                                </p>
                                <img className="subImage" src={u2} alt="utility"/>
                                <img className="subImage" src={algo4u1} alt="utility"/>
                                <img className="subImage" src={algo4u2} alt="utility"/>
                                <p className="detail"> 
                                "U" แสดงถึงฟังก์ชัน Oracle ซึ่งเป็นฟังก์ชันโจทย์ที่เราต้องการทราบผลลัพธ์ ซึ่งผลลัพธ์ก็จะแตกต่างกันไปตามฟังก์ชันนี้
                                โดยเรามีตัวอย่างเป็น Oracle สำหรับสามคิวบิตให้ 2 รูปแบบ ใบ้ให้ว่าหากเธอทำสำเร็จจะได้ผลลัพธ์เป็น "101" และ "010" ตามลำดับ
                                หากเราปรับตำแหน่งของ X-gate ใน Oracle นี้ไปยังคิวบิตอื่น ๆ ก็จะได้ผลลัพธ์อื่นที่นอกเหนือจากนี้ได้อีกด้วย
                                </p>
                                <p className="detail"> 
                                ผลลัพธ์ที่ได้จะแสดงคำตอบที่ถูกต้องออกมาในอัตราที่สูงที่สุด โดยอาจมีผลลัพธ์อื่นปนอยู่บ้างเล็กน้อย
                                และจำได้ไหมว่าการทำซ้ำส่วนอยู่ที่ในกรอบสีแดงจะช่วยเพิ่มความแม่นยำให้กับผลลัพธ์
                                ลองเปรียบเทียบผลลัพธ์ระหว่างการต่อวงจรที่มีส่วนนั้นเพียงแค่ครั้งเดียวกับการทำซ้ำสองครั้งดูสิ
                                </p>
                                </React.Fragment>
                                }
                                <div className="buttonPanel2">
                                <button className="btn btn-primary" 
                                onMouseDown={()=>this.click.play()}
                                onClick={()=>this.toggleShow(3)}>{this.state.onShow? "ย้อนกลับ":"รายละเอียด"}</button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>}
                </Accordion>
            </div >
        );
    }
}

export default Sidebar;