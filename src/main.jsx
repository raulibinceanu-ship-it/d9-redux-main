import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root")); // ⬅️ MANCAVA QUESTO

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
