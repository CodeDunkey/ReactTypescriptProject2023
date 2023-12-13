import classNames from "classnames"
import './Button.scss'

export default function Button({click=()=>{alert("no function")},text="Im A Button", backgroundColor=""}){
    
    const classNamesString = classNames(`button__${backgroundColor}`);
       
    return(<button className={classNamesString} onClick={click}>{text}</button> )
}

// var classNames = require('classnames');

// export default function Button({click=()=>{alert("I dont do anything")}, text="Im a button", rounded, isFaded,fullWidth, borderColor, backgroundColor}){
//     // console.log(`button__background-color--${backgroundColor} ${rounded ? 'button--rounded-corners' : ''} button__border-color--${borderColor}`);
//     const classNamesString = classNames(`button__background-color--${backgroundColor} button__border-color--${borderColor}`,
//      {
//         'button--rounded-corners': rounded,
//         'button--rounded-faded': isFaded,
//         'button--rounded-full-width': fullWidth,
//     }, {});

//     // console.log(classNamesString);

//     return(
//          <button className={classNamesString} onClick={click} >{text}</button>
//     )
// }

{/* <Button rounded borderColor="blue" backgroundColor="lightgrey" click={()=>addQuantity(product.productID , product)} largeText text="Add to cart"/> */}