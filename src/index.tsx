import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ListaDeProdutos } from "./screens/ListaDeProdutos";
import { ThemeProvider } from "./lib/themes";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider initialTheme="default">
      <ListaDeProdutos />
    </ThemeProvider>
  </StrictMode>,
);
