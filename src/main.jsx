import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider
      publishableKey={
        "pk_test_c3RpcnJlZC1sb2N1c3QtMzYuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
      afterSignOutUrl={"/"}
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);
