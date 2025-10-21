import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ListaDeProdutos } from "./screens/ListaDeProdutos";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ListaDeProdutos />
  </StrictMode>,
);
