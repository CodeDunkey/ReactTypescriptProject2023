import nySlidePict1 from '../Assets/nySlidePict1.png'
import nySlidePict2 from '../Assets/nySlidePict2.png'
import nySlidePict3 from '../Assets/nySlidePict3.png'
import nySlidePict4 from '../Assets/nySlidePict4.png'
import BærbareComputere from '../Assets/BærbareComputere.png'
import CartLogo from '../Assets/CartLogo.png'
import CorsairHydroSeries from '../Assets/CorsairHydroSeries.png'
import LoadingIconSmall from '../Assets/LoadingIconSmall.png'
import VisionGamingSeries from '../Assets/VisionGamingSeries.png'
import iconCheck from '../Assets/icon-check.png'
import mmVisionLogo from '../Assets/mm-visionLogo.png'
import spinnerOfDots from '../Assets/spinner-of-dots.png'
import udvalgteProdukterRaptorGamingComputer from '../Assets/udvalgteProdukterRaptorGamingComputer.png'
import udvalgteProdukterPreditorGamingStationær from '../Assets/udvalgteProdukterPreditorGamingStationær.png'
import UdvalgteProdukterCorsairHs80UsbHeadsetUdenBaggrund from '../Assets/UdvalgteProdukterCorsairHs80UsbHeadsetUdenBaggrund.png'
import udvalgteProdukterCorsairRefurbishedHS35StereoGamingHeadset from '../Assets/udvalgteProdukterCorsairRefurbishedHS35StereoGamingHeadset.png'

import { Picture } from '../../../Types/Types'

export const pictureList: Picture[] = [
    { id: 1, src: nySlidePict1, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 2, src: nySlidePict2, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 3, src: nySlidePict3, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 4, src: nySlidePict4, pictureSize: "cover", Header: "", ListItems: [{li: ""}] },
    { id: 5, src: VisionGamingSeries, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 6, src: CartLogo, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 7, src: CorsairHydroSeries, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 8, src: LoadingIconSmall, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 9, src: BærbareComputere, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 10, src: iconCheck, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 11, src: mmVisionLogo, pictureSize: "cover", Header: "", ListItems: [{li: ""}]  },
    { id: 12, src: spinnerOfDots, pictureSize: "cover", Header: "", ListItems: [{li: ""}] },
    { id: 13, src: udvalgteProdukterRaptorGamingComputer, pictureSize: "cover", Header: "", ListItems: [
        {li: "Corsair KSS RBG Pro keybord"},
        {li: "Corsair Harpoon RGB Pro mus"},
    ]  },
    { id: 14, src: udvalgteProdukterPreditorGamingStationær, pictureSize: "cover", Header: "Predator gaming stationær", ListItems: [
        {li: "Asus Z790-Plus TUF Wifi bundkort"},
        {li: "Intel Core i7/i9 14.gen K-model"},
        {li: "64-96GB DDR5-6000 RAM"},
        {li: "2 - 4TB SSD PCIe 4.0 NVMe"},
        {li: "Asus GeForce RTX 4080 16GB ProArt"}
    ]  },
    { id: 15, src: UdvalgteProdukterCorsairHs80UsbHeadsetUdenBaggrund, pictureSize: "cover", Header: "", ListItems: [
        {li: "Corsair KSS RBG Pro keybord"},
        {li: "Corsair Harpoon RGB Pro mus"},
    ] },
    { id: 16, src: udvalgteProdukterCorsairRefurbishedHS35StereoGamingHeadset, pictureSize: "cover", 
    Header: "Corsair Refurbished HS35 Stereo Gaming Headset", ListItems: [
        {li: "Gamingheadset"},
        {li: "Stereo, 50 mm. driver"},
        {li: "35 mm. minijack"},
    ] }
]