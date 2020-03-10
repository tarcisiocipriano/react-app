import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  padding: 16px;
  border: 1px solid white;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>Hi, I'm {props.name}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  )
}

export default Person;