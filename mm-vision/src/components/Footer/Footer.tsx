import './Footer.scss'

const footerBanner = <div className='footerBannerWrapper'>
    <div className='category'>information</div>
    <div className='category'>Kategori</div>
    <div className='category'>din konto</div>
    <div className='category'>kontakt</div>
</div>

const subCategories = <div className='subCategoriesWrapper'>
    <div className='subCategories'></div>
    <div className='subCategories'></div>
    <div className='subCategories'></div>
    <div className='subCategories'></div>
</div>

const footerContent = <div className='footerContentWrapper'>
    
</div>

const copyright = <div className='copyright'>
    
</div>

export default function Footer(){
    return(
        <div className='footerWrapper'>
            {footerBanner}
            {subCategories}
            {footerContent}
            {copyright}
        </div>
    )
}