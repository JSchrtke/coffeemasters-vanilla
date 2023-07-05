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
        history.pushState({ route }, null, route);

        let page = null
        switch (route) {
            case "/":
                page = document.createElement("menu-page");
                break;
            case "/order":
                page = document.createElement("order-page");
                page.textContent = "order";
                break;
        }
        if (page) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(page);
            window.scrollX = 0;
        };
    },

    navigateWithoutHistory: (route) => {
        console.log(`navigating to ${route} without history`);
    },
};

export default Router;
