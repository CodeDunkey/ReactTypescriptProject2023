import { Picture } from '../../../Types/Types'
import './InfoBar.scss'

export default function InfoBar({pictures}: {pictures: Picture[]}) {
    return (
        <div className='infoBarTop'>
            Gratis Fragt |
            1-3 dages produktionstid |
            Salg Til Private, erhverv og ean |
            En del af mm-vision
        </div>
    )
}