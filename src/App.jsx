/*
 * Recipe Web-app by:
 * Arien Amin, aramin@bu.edu -> Dark Theme Context component
 * Carlos Contreras, ccontrer@bu.edu -> Searchbar components
 * Daian Liu (Tiger), tigerliu@bu.edu -> Product Card component
 * */

import ThemeComponent from "./components/ThemeComponent.jsx";
import DarkThemeContextProvider from "./components/DarkThemeContextProvider.jsx";

export default function App() {
  return (
    <DarkThemeContextProvider>
      <ThemeComponent />
    </DarkThemeContextProvider>
  );
}
