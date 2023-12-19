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
        return(
            <>
            </>
        )
    }
}

const test1 = class SomeThing1 {
    // class mambers: constructors or methods.



    // // method/funtion:
    // myMethod2: function (){}
    myMethod1 (){
        return(<>{123}</>)
    }
};