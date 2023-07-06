import API from "./api.js";

const StorePrototype = {
    menu: null,
    cart: [],

    getProductById: async (id) => {
        if (StorePrototype.menu) {
            StorePrototype.menu = await API.loadMenu();
        }
        for (let category of StorePrototype.menu) {
            for (let product of category.products) {
                if (product.id == id) {
                    return product;
                }
            }
        }

        return null;
    }
}

const Store = new Proxy(StorePrototype, {
    set(target, property, newValue) {
        target[property] = newValue;

        switch (property) {
            case "menu":
                window.dispatchEvent(new Event("AppMenuChange"));
                break;
            case "cart":
                console.log("cart change");
                break;
        }

        return true;
    },

});

export default Store;
