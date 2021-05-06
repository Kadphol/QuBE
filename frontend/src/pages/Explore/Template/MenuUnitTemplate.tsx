import React, { useState } from 'react';
import { Iuser } from '@src/type.modal'
import padlock from '@assets/explore/padlock.png';
import UnitModal from './modal';
import { useRouteMatch } from 'react-router-dom';
import clearedIcon from '@assets/explore/clearedIcon.png';
import clearedIconQuiz from '@assets/explore/clearedIconQuiz.png';

const sfx = require('@assets/sound/sfx_click.mp3').default


interface IProps { user: Iuser & any, detail: { chapter: number, title: string[], titleEng: string[] } }

export default function MenuUnit(props: IProps) {

  const padlockStyle = {
    position: 'absolute',
    width: '107px',
    height: '107px',
    top: '145px',
    left: '70px',
    zIndex: 2,
  } as React.CSSProperties;

  const card = {
    position: 'absolute',
    width: '250px',
    height: '300px',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    cursor: 'pointer'
  } as React.CSSProperties;

  const card1 = {
    ...card,
    left: '35px',
    top: '130px',
  } as React.CSSProperties;

  const card2 = {
    ...card,
    left: '335px',
    top: '200px'
  } as React.CSSProperties;

  const card3 = {
    ...card,
    left: '635px',
    top: '130px',
  } as React.CSSProperties;

  const card4 = {
    ...card,
    left: '935px',
    top: '200px',
  } as React.CSSProperties;

  const iconNumber = {
    position: 'absolute',
    width: '80px',
    height: '80px',
    left: '85px',
    top: '35px',
    background: '#65AC99',
    borderRadius: '50%',
  } as React.CSSProperties;

  const divNumber = {
    position: 'relative',
    width: '80px',
    height: '80px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '70px',
    textAlign: 'center',
    lineHeight: '80px',
    color: '#FFFFFF'
  } as React.CSSProperties;

  const divQuiz = {...divNumber,lineHeight:'70px'}

  const iconCleared = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    left: '75px',
    top: '35px',
    background: `url(${clearedIcon})`,
  } as React.CSSProperties;

  const iconClearedQuiz = {...iconCleared,background: `url(${clearedIconQuiz})`} as React.CSSProperties;

  const divCleared = {
    position: 'relative',
    width: '100px',
    height: '75px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '60px',
    textAlign: 'center',
    lineHeight: '75px',
    color: '#FFFFFF'
  } as React.CSSProperties;

  const divClearedQuiz = {...divCleared,lineHeight:'65px'}

  const titleStyle = {
    position: 'absolute',
    width: '214px',
    height: '74px',
    left: '20px',
    top: '175px',
    fontFamily: 'Kanit',
    fontStyle: 'normal',
    fontHeight: 'bold',
    fontSize: '25px',
    lineHeight: '37px',
    textAlign: 'center',
    color: '#65AC99',
  } as React.CSSProperties;

  let { url } = useRouteMatch()

  const [modalShow, changeModalShow] = useState(false)
  const [index, changeIndex] = useState(0)
  const audio = new Audio(sfx)
  const cards = [card1, card2, card3, card4]

  const items = [{
    path: url + '/unit-1',
    title: props.detail.title[0],
    titleEng: props.detail.titleEng[0]
  }, {
    path: url + '/unit-2',
    title: props.detail.title[1],
    titleEng: props.detail.titleEng[1]
  }, {
    path: url + '/unit-3',
    title: props.detail.title[2],
    titleEng: props.detail.titleEng[2]
  }, {
    path: url + '/quiz',
    title: props.detail.title[3],
    titleEng: props.detail.titleEng[3]
  }]

  const openModal = (index) => {
    changeIndex(index)
    changeModalShow(true)
  }

  return (
    <React.Fragment>
      <UnitModal show={modalShow} onHide={() => changeModalShow(false)} index={index} item={items[index]} />
      {items.map((item, index) => (
        props.user.chapter! > props.detail.chapter - 1 || (props.user.chapter! === props.detail.chapter - 1 && props.user.unit! >= index)
          // unlocked
          ? <div onClick={() => openModal(index)} onMouseDown={() => audio.play()} style={cards[index]}>
            <div style={{ position: 'relative' }}>
              <div style={
                props.user.chapter === props.detail.chapter - 1 && props.user.unit === index
                  ? { ...iconNumber, background: index === 3 ? '#D32027' : '#65AC99' }
                  : index === 3? iconClearedQuiz : iconCleared
              }>
                <div style={props.user.chapter === props.detail.chapter - 1 && props.user.unit === index
                  ? (index===3?divQuiz:divNumber) : (index===3?divClearedQuiz:divCleared)}>
                  {index === 3 ? 'Q' : index + 1}
                </div>
              </div>
              <span onClick={() => openModal(index)} style={{ ...titleStyle, color: index === 3 ? '#D32027' : '#65AC99' }}>{item.title}</span>
            </div>
          </div>
          // locked
          : <div style={{ ...cards[index], background: 'rgba(0, 0, 0, 0.6)' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ ...iconNumber, backgroundColor: index === 3 ? '#D32027' : '#65AC99' }}>
                <div style={(index===3?divQuiz:divNumber)}>
                  {index === 3 ? 'Q' : index + 1}
                </div>
              </div>
              <img src={padlock} style={padlockStyle} alt="locking content" />
              <span style={{ ...titleStyle, color: index === 3 ? '#D32027' : '#65AC99' }}>{item.title}</span>
            </div>
          </div>
      ))}
    </React.Fragment>
  )
}