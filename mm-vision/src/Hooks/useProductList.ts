import { useEffect, useState } from "react"
import { server } from "../components/Server/Server"
import { productList, Product } from "../Data/ProductList"

export const useProductList = () => {
    const [loadingProductList, setLoadingProductList] = useState(false)
    const [products, setProducts] = useState<string[]>([]);
 
    useEffect(() => {
        const get = async () => {
           setLoadingProductList(true);
            const products = await getProducts();
            setLoadingProductList(false);
            setProducts(products);
        }
 
        get();
    }, []);
 
    return {
        loading: loadingProductList,
        products
    };
} 