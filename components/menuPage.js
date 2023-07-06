class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.dom = this.attachShadow({ mode: "open" });

        const menuTemplate = document.getElementById("menu-page-template");
        const menuNode = menuTemplate.content.cloneNode(true);
        this.dom.appendChild(menuNode);

        fetch("/components/MenuPage.css").then((response) => {
            response.text().then((css) => {
                const style = document.createElement("style");
                style.textContent = css;
                this.dom.appendChild(style);
            });
        });

        window.addEventListener("AppMenuChange", () => this.render());
    }

    render() {
        const menu = this.dom.querySelector("#menu");
        menu.innerHTML = "";

        if (!app.store.menu) {
            menu.innerHTML = "Loading...";
            return;
        }

        app.store.menu.forEach((category) => {
            const categoryItem = document.createElement("li");

            const name = document.createElement("h3");
            name.textContent = category.name
            categoryItem.appendChild(name);

            const products = document.createElement("ul");
            category.products.forEach((product) => {
                const p = document.createElement("h4");
                p.textContent = product.name
                products.appendChild(p);
            });
            categoryItem.appendChild(products);

            menu.appendChild(categoryItem);
        });
    }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;
