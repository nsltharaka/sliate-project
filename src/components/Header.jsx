import { BsSuitHeart, BsCart3 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import logo_image from '../images/logo.png'
import useAppContext from '../useAppContext'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const { mobileNavOpen, setMobileNavOpen, setSearchTerm } = useAppContext()

    const toggle = () => {
        setMobileNavOpen(prev => !prev)
    }

    const closeNav = () => {
        setMobileNavOpen(false)
    }

    return (
        <header>
            <Link to="/">
                <img className='logo-image' src={logo_image} alt="jenny's collection" />
            </Link>
            <nav className="navBar-container">
                <ul className={`navBar ${mobileNavOpen && 'open'}`}>
                    <li className="navBar-item" onClick={closeNav}>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <li className="navBar-item" onClick={closeNav}>
                        <NavLink to="/about" >About Us</NavLink>
                    </li>
                    <li className="navBar-item product-links" onClick={() => { closeNav(); setSearchTerm(""); }}>
                        <NavLink to="/products" >Products ▾</NavLink>
                        <div className="links">
                            <ul>
                                <li className='link' onClick={(e) => { e.stopPropagation(); setSearchTerm("scrunchie") }}>
                                    <Link to="/products">scrunchies</Link>
                                </li>
                                <li className='link' onClick={(e) => { e.stopPropagation(); setSearchTerm("tail scrunchie") }}>
                                    <Link to="/products">tail scrunchies</Link>
                                </li>
                                <li className='link' onClick={(e) => { e.stopPropagation(); setSearchTerm("head band") }}>
                                    <Link to="/products">head bands</Link>
                                </li>
                                <li className='link' onClick={(e) => { e.stopPropagation(); setSearchTerm("hair tie") }}>
                                    <Link to="/products">hair ties</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="shortcuts">
                <a href="#contact">
                    <button className="shortcut-button">
                        <BsSuitHeart />
                    </button>
                </a>
                <Link to="/cart">
                    <button className="shortcut-button">
                        <BsCart3 />
                    </button>
                </Link>
                {
                    mobileNavOpen ? <AiOutlineClose className='mobileNav-toggle fixed' onClick={toggle} />
                        : <GiHamburgerMenu className='mobileNav-toggle' onClick={toggle} />
                }
            </div>
        </header>
    )

}