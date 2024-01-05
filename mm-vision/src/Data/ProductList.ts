export interface Product {
    individualRandomNr: number
    id: number
    type: string
    model: string
    description: string
    picture: string
    price: number
    stock: number
    deliveryTime: string
}

export const productList: Product[] = [
    {
        individualRandomNr: Math.random(),
        id: 1,
        type: "PC",
        model: "aX",
        description: "missing",
        picture: "abc",
        price: 3000,
        stock: 10,
        deliveryTime: "7 dage"
    },
    {
        individualRandomNr: Math.random(),
        id: 2,
        type: "PC",
        model: "bX",
        description: "a",
        picture: "abc",
        price: 4000,
        stock: 0,
        deliveryTime: "14 dage"
    },
    {
        individualRandomNr: Math.random(),
        id: 3,
        type: "Laptop",
        model: "cX",
        description: "a",
        picture: "abc",
        price: 7000,
        stock: 10,
        deliveryTime: "3 dage"
    },
    {
        individualRandomNr: Math.random(),
        id: 4,
        type: "Tilbehør Bundle",
        model: "dX",
        description: "a",
        picture: "abc",
        price: 1000,
        stock: 3,
        deliveryTime: "4 dage"
    },
    {
        individualRandomNr: Math.random(),
        id: 5,
        type: "Mekanisk Keyboard",
        model: "eX",
        description: "a",
        picture: "abc",
        price: 600,
        stock: 0,
        deliveryTime: "3 dage"
    },
    {
        individualRandomNr: Math.random(),
        id: 6,
        type: "PC",
        model: "fX",
        description: "a",
        picture: "abc",
        price: 8500,
        stock: 15,
        deliveryTime: "6 dage"
    },
];

export type SetFunction = React.Dispatch<React.SetStateAction<Product[]>>;
export type FindAndRemoveFromCartFun = (param: number) => void;