import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalToal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((acuum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return acuum + productPrice;


    },initialValue);

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalToal.textContent = `₹${totalProductPrice + 50}`;
    
};