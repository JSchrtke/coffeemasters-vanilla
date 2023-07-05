class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.dom = this.attachShadow({ mode: "closed" });

        const menuTemplate = document.getElementById("menu-page-template");
        const menuNode = menuTemplate.content.cloneNode(true);
        this.dom.appendChild(menuNode);
    }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;
