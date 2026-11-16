import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const client = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
);
