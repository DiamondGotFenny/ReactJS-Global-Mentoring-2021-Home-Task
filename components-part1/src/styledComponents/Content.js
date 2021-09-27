import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: grid;
  background-color: #232323;
  margin-top: 20px;
  padding: 0 40px;
`;

export const FilterWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  & ul {
    display: flex;
  }
  & li {
    margin-right: 10px;
    text-transform: uppercase;
  }
`;

export const FilterButton = styled.button`
  padding: 15px 0 9px 0;
  background-color: transparent;
  text-transform: uppercase;
  border: none;
  color: #fff;
  height: 100%;

  &:focus-within {
    border-bottom: 2px solid #f65261;
  }
`;

export const SortWrapper = styled.div`
  padding: 15px 0 9px 0;
`;

export const SortSpan = styled.span`
  text-transform: uppercase;
  margin-right: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.888889px;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.6;
`;
export const SortSelect = styled.select`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  color: #fff;
  &:active,
  &:focus {
    outline: none;
    box-shadow: none !important;
  }
  & option:not(:checked) {
    border: none;
    box-shadow: none !important;
    outline: none;
    background: #232323;
  }
  & option:checked {
    box-shadow: none !important;
    outline: none;
    background: #232323;
  }

  & option:focus {
    border: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  //this is the styles for the dropdown arrow
  padding: 10px;
  padding-right: 30px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23F65261%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;

export const StyledResults = styled.div`
  margin-top: 20px;
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  & span {
    font-weight: 600;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(500px, auto);
  margin: auto -26px;
`;
