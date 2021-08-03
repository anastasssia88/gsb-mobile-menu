import React from "react";
import styled from "styled-components";
import logo from "../images/gsb-logo@2x.png";
import openImg from "../images/gsb-icon-hamburger-open@2x.png";
import closeImg from "../images/gsb-icon-hamburger-close@2x.png";

const Toggle = ({ main, navbar, gridArea, toggleMenu, label }) => {
  let toggleImg = navbar ? closeImg : openImg;

  return (
    <Wrapper main={main} navbar={navbar} gridArea={gridArea}>
      <img src={logo} alt="great state burger logo" />
      <button onClick={toggleMenu} aria-label={label}>
        <img src={toggleImg} alt={label} />
      </button>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  grid-area: ${(props) => props.gridArea && "toggle"};
  @media (min-width: 768px) {
    justify-self: ${(props) => props.navbar && "end"};
    align-self: ${(props) => props.main && "flex-end"};
    margin-right: 2rem;
  }

  height: auto;
  display: flex;
  justify-content: center;
  align-items: space-between;
  max-height: 62px;

  img {
    width: 62px;
    height: 60px;
    cursor: pointer;
  }

  button {
    height: 60px;
    display: grid;
    place-items: center;
    img {
      width: 28px;
      height: auto;
    }
  }
`;
