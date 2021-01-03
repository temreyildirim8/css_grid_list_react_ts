import React from 'react';
import styled from 'styled-components';

import hamburger from '../../assets/icon/hamburger.png';

const Wrapper = styled.div`
  height: 100px;
  margin: -30px 0 0;
  background-image: linear-gradient(to right, #001e42 0, #a71d8e);
  color: white;
  text-align: start;

  & > h2 {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  & > img {
    padding: 10px;
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

const Header = (props: any) => {
  return (
    <>
      <div>
        <Wrapper>
          <h2> Digiturk </h2>
        </Wrapper>
        <MobileWrapper>
          <img src={hamburger} />
        </MobileWrapper>
      </div>
    </>
  );
};

export default Header;
