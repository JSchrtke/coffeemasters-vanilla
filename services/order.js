import API from "./api.js";

export default async function loadData() {
    const menu = await API.loadMenu();
    console.log("loading menu");
    console.log(menu);
    app.store.menu = menu;
};
