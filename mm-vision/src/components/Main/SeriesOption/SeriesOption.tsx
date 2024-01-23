import {Button} from "../../Button/Button"
import { Color } from "../../../Types/Types"
import './SeriesOption.scss'

export default function SeriesOption(){
    return(<div className='seriesOptionWrapper'>
        <div className="buttonSize"><Button backgroundColor={Color.RED} text="VISION GAMING SERIESN" onClick={()=>{}}/></div>
        <div className="buttonSize"><Button backgroundColor={Color.RED} text="CORSAIR HYDRO SEIREN" onClick={()=>{}}/></div>
        <div className="buttonSize"><Button backgroundColor={Color.RED} text="BÆRBARE COMPUTERE" onClick={()=>{}}/></div>
    </div>)
}