import {Component, ReactNode, useEffect, useState } from "react";
import './class.css'

interface Loading {
  isLoading: boolean,
}
class API2 extends Component<{}, Loading>{
  
  constructor(props: any) {
    super(props)
    
    this.state = {
      isLoading: false,
    };
    
  }
  
  handleBuyButtonClick() {
    this.setState({
      isLoading: true,
    })
    this.showLoadingIcon()
    // console.log("showLoadingIcon in handleClick", this.state.isLoading)
    setTimeout(() => {
      this.setState({
      isLoading: false,
    })
    this.updateCart()
    }, 3000); // Simulate 3-second delay
    
  }

  showLoadingIcon() {
    // console.log("showLoadingIcon")
    
    console.log('Loading icon shown');
    // console.log(this.state.isLoading) 
    return(
      <div className="spinner-background"><div className="spinner-icon"></div></div>
    )
  }
  updateCart() {
    console.log('Cart needs to update');
  }
    
  render(){
    return(
      <>
      <button onClick={this.handleBuyButtonClick.bind(this)}>API2</button>
      {console.log("showing the rendered state", this.state.isLoading)}
      {(this.state.isLoading)&&(this.showLoadingIcon())}    
      </>
      )
    }
  }
            
export default API2;



// interface APIState {
//   isLoading: boolean;
//   cart: number[]; // Simulate cart data as an array of numbers
// }

// class API extends Component<{}, APIState> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       isLoading: false,
//       cart: [],
//     };
//   }

//   // const [state: APIState] = useState({
//   //   isLoading: false,
//   //   cart: [],
//   // });

//   handleBuyButtonClick(): void {
//     this.setState((prevState: APIState) => ({
//       isLoading: true,
//       cart: prevState.cart,
//     }));

//     setTimeout(() => {
//       this.setState((prevState: APIState) => ({
//         isLoading: false,
//         cart: [
//           ...prevState.cart, // Prepend to the existing cart array
//           1, // Simulate adding to cart
//         ],
//       }));
//     }, 3000); // Simulate 3-second delay
    
//   }

//   render(): React.ReactElement<{}> {
//     return (
//       <div>
//         {this.state.isLoading && (
//           <div className="loading">Loading...</div>
//         )}
//         <button onClick={this.handleBuyButtonClick}>Buy</button>

//         <div className="spinner-background"><div className="spinner-icon"></div></div>
        
//         <p>Cart: {this.state.cart.length}</p>
//       </div>
//     );
//   }
// }


// export class Test extends Component {
  //     // constructor(props) {
    //     //     super(props);
    //     //     this.state = {
      //     //         testName: "",
      //     //         testNumber: 123,
      //     //         testArray: []
      //     //     }
      //     // }
      //     render(): ReactNode {
        //         return (
          //             <>
          //             </>
          //         )
          //     }
          // }




            // const api2 = new API2();
            //#endregion
            
            //#region 
            
            // class API extends Component {
//     constructor(props) {
  //       super(props);
  
  //       this.state = {
    //         isLoading: false,
    //         cart: [],
    //       };
    //     }
    
    //     handleBuyButtonClick() {
      //       this.setState((prevState) => ({
        //         isLoading: true,
        //         cart: prevState.cart,
        //       }));
  
//       setTimeout(() => {
//         this.setState((prevState) => ({
//           isLoading: false,
//           cart: prevState.cart.concat([1]), // Simulate adding to cart
//         }));
//       }, 3000); // Simulate 3-second delay
//     }
  
//     render() {
//       return (
//         <div>
//           {this.state.isLoading && <div className="loading">Loading...</div>}
//           <button onClick={this.handleBuyButtonClick}>Buy</button>
//           <p>Cart: {this.state.cart.length}</p>
//         </div>
//       );
//     }
//   }
  
//   export default API;
//#endregion


// // object literals. Et object der ikke kan bruges som skabelon. 
// const testObject1 = {
//     name: "square1",
//     height: 15,
//     width: 15,
//     area: function () {
//         return (
//             this.height * this.width
//         )
//     }
// }
// console.log("testObject1", testObject1.area());

// // Constructor Functions
// //#region 
// // constructor function. Kan bruges som skabelon
// function Square(this: any, name: string, width: number, height: number) {
    
//     this.name = name;
//     this.width = width;
//     this.height = height;
// }

// // creating a prototype for the function Square.
// Square.prototype.area  = function () {
//     return (
//         this.height * this.width
//     )
// };
// Square.prototype.isRectagle  = function () {
//     return (
//         this.height !== this.width
//     )
// };

// // Object.create
// const somePrototype = {
//     area: function ():any {
//         return( this.height * this.width )
//     },
//     perimeter: function (): any {
//         return(2*(this.height + this.width))
//     },
//     isSquare: function (): any {
//         return(this.height === this.width)
//     }
// }

// function createSome(height, width){
//     return Object.create(somePrototype, {
//         height:{value: height},
//         width:{value: width},
//     })
// };

// const someThing = createSome(10, 30);
// console.log("someThing.area", someThing.area())
// console.log("someThing.perimeter", someThing.perimeter())


// // an instance of Square1.
// // 1. a new object is created.
// // 2. the constructor is called with the argument that is passed in.
// // 3. the this key word is set to the new empty object.
// // 4. the new object is returned from the constructor function.
// const square1 = new Square("square1", 10, 30);

// console.log("square1 area", square1.area());
// console.log("square1 is rectagle? ", square1.isRectagle());
// console.log("square1", square1.constructor);

// // add a property.
// square1.color = "blue";
// console.log("square1 with color property: ", square1);


// const square2 = new Square("square2", 20, 40);
// console.log("square2", square2.area(), square2);

// // delete a property
// delete square2.name;
// console.log("square2 without name", square2);

// // another way of instanciat a function. 
// //the first part "x" is argument, the second part "return x*x" is the function body
// const functionObjct = new Function ("x", "return x*x");
// console.log("functionObjct", functionObjct(5));

// const test1 = class SomeThing1 {
//     // class mambers: constructors or methods.


//     // // method/funtion:
//     // myMethod2: function (){}
//     myMethod1() {
//         return (<>{123}</>)
//     }
// };

// function Player(this: any, name: string){
//     this.name = name;
//     this.lvl = 1;
//     this.points = 0;
// }

// Player.prototype.gainXp = function (this: any, xp: number){
//     this.points += xp;

//     if(this.points >= 10){
//         this.lvl++;
//         this.points -= 10;
//     }
//     console.log(this.describe())
// }

// Player.prototype.describe = function(this: any){
//     return(
//         `${this.name} is level ${this.lvl} with ${this.points} experience points`
//         ); 
// }

// const player1 = new Player("john");
// const player2 = new Player("Sue");

// player1.gainXp(4);
// player1.gainXp(3);
// player2.gainXp(5);
// player1.gainXp(6);
// player2.gainXp(3);
// player1.gainXp(1);
// player2.gainXp(2);
// player1.gainXp(7);
// player2.gainXp(4);
// player1.gainXp(1);
// player2.gainXp(9);

// console.log("Player 1: ", player1.describe())
// console.log("Player 2: ", player2.describe())
// //#endregion

// // A Class
// //#region 
// class SomethingNew {
//     constructor(name: string, width: number, height: number){
//         this.name = name;
//         this.width = width;
//         this.height = height;
//     }

//     area(){
//         return(
//             this.width * this.height
//         )
//     }

//     perimeter(){
//         return(
//             this.width * Math.PI
//         )
//     }
//     logPerimeter(){
//         console.log("logPerimeter: ", this.perimeter())
//     }
// }

// const square3 = new SomethingNew ("Circle", 10, 20)

// console.log("square3 area", square3.perimeter())
// console.log("square3 object of ", Object.getPrototypeOf(square3))
// square3.logPerimeter()
// //#endregion


// // Class inheritens
// //#region 

// // *Parent class
// class Shape {
//     constructor(name: string){
//         this.name = name;
//     }

//     logShapeNameFunc(){
//         console.log('Shape name: ' + this.name);
//     }
// }

// // Sub class of Shape
// class Circle1 extends Shape{
//     constructor(name, radius: number, height: number){
//         super(name);
//         this.radius  = radius;
//         this.height = height;
//     }
// }

// const circ1 = new Circle1("my circle", 10, 9999)

// console.log(circ1.height);
// circ1.logShapeNameFunc();

// // Sub class of Shape
// class Square2 extends Shape{
//     constructor(name, height: number, width: number){
//         super(name);
//         this.height = height;
//         this.width = width;
//     }

//     logShapeNameFunc(){
//         console.log('Square name: ' + this.name); 
//     }
// }

// const square4 = new Square2("my square", 15, 15)
// square4.logShapeNameFunc();
// console.log(square4 instanceof Square2)
// console.log(square4 instanceof Shape)
// console.log(square4 instanceof Circle1)
// //#endregion

// // Static Methods
// //#region 
// class SomeThing2 {
//     constructor(name: string, nr: number){
//         this.nAme = name;
//         this.nUmber = nr;
//     }

//     thisInfo(){
//         console.log("this info - number: ", this.nUmber);
//     }

//     // static method is a method that can only be called by the class,
//     // and NOT by an instansiasion of a class
//     static theClassId(){
//         return ("124abcd####");
//     } 
// }

// const some2 = new SomeThing2("Bob", 1234)
// console.log(some2.nAme)
// some2.thisInfo()
// console.log("Calling the static method trough the class from which it originate: ", SomeThing2.theClassId());
// console.log("Trying to call a static method trough an instance",some2.theClassId());
// //#endregion

// //

