import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/raw-tokens.css";
import "./styles/main.scss";

createApp(App).use(router).mount("#app");
