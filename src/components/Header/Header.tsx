import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import hamburger from '../../assets/icon/hamburger.png';

const Wrapper = styled.div`
  height: 120px;
  margin: -30px 0 0;
  background-image: linear-gradient(to right, #001e42 0, #a71d8e);
  color: white;
  text-align: start;

  & > h2 {
    padding: 40px 0;
    width: 100px;
    cursor: pointer;
    position: absolute;,
    z-index: 1;
    left: 50px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  & > img {
    padding: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    margin: 20px 20px 0px 10px;

    & > img {
      width: 50px;
      height: 50px;
    }
  }
`;

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <>
      <div>
        <Wrapper>
          <h2 onClick={handleClick}> Digiturk </h2>
        </Wrapper>
        <MobileWrapper>
          <img src={hamburger} onClick={handleClick} />
        </MobileWrapper>
      </div>
    </>
  );
};

export default Header;
