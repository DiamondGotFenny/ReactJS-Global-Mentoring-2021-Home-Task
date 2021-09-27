import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  color: #f65261;
  height: 24px;
  width: 151px;
  margin-left: 20px;
  transform: translateY(-10px);
  & .logo_1 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  & .logo_2 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <span className="logo_1">netflix</span>
      <span className="logo_2">roulette</span>
    </StyledLogo>
  );
};
export default Logo;
