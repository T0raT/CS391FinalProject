import ThemeComponent from "./components/ThemeComponent.jsx";
import DarkThemeContextProvider from "./components/DarkThemeContextProvider.jsx";

export default function App() {
  return (
      <DarkThemeContextProvider>
        <ThemeComponent/>
      </DarkThemeContextProvider>
  );
}
