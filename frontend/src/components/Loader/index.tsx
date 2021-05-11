import React from 'react';
import Load from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = styled.div`
  justify-content: center;
  align-items: center;
`
const Loader = () => {
  return (
    <Spinner>
      <Load
      type="ThreeDots"
      color="#6254D2"
      height={300}
      width={300}
      />
    </Spinner>
    
  )
}

export default Loader;