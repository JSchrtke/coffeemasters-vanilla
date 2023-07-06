import { loadMenu } from "./services/menu.js";
import Router from "./services/router.js";
import Store from "./services/store.js";

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    app.router.init();
    app.store.menu = await loadMenu();
});
