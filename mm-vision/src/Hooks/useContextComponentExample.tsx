import { useContext } from "react";
import { contextCreate } from "./useContextCreateContext";
// Her skal useContext bruges
// export const CartContext = React.createContext<unknown>("")

// useCart Hook

export const ContextExample = () => {
    
    const showBool = useContext(contextCreate)
    console.log(showBool)
    // const changeBool = ()=> {
//     setTrueOrFalse(flip => !flip)
// }
    // console.log("trueOrFalse is : ", trueOrFalse)
    return (
        
        <button >Bool is: {showBool.valueOf()} {showBool}</button>
        )

}

// export const useCart = () => {
//     const [loadingCart, setLoadingCart] = useState<boolean>(false) // useContext
//     const [cart, setCart] = useState<CartLine[]>([]); // useContext
    
//     const addToCart = async (item: Product) => {
//         setLoadingCart(true)
//         let cartLine = await clientApi.addToCart(item);
//         setLoadingCart(false);
//         setCart(cartLine);
//     }
    
//     const removeFromCart =  async (product: Product) => {
//         setLoadingCart(true);
//         let cart = await clientApi.removeFromCart(product);
//         setLoadingCart(false);
//         setCart(cart);
//     }

//     return {
//         loadingCart: loadingCart,
//         cart,
//         addToCart,
//         removeFromCart
//     }
// }