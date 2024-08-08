//made by Arien Amin, aramin@bu.edu
//this holds the main color schemes for the dark/light mode styling
import styled from "styled-components";
import {useContext} from "react";
import {DarkThemeContext} from "./DarkThemeContextProvider.jsx";
import SearchbarWrapper from "./SearchbarWrapper.jsx";

const StyledTheme = styled.div`
    background-color: ${(props) => (!props.theme.dark ? "white" : "#1c2029")};
    color: ${(props) => (!props.theme.dark ?  "black" : "white")};
    padding: 2%;
    min-height: 100vh;
    transition: 0.5s;
`;

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