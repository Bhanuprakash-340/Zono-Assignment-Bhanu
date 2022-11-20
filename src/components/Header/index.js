import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component{

    render(){
        return (
            <div className='header-component'>
                <div className='logo-container'>
                    Z
                </div>
                <div className='header-buttons-container'>
                    <Link to="/">
                        <button type="button" className='header-buttons'>Brands</button>    
                    </Link>
                    <Link to="/products">
                        <button type="button" className='header-buttons'>Products</button>
                    </Link>
                    <Link to="/cart">
                        <button type="button" className='header-buttons'>Cart</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header