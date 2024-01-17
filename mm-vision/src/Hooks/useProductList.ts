import { useEffect, useState } from "react"
import { Product } from "../Types/Types"
import clientApi from "../Utilities/ClientApi"

export const useProductList = () => {
    const [loadingProductList, setLoadingProductList] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const get = async () => {
            setLoadingProductList(true);
            const products = await clientApi.getProducts();
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