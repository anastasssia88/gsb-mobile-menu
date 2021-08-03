import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* sliding down navbar */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />

      {/* hero section */}
      <Wrapper>
        <Main>
          <Toggle
            main
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleMenu={toggleMenu}
            label="Open the navbar"
          />
        </Main>

        {/* here we're going to have logo & footer  */}
      </Wrapper>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  padding: 20px;
  background: #2b5f7b;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #ffffff;
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;
