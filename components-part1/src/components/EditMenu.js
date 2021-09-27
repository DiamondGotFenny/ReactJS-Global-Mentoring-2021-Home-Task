import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: #effffa;
  transform: ${({ open }) =>
    open ? 'translate(4rem, -13rem)' : 'translateX(9999px)'};
  width: 190px;
  height: 111px;
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(27.1828px);
  border-radius: 4px;
  position: absolute;

  & button {
    color: #fff;
    height: 50%;
    background: transparent;
    border: none;
    &: hover {
      background: #f65261;
    }
  }
  & .close {
    display: inline-flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
  }
  z-index: 10;
`;

const EditMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <button className="close" onClick={() => setOpen(false)}>
        X
      </button>
      <button>Edit</button>
      <button>Delete</button>
    </StyledMenu>
  );
};

export default EditMenu;