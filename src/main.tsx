import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div>
        <h1 className="header">header 1</h1>
        <main className="section">
          main
          <p className="paragraph">paragraph</p>
        </main>
      </div>
    </React.StrictMode>
  );
}
