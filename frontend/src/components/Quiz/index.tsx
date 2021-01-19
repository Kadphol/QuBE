import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  font-size: 50px;
`

class Quiz extends React.Component {

  state = {
      test: null
  };  

  render() {
    return (
      <Main>
          Quiz component
      </Main>
    );
  }
}

export default Quiz;