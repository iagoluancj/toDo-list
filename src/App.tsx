import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/header";
import { MainContent } from "./components/Main/MainContent";
import { LayoutAppContainer } from "./appStyles";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ligthMode } from "./styles/themes/ligthMode";
import { TasksProvider } from "./hooks/use-tasks";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme || ligthMode}>
      <TasksProvider>
        <LayoutAppContainer>
          <Header />
          <MainContent />
        </LayoutAppContainer>
        <GlobalStyle />
      </TasksProvider>
    </ThemeProvider>
  )
}
