import React,{useState} from 'react'
import { Button } from '../Button';
import Logo from '../../images/logo.svg'

// import * as MenuItems from './MenuItems'
import './Navbar.css'

var click = false;
const Navbar = () => {
    const MenuItems = [
        {
            title: 'Features',
            url: '#',
            cName:'nav-links'
        },
        {
            title: 'Price',
            url: '#',
            cName:'nav-links'
        },
        {
            title: 'Resources',
            url: '#',
            cName:'nav-links'
        },
        {
            title: '',
            url:'',
            cName:'horizontal'
        },
        {
            title: 'Login',
            url: '#',
            cName:'nav-links-login'
        },
        {
            title: 'Sign up',
            url: '#',
            cName:'nav-links-signup'
        },
    ]

    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <nav className="NavbarItems">
            <img src={Logo} className="navbar-logo"/>
            <div className="menu-icon" onClick={handleClick}>
                <i className={'fas fa-bars'}></i>
                {/* <i className={clicked?'fas fa-times':'fas fa-bars'}></i> */}

            </div>
            <ul className={clicked?'nav-menu active':'nav-menu'}>
                {MenuItems.map((items,index) => {
                    return (
                        <li key={index}>
                            <a className={items.cName} href={items.url}>
                                {items.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
