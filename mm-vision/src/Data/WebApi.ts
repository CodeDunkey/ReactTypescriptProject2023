import { Product, productList, CartLine } from "./ProductList";

let cart: CartLine[] = [];
console.log("cart", cart)
class WebApi {

    addToCart = (product: Product) => {
        const findProduct = cart.find(find => find.itemId == product.id)
        console.log("findProduct", findProduct)
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
        // product.stock--;
        return [...cart];
    }

    removeFromCart = (product: Product) => {
        const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === product.id);
        const findProduct = cart.find(find => find.itemId == product.id);
        if(findProduct){
            findProduct.quantity++
        }  
        // const targetQuantity = cart.map((item) => {
        //     if(item.quantity > 0){
                
        //     }
        // }) 
        

        if (targetIndex !== -1) {
            cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
            return [...cart];
        }        
        return [...cart];
        // throw new Error("Could not find productId" + product.id.toString());
    }

    getProducts = () => {
        return productList;
    }
}

const webApi = new WebApi();

export default webApi;