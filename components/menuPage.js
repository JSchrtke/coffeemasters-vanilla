class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.dom = this.attachShadow({ mode: "closed" });

        fetch("/test.css").then((response) =>
            response.text().then((css) => {
                const style = new CSSStyleSheet();
                style.replaceSync(css);
                this.dom.adoptedStyleSheets = [style];
            })
        );

        const template = document.createElement("template");
        fetch("/test.html").then(response => {
            response.text().then(html => {
                template.innerHTML = html;
                const node = template.content.cloneNode(true);
                this.dom.appendChild(node);
            });
        });
    }
}

customElements.define("menu-page", MenuPage);

export default MenuPage;
