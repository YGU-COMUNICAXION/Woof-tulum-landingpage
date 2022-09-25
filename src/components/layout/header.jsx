import React, {useState} from "react"
import Logo from "../../images/mobile/layout/header/logo.svg"
import Menu from "../../images/mobile/layout/header/pata menú.svg"
import { Link } from "gatsby"
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"

const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;

    nav {
        display: flex;
        justify-content: space-between;
        width: 40%;
        padding: 3% 10% 2% 2%;
    }
    nav a {
        font-family: 'G Regular';
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
    >div:nth-child(1) img {
        width: 40%;
    }
    >div:nth-child(1) {
        padding: 1% 1% 1% 5%;
    }
    >div:nth-child(3) {
        display: flex;
        justify-content: space-around;
    }
    >div:nth-child(3) img {
        width: 35%;
    }

    @media only screen and (min-width: 1700px) {
        >div:nth-child(1) img {
            width: 60%;
        }
        nav a {
            font-size: 35px;
        }
        >div:nth-child(3) img {
            width: 45%;
        }
    }

    @media only screen and (min-width: 2900px) {
        >div:nth-child(1) img {
            width: 80%;
        }
        nav a {
            font-size: 50px;
        }
        >div:nth-child(3) img {
            width: 55%;
        }
        >div:nth-child(3) {
            width: 10%;
        }
    }
    @media only screen and (min-width: 4000px) {
        >div:nth-child(1) img {
            width: 90%;
        }
        nav a {
            font-size: 55px;
        }
        >div:nth-child(3) {
            width: 13%;
        }
        >div:nth-child(3) img {
            width: 65%;
        }
    }
    @media only screen and (max-width: 1040px) {
        nav {
            width: 45%;
        }
        nav a {
            font-size: 16px;
        }
        >div:nth-child(3) img {
            width: 40%;
        }
    }
    @media only screen and (max-width: 900px) {
        nav {
            display: flex;
            justify-content: space-between;
            width: 70%;
            padding: 3% 10% 2% 2%;
        }
        >div:nth-child(3) img {
            width: 60%;
        }
    }
    @media only screen and (max-width: 752px) {
        >div:nth-child(1) img {
            width: 50%;
        }
        >div:nth-child(2) img {
            width: 80%;
        }
        >div:nth-child(1) {
            padding: 3% 3% 3% 5%;
        }
        >div:nth-child(2) {
            width: 32%;
            padding-left: 5%;
        }
    }

    

`

const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 5% 0% 3% 8%;

    a {
        text-decoration: none;
        color: Black;
        font-family: 'M SemiBold';
        font-size: 18px;
        margin-bottom: 16px;
    }
`

const Header = () => {
    const windowSize = useWindowSize();
    const [nav, setNav] = useState(false)

    return windowSize > 752 ? (
        <HeaderTag>
            <div>
                <Link to='/'>                
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <nav>
                <Link to='/' >Inicio</Link>
                <Link to='/resorts' >Sobre Woof Tulum</Link>
                <Link to='/experiencias' >Servicios</Link>
                <Link to='/contacto' >Instalaciones</Link>
                <Link to='/resorts' >Haz tu cita</Link>
                <Link to='/experiencias' >Testimonios</Link>
                <Link to='/contacto'>Contacto</Link>
            </nav>
            <div>
                    <a href="ahskasvkasvk" target="_blank">
                    </a>
                    <a href="ahskasvkasvk" target="_blank">
                    </a>
            </div>
        </HeaderTag>
    ) : (
        <div>
        <HeaderTag>
            <div>
                <img src={Menu} nav={nav} onClick={() => setNav(!nav)} />
            </div>
            <div>
                <Link to='/'>                
                    <img src={Logo} alt="logo" />
                </Link>            
            </div>
        </HeaderTag>
        { nav ? (
            <MobileNav>
                <Link to='/' >Inicio</Link>
                <Link to='/resorts' >Sobre Woof Tulum</Link>
                <Link to='/experiencias' >Servicios</Link>
                <Link to='/contacto' >Instalaciones</Link>
                <Link to='/resorts' >Haz tu cita</Link>
                <Link to='/experiencias' >Testimonios</Link>
                <Link to='/contacto'>Contacto</Link>
            </MobileNav>
        ) : null }
        </div>
    )
}

export default Header
