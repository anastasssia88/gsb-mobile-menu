import React from "react";
import styled from "styled-components";
import Action from "./Action";
import Toggle from "./Toggle";
import bgImage from "../images/gsb-retro-motif@2x.png";

const Navbar = ({ isOpen, setIsOpen, toggleMenu }) => {
  return (
    <NavBar isOpen={isOpen}>
      <Wrapper>
        <Toggle
          navbar
          gridArea={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
          label="Close the navbar"
        />

        {/* website navigation */}
        <Menu isOpen={isOpen}>
          <ul>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">Locations</a>
            </li>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">About</a>
            </li>
            <li>
              <a href="./">Catering</a>
            </li>
            <li>
              <a href="./">Jobs</a>
            </li>
          </ul>
        </Menu>

        {/* location & order online options */}
        <Actions isOpen={isOpen}>
          <Action content="locations" label="find our locations"/>
          <Action content="order online" label="order online here"/>
        </Actions>
      </Wrapper>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.nav`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.isOpen ? "translate3d(0, 0vh, 0);" : "translate3d(0, -100vh, 0);"};
  transition: transform 0.5s ease;
`;

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  height: 89%;
  background-color: #2b5f7b;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "toggle"
    "menu"
    "actions";
  color: #ffffff;
  height: ${(props) => props.isOpen && "89vh"};
  width: auto;

  @media (min-width: 768px) {
    height: 90%;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "actions toggle"
      "menu menu";
  }
`;

const Menu = styled.menu`
  grid-area: menu;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  max-height: auto;
  transition: all 0.3s ease-in;
  @media (min-width: 768px) {
    align-items: start;
  }

  ul {
    padding: 30px 0px;

    li {
      text-align: center;
      padding: 15px;
      text-transform: uppercase;
      font-size: 36px;
      font-weight: 600;
    }
  }
`;

const Actions = styled.div`
  grid-area: actions;
  display: flex;
  justify-content: center;
  max-height: 62px;
  @media (min-width: 768px) {
    justify-self: start;
    margin-left: 2rem;
  }
`;
