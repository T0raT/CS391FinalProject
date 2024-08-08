//made by Arien Amin, aramin@bu.edu
//this holds the main color schemes for the dark/light mode styling

import styled from "styled-components";
import {useContext} from "react";
import {DarkThemeContext} from "./DarkThemeContextProvider.jsx";
import SearchbarWrapper from "./SearchbarWrapper.jsx";

// a styled div which will hold the main content
// this is to make sure the whole background changed color when the change theme
// button is pressed

const StyledTheme = styled.div`
    background-color: ${(props) => (!props.theme.dark ? "white" : "#1c2029")};
    color: ${(props) => (!props.theme.dark ?  "black" : "white")};
    padding: 2%;
    min-height: 100vh;
    transition: 0.5s;
`;

// in here, we wrap the SearchbarWrapper in the StyledTheme, which has the darkthemecontext
// which will connect it to the context provider component
export default function ThemeComponent(){
    const darkContext = useContext(DarkThemeContext);
    return(
        <>
            <StyledTheme theme={darkContext}>
                <SearchbarWrapper/>
            </StyledTheme>
        </>
    );
}