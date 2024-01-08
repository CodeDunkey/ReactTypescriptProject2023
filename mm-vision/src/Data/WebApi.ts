import { Product, productList, CartLine } from "./ProductList";

let cart: CartLine[] = [];

class WebApi {

    addToCart = (product: Product) => {
        const findProduct = cart.find(find => find.itemId == product.id)
        console.log("findProduct", findProduct)
        if(findProduct){
            const addToQuantity = findProduct.quantity++
        }        
        if(!findProduct){
            const addToCart: CartLine = {
                itemId: product.id, 
                quantity: 1
            }
            cart.push(addToCart);
        }
        // product.stock--;
        return [...cart];
    }

    removeFromCart = (productId: number) => {
        const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === productId);
        // const targetFind = cart.find(find => find.individualRandomNr === productRandomNr)
        // if(targetFind){
        //     targetFind.stock++;
        // }
        console.log(targetIndex)
        if (targetIndex !== -1) {
            cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
            return cart;
        }        
        throw new Error("Could not find productId" + productId.toString());
    }

    getProducts = () => {
        return productList;
    }
}

const webApi = new WebApi();

export default webApi;