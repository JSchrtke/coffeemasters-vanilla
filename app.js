import { loadMenu } from "./services/menu.js";
import Router from "./services/router.js";
import Store from "./services/store.js";

// NOTE: these are never used, but still need to be imported to register the web
// components they define
import MenuPage from "./components/menuPage.js";
import OrderPage from "./components/orderPage.js";
import DetailsPage from "./components/detailsPage.js";

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    app.router.init();
    app.store.menu = await loadMenu();
});

window.addEventListener("AppMenuChange", () => {
    console.log("menu changed!");
});
