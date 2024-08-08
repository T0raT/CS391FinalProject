// made by Arien Amin, aramin@bu.edu
// this creates the dark/light mode context for the whole web app
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const DarkThemeContext = createContext();

const Button = styled.button`
  max-width: 15em;
  padding: 1%;
  border-radius: 20px;
  border: 2px solid ${(props) => (props.dark ? "white" : "black")};
  cursor: pointer;
  font-size: calc(5px + 1vmin);
  background-color: ${(props) => (props.dark ? "#8b8f99": "#ebebeb")};
  transition: 0.3s;
`;

const HeaderContainer = styled.div`
  background-color: ${(props) => (props.dark ? "#1c2029" : "white")};
  color: ${(props) => (props.dark ? "white" : "#1c2029")};
  padding: 1% 2%;
  transition: 0.5s;
`;

const StyledHeader = styled.header`
  font-size: calc(2vw + 2vh);
  font-family: futura-pt-condensed, sans-serif;
  text-align: center;
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
