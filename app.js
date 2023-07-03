import loadData from "./services/order.js";
import Store from "./services/store.js";

window.app = {}
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    console.log(app.store.menu);
});
