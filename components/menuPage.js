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
    }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;
