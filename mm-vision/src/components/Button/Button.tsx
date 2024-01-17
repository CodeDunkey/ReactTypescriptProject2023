import classNames from "classnames"
import { ButtonProps } from "../../Types/Types";
import './Button.scss'

export function Button({ onClick, text, backgroundColor}: ButtonProps){
    
    const classNamesString = classNames(`button__${backgroundColor}`);
       
    return(<button className={classNamesString} onClick={onClick}>{text}</button> )
}