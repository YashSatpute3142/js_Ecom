import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductfromCart } from "./removeProductfromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterproducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
    

});
console.log(filterproducts);


const cartElement = document.querySelector("#productCartContiner");
const templetContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterproducts.forEach((curProd) => {
        const {id, name, price, image, stock, brand, category, description} = curProd;

        const productClone = document.importNode(templetContainer.content, true);

        const lSActualData = fetchQuantityFromCartLS(id,price);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent= name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent =lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProductfromCart(id));
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });
        cartElement.appendChild(productClone);
    });

};

showCartProduct()

updateCartProductTotal();