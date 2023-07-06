const API = {
    menuUrl: "/data/menu.json",
    loadMenu: async () => {
        const menu = await fetch(API.menuUrl);
        return await menu.json();
    }
};

export default API;
