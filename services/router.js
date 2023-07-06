const Router = {
    init: () => {
        document.querySelectorAll(".navlink").forEach(navlink => {
            navlink.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault();
                const target = clickEvent.target.getAttribute("href")
                Router.navigate(target);
            });
        });

        window.addEventListener("popstate", (popStateEvent) => {
            const target = popStateEvent.state.route;
            Router.navigateWithoutHistory(target);
        });

        Router.navigate(location.pathname)
    },

    navigate: (route) => {
        nav(route, true);
    },

    navigateWithoutHistory: (route) => {
        nav(route, false);
    },
};

const nav = (route, withHistory = true) => {
    if (withHistory) {
        history.pushState({ route }, null, route);
    }

    let page = null
    switch (route) {
        case "/":
            page = document.createElement("menu-page");
            break;
        case "/order":
            page = document.createElement("order-page");
            break;
        default:
            if (route.startsWith("/product-")) {
                page = document.createElement("details-page");
                page.dataset.productId = route.substring(
                    route.lastIndexOf("-") + 1
                );
            }
            break;
    }
    if (page) {
        document.querySelector("main").innerHTML = "";
        document.querySelector("main").appendChild(page);
    }

    window.scrollX = 0;
};

export default Router;
