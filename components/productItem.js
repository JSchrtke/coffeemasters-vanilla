const productTemplate = `<article>
    <a href="#">
        <img>
        <section>
            <div>
                <h4></h4>
                <p class="price"><p>
            </div>
            <button>Add</button>
        </section>
    </a>
</article>
`
class ProductItem extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const p = document.getElementById("product-item-template");
        const productNode = p.content.cloneNode(true);
        this.appendChild(productNode);

        const productData = JSON.parse(this.dataset.product);
        this.querySelector("h4").textContent = productData.name;
        this.querySelector("p.price").textContent = `$${productData.price.toFixed(2)}`;
        this.querySelector("img").src = `data/images/${productData.image}`;
        this.querySelector("a").addEventListener("click", event => {
            console.log(event.target.tagName);
            if (event.target.tagName.toLowerCase()=="button") {
                //TODO
            } else {
                app.router.go(`/productData-${productData.id}`);
            }
            event.preventDefault();
        })
    };
}

customElements.define("product-item", ProductItem);

export default ProductItem;
