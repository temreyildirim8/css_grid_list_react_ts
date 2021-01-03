import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-image: linear-gradient(to right, #a71d8e 0, #001e42);
  height: 280px;
  margin-top: 50px;

  @media (min-width: 321px) and (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media (min-width: 321px) and (max-width: 1023px) {
    height: auto;
  }
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > ul {
    color: white;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    margin-top: 50px;
    margin-right: 70px;
  }

  & > ul li {
    margin: 5px 0;
    cursor: pointer;
  }

  & > ul li:first-child {
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 321px) and (max-width: 768px) {
    width: auto;
    flex-direction: column;
    margin: 0;
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: auto;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <ul>
          <li>Links</li>
          <li>Pellentesque at luctus elit</li>
          <li>Proin in hendrerit felis id.</li>
          <li>Temporibus ex obcaecati</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Pellentesque at luctus elit</li>
          <li>Proin in hendrerit felis id</li>
          <li>Temporibus ex obcaecati</li>
          <li>Officia ratione similique</li>
          <li>Eveniet magnam facilis</li>
          <li>Nunc egestas malesuada eros</li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>Pellentesque at luctus elit</li>
          <li>Proin in hendrerit felis id</li>
          <li>Temporibus ex obcaecati</li>
        </ul>
      </FooterWrapper>
    </StyledFooter>
  );
};
export default Footer;
