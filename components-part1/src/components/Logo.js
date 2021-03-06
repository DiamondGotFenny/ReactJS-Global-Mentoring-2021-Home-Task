import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  color: #f65261;
  height: 24px;
  width: 151px;
  margin-left: 20px;
  transform: translateY(-10px);
  & .logo_1,
  & .logo_2 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;

    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  & .logo_1 {
    font-weight: 900;
  }
  & .logo_2 {
    font-weight: 500;
  }
`;

const Logo = () => {
  return (
    <StyledLogo className="logo-container">
      <span className="logo_1">netflix</span>
      <span className="logo_2">roulette</span>
    </StyledLogo>
  );
};
export default Logo;
