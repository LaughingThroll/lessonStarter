import "../styles/index.scss";
import App from "./components/App";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

new App(document.querySelector("#appRoot")).render();
