import SearchbarWrapper from "./components/SearchbarWrapper.jsx";
import styled from "styled-components";
import { ProductCard } from "./components/ProductCard.jsx";
import ThemeComponent from "./components/ThemeComponent.jsx";
import DarkThemeContextProvider, {DarkThemeContext} from "./components/DarkThemeContextProvider.jsx";

export default function App() {
  return (
      <DarkThemeContextProvider>
        <ThemeComponent/>
      </DarkThemeContextProvider>
      //<SearchbarWrapper/>
  );
}
