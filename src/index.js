import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/fav-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter basename="/react-route-practice-meetup/">
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>
);
