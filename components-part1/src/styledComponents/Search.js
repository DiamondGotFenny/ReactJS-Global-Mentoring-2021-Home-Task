import styled from 'styled-components';

export const SearchWrapper = styled.section`
  height: 396px;
  width: 1260px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1260px;
    height: 396px;
    z-index: -1;
    border-radius: 0px;
    background: url('/img/Search-top-bg.jpg') no-repeat center center fixed;
    background-size: cover;
    filter: blur(8.15485px);
    opacity: 0.8;
    mix-blend-mode: normal;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1260px;
    height: 396px;
    background: linear-gradient(0deg, #000000, #000000);
    opacity: 0.6;
    z-index: -1;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledAddMovieButton = styled.button`
  color: #f65261;
  height: 46px;
  width: 177px;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-right: 40px;
  padding: 11px 18px;
  border-radius: 4px;
  background: rgba(96, 96, 96, 0.68);
  border: none;
  text-transform: uppercase;
`;

export const StyledSearchTitle = styled.h1`
  color: #ffffff;
  height: 49px;
  width: 392px;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 49px;
  letter-spacing: 1px;
  text-align: center;
  margin-left: 178px;
`;

export const StyledSearchContainer = styled.div`
  margin-top: 40px;
  & input {
    color: #fff;
    height: 57px;
    width: 713px;
    border-radius: 4px;
    background: rgba(50, 50, 50, 0.8);
    mix-blend-mode: normal;
    opacity: 0.7;
    border-radius: 4px;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.38px;
  }
  & button {
    color: #fff;
    background: #f65261;
    border-radius: 4px;
    padding: 18px 73px 15px 74px;

    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;
