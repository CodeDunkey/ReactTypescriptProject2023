import { Product } from "../Types/Types";
import { serverApi } from "../components/Server/Utillties/ServerApi";

class ClientAPI {
    
    addToCart = async (product: Product) => {

        return serverApi.addToCart(product)
        
    }
    removeFromCart = async (product: Product) => {

        return serverApi.removeFromCart(product)
        
    }
    getProducts = () => {
        return serverApi.getProducts();
    }

    getPictures = async () =>{
        return serverApi.getPictures();
    }
    // getCart = () => {
    //     return serverApi.getCart()
    // } 
}
const clientApi = new ClientAPI();
export default clientApi;