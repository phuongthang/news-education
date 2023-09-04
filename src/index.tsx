import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import { browserHistory } from "./browserHistory";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

const BrowserRouter = ({ basename, children }: BrowserRouterProps) => {
  const [state, setState] = useState({
    action: browserHistory.action,
    location: browserHistory.location,
  });

  useLayoutEffect(() => browserHistory.listen(setState), []);
  return (
    <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={browserHistory} />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
