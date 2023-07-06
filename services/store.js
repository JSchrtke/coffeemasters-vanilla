const Store = {
    menu: null,
    cart: [],
}

const proxyStore = new Proxy(Store, {
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
    }
});

export default proxyStore;
