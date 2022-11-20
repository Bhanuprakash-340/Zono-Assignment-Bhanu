import {Component} from 'react'
import BrandCards from '../BrandCards';
import axios from "axios";
import './index.css'

class Brands extends Component{

    state = {brandsList:[]}

    componentDidMount(){
        this.getBrandsList()
    }

    getBrandsList = async () =>{
        await axios.get("https://c4568528-b078-4d98-a6c5-a5525077d2c8.mock.pstmn.io/e-commerce-all-products").then((response) => {
            this.setState({brandsList:response.data})
          });
    }

    

    onChangeBrandCards = (brand) =>{
        console.log(brand)
    }


    render(){
        const {brandsList} = this.state
        return(
            <>
                <h1 className='brand'>Brands</h1>
                <ul className='brand-container'>
                    {brandsList.map((eachBrand,index) =>(
                        <BrandCards brandsData={eachBrand} indexes={index} key={index} activeButton={this.onChangeBrandCards}/>
                    ))}
                </ul>
                </>
        )
    }
}

export default Brands