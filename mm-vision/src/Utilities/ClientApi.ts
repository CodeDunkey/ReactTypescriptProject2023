import { resolve } from "path";
import { Product, CartLine } from "../components/Server/Database/ProductList";
import { serverApi } from "../components/Server/Utillties/ServerApi";
import { rejects } from "assert";


class ClientAPI {
    
    // async
    // addToCart = async (product: Product) => {
    //     console.log("cart from ClientApi", cart)
    //     // skal dette flyttes over i useCart??
    //     const findProduct = cart.find(find => find.itemId == product.id)
        
    //     if(findProduct){
    //         new Promise((resolve, reject) => {
    //             setTimeout(() =>{
    //                 resolve(findProduct.quantity++)
    //             }, 1500);
    //         });
    //         // findProduct.quantity++
    //     }        
    //     if(!findProduct){
    //         const addToCart: CartLine = {
    //             itemId: product.id, 
    //             quantity: 1
    //         }
    //         cart.push(addToCart);
    //     }
        
        
    //     return new Promise<CartLine[]>((resolve, reject) => {
    //         setTimeout(() =>{
    //             resolve([...cart])
    //         }, 1500);
    //     });
        
    //     // return [...cart]
    // }
    // removeFromCart = async (product: Product) => {
    //     // skal dette flyttes over i useCart??
    //     const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === product.id);
    //     const findProduct = cart.find(find => find.itemId == product.id);
    //     if(findProduct){
            
    //         new Promise((resolve, reject) => {
    //             setTimeout(() =>{
    //                 findProduct.quantity--
    //                 resolve([...cart])
    //             }, 1500);
    //         }); 
    //         //findProduct.quantity--
    //     }
        
    //     if (targetIndex !== -1 && findProduct?.quantity === 0) {
    //         cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
    //         return new Promise<CartLine[]>((resolve, reject) => {
    //             setTimeout(() =>{
    //                 resolve([...cart])
    //             }, 1500);
    //         }); 
    //         // return [...cart];
    //     }  
    //     return new Promise<CartLine[]>((resolve, reject) => {
    //         setTimeout(() =>{
    //             resolve([...cart])
    //         }, 1500);
    //     });      
    //     // return [...cart];
    // }
    getProducts = () => {
        return serverApi.getProducts();
    }
    getCart = () => {
        return serverApi.getCart()
    }
    
}

const clientApi = new ClientAPI();

export default clientApi;


// getProducts = async () => {
    //     const products = await fetch("http://example.com/movies.json");
    //     return productList;
    // }