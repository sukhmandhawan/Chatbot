import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

import { AuthContextProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query"

import { DarkModeContextProvider } from "./context/modeContext";
const queryClient = new QueryClient();

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
