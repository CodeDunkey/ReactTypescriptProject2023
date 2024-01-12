import { Product, productList, CartLine } from "./ProductList";

let cart: CartLine[] = [];

class WebApi {

    addToCart = (product: Product) => {
        const findProduct = cart.find(find => find.itemId == product.id)

        if(findProduct){
            findProduct.quantity++
        }        
        if(!findProduct){
            const addToCart: CartLine = {
                itemId: product.id, 
                quantity: 1
            }
            cart.push(addToCart);
        }
        
        return [...cart];
    }
    removeFromCart = (product: Product) => {
        const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === product.id);
        const findProduct = cart.find(find => find.itemId == product.id);
        if(findProduct){
            findProduct.quantity--
        }
        
        if (targetIndex !== -1 && findProduct?.quantity === 0) {
            cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
            return [...cart];
        }        
        return [...cart];
    }

    getProducts = async () => {
        const products = await fetch("http://example.com/movies.json");
        return productList;
    }
}

const webApi = new WebApi();

export default webApi;
