// made by Arien Amin, aramin@bu.edu
// this creates the dark/light mode context for the whole web app
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const DarkThemeContext = createContext();

const Button = styled.button`
  max-width: 10em;
  padding: 2%;
  border-radius: 20px;
  border: 2px solid ${(props) => (props.dark ? "rgb(0, 146, 66)" : "black")};
  cursor: pointer;
  font-size: calc(5px + 1vmin);
`;

const HeaderContainer = styled.div`
  background-color: ${(props) => (props.dark ? "#1c2029" : "white")};
  color: ${(props) => (props.dark ? "white" : "#1c2029")};
  padding: 1% 2%;
  text-align: center;
`;

const StyledHeader = styled.header`
  font-size: calc(1.5vw + 1.5vh);
`;

export default function DarkThemeContextProvider({ children }) {
  const [dark, setDark] = useState(false);
  function changeTheme() {
    setDark(!dark);
  }
  return (
    <>
      <DarkThemeContext.Provider value={{ dark, changeTheme }}>
        <HeaderContainer dark={dark}>
          <StyledHeader>
            <h2>Recipe Finder</h2>
          </StyledHeader>
          <Button dark={dark} onClick={changeTheme} className="toggle">
            Change Theme
          </Button>
        </HeaderContainer>
        {children}
      </DarkThemeContext.Provider>
    </>
  );
}

DarkThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
