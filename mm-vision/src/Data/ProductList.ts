// skal bruge en stock status og leveringstid på produkterne
export interface Product {
    individualRandomNr: number
    id: number
    type: string
    model: string
    description: string
    picture: string
    price: number
}

export const productList: Product[] = [
    {
        individualRandomNr: Math.random(),
        id: 1,
        type: "PC",
        model: "aX",
        description: "missing",
        picture: "abc",
        price: 3000
    },
    {
        individualRandomNr: Math.random(),
        id: 2,
        type: "PC",
        model: "bX",
        description: "a",
        picture: "abc",
        price: 4000
    },
    {
        individualRandomNr: Math.random(),
        id: 3,
        type: "Laptop",
        model: "cX",
        description: "a",
        picture: "abc",
        price: 7000
    },
    {
        individualRandomNr: Math.random(),
        id: 4,
        type: "Tilbehør Bundle",
        model: "dX",
        description: "a",
        picture: "abc",
        price: 1000
    },
    {
        individualRandomNr: Math.random(),
        id: 5,
        type: "Mekanisk Keyboard",
        model: "eX",
        description: "a",
        picture: "abc",
        price: 600
    },
    {
        individualRandomNr: Math.random(),
        id: 6,
        type: "PC",
        model: "fX",
        description: "a",
        picture: "abc",
        price: 8500
    },
];

console.log("productList", productList);

export type SetFunction = React.Dispatch<React.SetStateAction<Product[]>>;
export type FindAndRemoveFromCartFun = (param: number) => void;