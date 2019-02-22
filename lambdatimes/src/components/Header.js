import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderDiv = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  height: 120px;
  padding-bottom: 15px;
  margin-top: 44px;
  display: flex;

  h1 {
    font-size: 60px;
    font-weight: bold;
    color: #000;
    text-align: center;
    flex: 8;
    font-family: Didot, serif;
  }

  @media(min-width: 1280px) {
    width: 1280px;
  }
`;

const SpanDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  flex: 1;
  letter-spacing: 1px;
  margin-left: 25px;
`;

const Temperature = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
  font-weight: bold;
  align-self: flex-end;
  letter-spacing: 1px;
  font-size: 11px;
`;
const Header = () => {
  return (
    <HeaderDiv>
      <SpanDate>SMARCH 32, 2018</SpanDate>
      <h1>Lambda Times</h1>
      <Temperature>98°</Temperature>
    </HeaderDiv>
  )
}

export default Header
