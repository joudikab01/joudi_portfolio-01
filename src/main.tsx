import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";

const theme = createTheme({
  primaryColor: "cyan",
  colors: {
    cyan: [
      "#e0f7ff",
      "#b3e5ff",
      "#80d4ff",
      "#4dc3ff",
      "#1ab2ff",
      "#00a1e6",
      "#0088cc",
      "#006fb3",
      "#005699",
      "#003d80",
    ],
    violet: [
      "#f3e8ff",
      "#e9d5ff",
      "#d8b4fe",
      "#c084fc",
      "#a855f7",
      "#9333ea",
      "#7c3aed",
      "#6d28d9",
      "#5b21b6",
      "#4c1d95",
    ],
  },
  fontFamily: "'Plus Jakarta Sans', 'Nunito Sans', system-ui, -apple-system, sans-serif",
  headings: {
    fontFamily: "'Plus Jakarta Sans', 'Nunito Sans', system-ui, -apple-system, sans-serif",
    fontWeight: '700',
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
