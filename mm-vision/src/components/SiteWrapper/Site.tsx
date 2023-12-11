import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import './Site.scss'
export default function Site(){
    return(
        <div className="siteWrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}