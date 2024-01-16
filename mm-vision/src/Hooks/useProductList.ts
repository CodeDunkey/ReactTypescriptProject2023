import { useEffect, useState } from "react"
import { Product } from "../components/Server/Database/ProductList"
import clientApi from "../Utilities/ClientApi"

export const useProductList = () => {
    const [loadingProductList, setLoadingProductList] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const get = async () => {
            setLoadingProductList(true);
            // console.log("loadingProductList: ", loadingProductList)
            const products = await clientApi.getProducts();
            // console.log("products from useProductList ", products)
            setLoadingProductList(false);
            // console.log("loadingProductList: ", loadingProductList)
            setProducts(products);
        }
        get();
    }, []);
    console.log("loadingProductList: ", loadingProductList)

    return {
        loading: loadingProductList,
        products
    };
} 