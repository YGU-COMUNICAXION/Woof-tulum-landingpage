import React, {useState} from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../images/mobile/layout/header/logo.svg"
import Menu from "../../images/mobile/layout/header/pata menú.svg"
// import { Link } from "gatsby"
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
        font-family: 'M Regular';
        color: black;
        text-decoration: none;
        font-size: 20px;
    }
    a:hover {
        color: #77D0D1;
        text-decoration: underline
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
            width: 280%;
        }
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        nav a {
            font-size: 25px;
            margin-right:1%
        }
        >div:nth-child(3) img {
            width: 45%;
        }
    }

    @media only screen and (min-width: 2900px) {
        nav a {
            font-size: 40px;
        }
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        >div:nth-child(1) img {
        width: 450%;
        margin-left: 25%;
        }
    }
    @media only screen and (min-width: 3500px) {
        nav a {
            font-size: 45px;
        }
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        >div:nth-child(1) img {
        width: 450%;
        margin-left: 25%;
        }
    }
    @media only screen and (min-width: 4000px) {
        >div:nth-child(1) img {
            width: 520%;
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
    @media only screen and (max-width: 1700px) {
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        nav a {
            font-size: 20px;
        }
        >div:nth-child(1) img {
        width: 150%;
        margin-left: 25%;
        }
    }
    @media only screen and (max-width: 1140px) {
        nav {
            width: 65%;
            padding: 3% 0% 2% 0%;
            margin-left: 15%;
        }
        nav a {
            font-size: 15px;
        }
        >div:nth-child(1) img {
        width: 120%;
        margin-left: 25%;
        }
    }
    @media only screen and (max-width: 900px) {
        nav {
            display: flex;
            justify-content: space-between;
            width: 70%;
            padding: 3% 2% 2% 2%;
            margin-left: 9%;
        }
        nav a {
            font-size: 10px;
        }
        >div:nth-child(1) img {
        width: 80%;
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
 const  scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    return windowSize > 752 ? (
        <HeaderTag>
            <div>
                <Link to='/'>                
                    <img src={Logo} alt="logo" />
                </Link>
            </div>
            <nav>
                <Link to= "/">Inicio</Link>
                <Link to= "sobre">Sobre Woof Tulum</Link>
                <Link to='servicios' >Servicios</Link>
                <Link to='instalaciones' >Instalaciones</Link>
                <Link to='cita' >Haz tu cita</Link>
                <Link to='testimonios' >Testimonios</Link>
                <Link to='contacto'>Contacto</Link>
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
            <Link to= "/">Inicio</Link>
                <Link to= "sobre">Sobre Woof Tulum</Link>
                <Link to='servicios' >Servicios</Link>
                <Link to='instalaciones' >Instalaciones</Link>
                <Link to='cita' >Haz tu cita</Link>
                <Link to='testimonios' >Testimonios</Link>
                <Link to='contacto'>Contacto</Link>
            </MobileNav>
        ) : null }
        </div>
    )
}

export default Header
