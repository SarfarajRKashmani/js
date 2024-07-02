const api = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

const createElement = (tag, innerHTML = "", attributes = {}) => {
    const element = document.createElement(tag);
    element.innerHTML = innerHTML;
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    return element;
};

const Products = api();
const pods = document.querySelector("#pds");

const uimaker = (Data) => {
    pods.innerHTML = "";
    Data?.map((elem) => {
        const bdy = createElement("div", "", { class: "card-body " });
        const card = createElement("div", "", { class: " h-100 p-3 border rounded-2" });
        const col = createElement("div", "", {
            class: "col rounded-2 columns",
        });
        const buyBtn = createElement("button", "Buy Now", {
            class: "fs-6 fw-bold text-bg-dark text-info rounded border-1 buy-now-btn",
        });

        bdy.append(
            createElement("h5", `${elem.title}`, { class: "card-title fw-bold pb-4" }),
            createElement("p",`Category : <span class="fw-bold">${elem.category}</span>`,
                {class: "card-text  fw-medium",}),
            createElement("p",`Price : <span class="fw-bold"> $ ${elem.price}</span>`,
                {class: "card-text text-info",}),buyBtn);

        card.append(createElement("img", "", {class: "pb-4 card-img-top rounded-3",id: "card-img",src: `${elem.image}`,alt: `${elem.title}`,width: "80%",height: "60%",}),
            bdy);col.append(card);pods.append(col);
    });
};

Products.then((data) => {
    uimaker(data);
});