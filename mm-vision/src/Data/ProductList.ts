// skal bruge en stock status og leveringstid på produkterne
interface Product {
    type: string
    model: string
    describtion: string
    picture: string
}

export const productList: Product[] = [
    {
        type: "PC",
        model: "aX",
        describtion: "missing",
        picture: "abc"
    },
    {
        type: "PC",
        model: "bX",
        describtion: "a",
        picture: "abc"
    },
    {
        type: "Laptop",
        model: "cX",
        describtion: "a",
        picture: "abc"
    },
    {
        type: "Tilbehør Bundle",
        model: "dX",
        describtion: "a",
        picture: "abc"
    },
    {
        type: "Mekanisk Keyboard",
        model: "eX",
        describtion: "a",
        picture: "abc"
    },
    {
        type: "PC",
        model: "fX",
        describtion: "a",
        picture: "abc"
    },
];