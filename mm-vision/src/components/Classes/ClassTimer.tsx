import { Component, ReactNode } from "react";
export class Test extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         testName: "",
    //         testNumber: 123,
    //         testArray: []
    //     }
    // }
    render(): ReactNode {
        return (
            <>
            </>
        )
    }
}


// object literals. Et object der ikke kan bruges som skabelon. 
const testObject1 = {
    name: "square1",
    height: 15,
    width: 15,
    area: function () {
        return (
            this.height * this.width
        )
    }
}
console.log("testObject1", testObject1.area());

// constructor function. Kan bruges som skabelon
function Square(this: any, name: string, width: number, height: number) {
    
    this.name = name;
    this.width = width;
    this.height = height;
}

// creating a prototype for the function Square.
Square.prototype.area  = function () {
    return (
        this.height * this.width
    )
};
Square.prototype.isRectagle  = function () {
    return (
        this.height !== this.width
    )
};

// Object.create
const somePrototype = {
    area: function ():any {
        return( this.height * this.width )
    },
    perimeter: function (): any {
        return(2*(this.height + this.width))
    },
    isSquare: function (): any {
        return(this.height === this.width)
    }
}

function createSome(height, width){
    return Object.create(somePrototype, {
        height:{value: height},
        width:{value: width},
    })
};

const someThing = createSome(10, 30);
console.log("someThing.area", someThing.area())
console.log("someThing.perimeter", someThing.perimeter())


// an instance of Square1.
// 1. a new object is created.
// 2. the constructor is called with the argument that is passed in.
// 3. the this key word is set to the new empty object.
// 4. the new object is returned from the constructor function.
const square1 = new Square("square1", 10, 30);

console.log("square1 area", square1.area());
console.log("square1 is rectagle? ", square1.isRectagle());
console.log("square1", square1.constructor);

// add a property.
square1.color = "blue";
console.log("square1 with color property: ", square1);


const square2 = new Square("square2", 20, 40);
console.log("square2", square2.area(), square2);

// delete a property
delete square2.name;
console.log("square2 without name", square2);

// another way of instanciat a function. 
//the first part "x" is argument, the second part "return x*x" is the function body
const functionObjct = new Function ("x", "return x*x");
console.log("functionObjct", functionObjct(5));

const test1 = class SomeThing1 {
    // class mambers: constructors or methods.


    // // method/funtion:
    // myMethod2: function (){}
    myMethod1() {
        return (<>{123}</>)
    }
};

function Player(this: any, name: string){
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (this: any, xp: number){
    this.points += xp;

    if(this.points >= 10){
        this.lvl++;
        this.points -= 10;
    }
    console.log(this.describe())
}

Player.prototype.describe = function(this: any){
    return(
        `${this.name} is level ${this.lvl} with ${this.points} experience points`
        ); 
}

const player1 = new Player("john");
const player2 = new Player("Sue");

player1.gainXp(4);
player1.gainXp(3);
player2.gainXp(5);
player1.gainXp(6);
player2.gainXp(3);
player1.gainXp(1);
player2.gainXp(2);
player1.gainXp(7);
player2.gainXp(4);
player1.gainXp(1);
player2.gainXp(9);

console.log("Player 1: ", player1.describe())
console.log("Player 2: ", player2.describe())


class SomethingNew {
    constructor(name: string, width: number, height: number){
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area(){
        return(
            this.width * this.height
        )
    }

    perimeter(){
        return(
            this.width * Math.PI
        )
    }
    logPerimeter(){
        console.log("logPerimeter: ", this.perimeter())
    }
}

const square3 = new SomethingNew ("Circle", 10, 20)

console.log("square3 area", square3.perimeter())
console.log("square3 object of ", Object.getPrototypeOf(square3))
square3.logPerimeter()

