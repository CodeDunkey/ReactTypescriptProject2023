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

export interface CartLine {
    itemId: number,
    quantity: number,
}

export enum Color {
    GREEN = "green",
    RED = "red",
    SEARCH = "search"
}
export interface ButtonProps {
    onClick: () => void;
    text: string;
    backgroundColor: Color;
}

export interface Picture {
    id: number,
    src: string,
    pictureSize: string
}

export type SetFunction = (product: Product) => void;

export type FindAndRemoveFromCartFun = (param: Product) => void;
