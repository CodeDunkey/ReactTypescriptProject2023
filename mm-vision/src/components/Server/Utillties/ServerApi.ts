import { rejects } from "assert";
import { resolve } from "path";
import { productList} from "../Database/ProductList";
import { Product, CartLine, Picture } from "../../../Types/Types";
import { pictureList } from "../Database/PictureArray";

let cart: CartLine[] = [];

class ServerAPI {
    // returns a promise wih a delay
    getProducts = async () => {
    const products: Product[] = productList;
    //  console.log("getProducts");
     return new Promise<Product[]>((resolve, reject) => {
        setTimeout(() => {
        // console.log("Returning products");
        resolve(products)
    }, 3000);    
     })
    }
    
    getPictures = async () => {
        const pictures: Picture[] = pictureList;
        //  console.log("getPictures");
         return new Promise<Picture[]>((resolve, reject) => {
            setTimeout(() => {
            // console.log("Returning pictures");
            resolve(pictures)
        }, 3000);    
         })
    }

    addToCart = async (product: Product) => {
        // flyttet fra ClientApi
        const findCartItem = cart.find(find => find.itemId == product.id)
        
        if(findCartItem){
            new Promise((resolve, reject) => {
                setTimeout(() =>{
                    findCartItem.quantity++
                    product.stock--
                    resolve([...cart])
                }, 1500);
            });    
        }        
        if(!findCartItem){
            const addToCart: CartLine = {
                itemId: product.id, 
                quantity: 1
            }
            setTimeout(() =>{
                product.stock--
            }, 1500);
            cart.push(addToCart);
        }
        
        
        return new Promise<CartLine[]>((resolve, reject) => {
            setTimeout(() =>{
                resolve([...cart])
            }, 1500);
        });
    }
    removeFromCart = async (product: Product) => {
        // flyttet fra ClientApi
        const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === product.id);
        const findCartItem = cart.find(find => find.itemId == product.id);
        if(findCartItem){
            new Promise<CartLine[]>((resolve, reject) => {
                setTimeout(() =>{
                    findCartItem.quantity--
                    product.stock++
                    resolve([...cart])
                }, 1500);
            }); 
        }
        
        if (targetIndex !== -1 && findCartItem?.quantity === 0) {
            cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
            return new Promise<CartLine[]>((resolve, reject) => {
                setTimeout(() =>{
                    product.stock++
                    resolve([...cart])
                }, 1500);
            }); 
        }  
        return new Promise<CartLine[]>((resolve, ) => {
            setTimeout(() =>{
                resolve([...cart])
            }, 1500);
        });      
    }
    // getCart = async () => {
    //     const theCart: CartLine[] = cart;
    //     console.log("getCart");
    //  return new Promise<CartLine[]>((resolve, reject) => {
    //     setTimeout(() => {
    //     console.log("Returning cart");
    //     resolve(theCart)
    // }, 2000);    
    //  })
    // }
}
export const serverApi = new ServerAPI();