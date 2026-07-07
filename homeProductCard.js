import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productConatiner = document.querySelector("#productConatiner");
const productTemplet = document.querySelector("#productTemplet");

export const showProductContainer = (products) => {
    if(!products){
        return false
    }

    products.forEach((curProd) => {
        const {id, name, price, image, stock, brand, category, description} = curProd;

        const productCloan = document.importNode(productTemplet.content, true);

        productCloan.querySelector("#cardValue").setAttribute('id', `card${id}`)
        productCloan.querySelector(".category").textContent = category;
        productCloan.querySelector(".productName").textContent = name;
        productCloan.querySelector(".productImage").src = image;
        productCloan.querySelector(".productImage").alt = name;
        productCloan.querySelector(".productStock").textContent = stock;
        productCloan.querySelector(".productDescription").textContent = description;
        productCloan.querySelector(".productPrice").textContent = `₹${price}`;
        productCloan.querySelector(".productActualPrice").textContent = `₹${price * 4}`;

        productCloan.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        productCloan.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });

        productConatiner.append(productCloan);
    });
};