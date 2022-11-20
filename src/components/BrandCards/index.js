import './index.css'

const BrandCards = props =>{
    const {brandsData,activeButton} = props 
    const {brandIcon,brand} = brandsData

    const onClickBrandButton = () =>{
        activeButton(brand)
    }

    return (
        <li className="each-brand">
            <button className='brand-button' onClick={onClickBrandButton}>
            <div className='image-container'>
                <img src={brandIcon} alt={brand} className="brand-icon"/> 
                </div>
                <div className='brand-text-container'>
                    <h4 className='brand-name'>{brand}</h4>
                    <p className='count-text'>products count : 10</p>
                </div>
            </button>
        </li>
    )
}

export default BrandCards