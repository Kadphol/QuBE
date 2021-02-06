import React, { useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import './Message.scoped.css';

const Message = ({message}: any) => {
  const items = useMemo(
    () => message.split("").map((letter: string, index: number) => ({
      item: letter,
      key: `${letter}${index}`
    })),[message]
  );

  const transitions = useTransition(items, item => item.key, {
    trail: 20,
    from: { display: "none" },
    enter: { display: "" }
  });

  return (
    <div className="message">
      {transitions.map(({item, props, key}) => {
        return (
          <animated.span key={key} style={props}>
            {item.item}
          </animated.span>
        )
      })}
    </div>
  );
}

export default Message;