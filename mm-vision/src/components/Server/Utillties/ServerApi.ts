import { rejects } from "assert";
import { resolve } from "path";
import { productList, Product, CartLine } from "../Database/ProductList";

let cart: CartLine[] = [];

class ServerAPI {
     
    // returns a promise wih a delay
    getProducts = async () => {
    const products: Product[] = productList;
     console.log("getProducts");
     return new Promise<Product[]>((resolve, reject) => {
        setTimeout(() => {
        console.log("Returning products");
        resolve(products)
    }, 3000);    
     })
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

    addToCart = async (product: Product) => {
        console.log("cart from ClientApi", cart)
        // skal dette flyttes over i useCart??
        const products: Product[] = productList;

        const findCartItem = cart.find(find => find.itemId == product.id)
        
        // const findProduct = productList.map((item)=>{
            // const findProduct = item.find(find => find.)
        // })

        if(findCartItem){
            new Promise((resolve, reject) => {
                setTimeout(() =>{
                    findCartItem.quantity++
                      
                    resolve([...cart])
                }, 1500);
            });
            // findCartItem.quantity++
        }        
        if(!findCartItem){
            const addToCart: CartLine = {
                itemId: product.id, 
                quantity: 1
            }
            cart.push(addToCart);
        }
        
        
        return new Promise<CartLine[]>((resolve, reject) => {
            setTimeout(() =>{
                resolve([...cart])
            }, 1500);
        });
        
        // return [...cart]
    }
    removeFromCart = async (product: Product) => {
        // skal dette flyttes over i useCart??
        const targetIndex = cart.findIndex(cartProduct => cartProduct.itemId === product.id);
        const findCartItem = cart.find(find => find.itemId == product.id);
        if(findCartItem){
            
            new Promise<CartLine[]>((resolve, reject) => {
                setTimeout(() =>{
                    findCartItem.quantity--
                    resolve([...cart])
                }, 1500);
            }); 
            //findCartItem.quantity--
        }
        
        if (targetIndex !== -1 && findCartItem?.quantity === 0) {
            cart = [...cart.slice(0, targetIndex), ...cart.slice(targetIndex + 1)];
            return new Promise<CartLine[]>((resolve, reject) => {
                setTimeout(() =>{
                    resolve([...cart])
                }, 1500);
            }); 
            // return [...cart];
        }  
        return new Promise<CartLine[]>((resolve, ) => {
            setTimeout(() =>{
                resolve([...cart])
            }, 1500);
        });      
        // return [...cart];
    }

}

export const serverApi = new ServerAPI();





// fetching = () => {
//     const fetching = fetch('http://dr.dk');
//     console.log("fetching: ", fetching)
    
    
//     return fetching
// }

//#region 


// nedenfor skal i WebAPI class

 

// var getProducts = async () => {

//    var products = ["product1", "product"];

//     console.log("getProducts");

//     return new Promise((resolve, reject) => {

//        setTimeout(() => {

//        console.log("Returning products");

//        resolve(products)

//    }, 2000);     

//     })

//    return result;

// }
 
// var startFetchingProducts = async () => {

//     var products = await getProducts();

//     console.log("products", products);

// }
 
// startFetchingProducts();
//#endregion

//#region Test example

// const userOnline: boolean = true;
// const userStreaming: boolean = true;

// class TestWebAPI {
    
//     testCallBack = (callback: any, errorCallback: any)=>{
//         if(!userOnline){
//             errorCallback({
//                 message: "user offline"
//             })
//         }
//         else if(userStreaming){
//             errorCallback({
//                 message: "user are streaming"
//             })
//         }
//         else{
//             callback("WebAPI is not used!!")
//         }
//     }

//     testPromise(){
//         return new Promise((resolve, reject) => {
//             if(!userOnline){
//                 reject({
//                     message: "user offline"
//                 })
//             }
//             else if(userStreaming){
//                 reject({
//                     message: "user are streaming"
//                 })
//             }
//             else{
//                 resolve("WebAPI is not used!!")
//             }    
//         }
//         )}
// }

// export const testWebAPI = new TestWebAPI();
// testWebAPI.testCallBack((message: any) => {
//     console.log("" + message)
// }, (error: any) => {
//     console.log(error.message + " " + error.message)
// })


// const promise = new Promise((resolve, rejects) => {
//     const cart: number = 5;
//     if(cart == 4){
//         resolve('success')
//     }
//     else{
//         rejects('failed')
//     }
// })

// promise.then((message)=>{
//     console.log("resolving was a " + message)
// }).catch((message)=>{
//     console.log("the promise was rejected and " + message)
// })

//#endregion

// function doStep1(init: number, callback: any) {
//     const result: number = init + 1;
//     callback(result);
//   }
  
//   function doStep2(init: number, callback: any) {
//     const result: number = init + 2;
//     callback(result);
//   }
  
//   function doStep3(init: number, callback: any) {
//     const result: number = init + 3;
//     callback(result);
//   }
  
//   function doOperation() {
//     doStep1(0, (result1: number) => {
//       doStep2(result1, (result2: number) => {
//         doStep3(result2, (result3: number) => {
//           console.log(`result is *: ${result3}`);
//         });
//       });
//     });
//   }
  
//   doOperation();

//   function step1(init: number, callback: any){
//     const resultOfStep1: number = init + 1
//     callback(resultOfStep1);
//   }
//   function doTheSteps(){
//     step1(20, (resultOfResult1: number) => {
//         console.log("resultOfResult1", resultOfResult1)

//     })
//   }

//   doTheSteps();
