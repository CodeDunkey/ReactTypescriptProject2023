import { useEffect, useState } from "react"
import { Picture, Product } from "../Types/Types"
import clientApi from "../Utilities/ClientApi"

export const usePictures = () => {
    const [loadingPictureList, setLoadingPictureList] = useState<boolean>(false)
    const [pictures, setPictures] = useState<Picture[]>([]);
    
    useEffect(() => {
        const get = async () => {
            setLoadingPictureList(true);
            const pictures = await clientApi.getPictures();
            setLoadingPictureList(false);
            setPictures(pictures);
            
        }
        get();
    }, []);

    return {
        loadingPicture: loadingPictureList,
        pictures
    };
} 