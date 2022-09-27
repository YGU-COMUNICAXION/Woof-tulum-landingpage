import * as React from "react"
import Logo from "../../images/mobile/layout/footer/logo.svg"
import styled from "styled-components"
import PerritosBottom from "../../images/mobile/layout/footer/Footer_Woof 1.svg"
import useWindowSize from "../../hooks/useWindowSize"

import { Link } from "gatsby"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 15px;
    align-items: center;
    background-color: #518AD3;
    margin-top: -1%;

    @media only screen and (max-width: 480px) {
        font-size: 5vw;
    }
`

const HorizontalDiv = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2%;
    flex-direction: column;
        justify-content: center

    div img {
        width: 55%;
        margin-left: 10%;
    }
    >div:nth-child(1){
        align-self: center;
    }
    div:nth-child(2) {
        width:100%
    }
    div {
        width: 25vw;
    }
    div > p:nth-child(1) {
        font-family: 'M SemiBold';
        font-size: 19px;
    }
    a {
        color: white;
        text-decoration: none;
        font-family: 'M Light';
        font-size: 17px;
    }
    @media only screen and (min-width: 752px) {
        div:nth-child(1) {
            margin-bottom: 5%;
            width: 25%;
        } 
        div:nth-child(2) {
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            width: 608px;
        }
        div > p:nth-child(1){
            font-size: 105%
        }
        a {
            width:100%;
            font-size: 80%;
            line-height: 16px
        }
        p {
            margin-bottom: 3%;
        }
        div:nth-child(2) >div:nth-child(1) {
            display:flex;
            flex-direction: column;
            width: 33%;
            margin-right:6%;
        }
        div:nth-child(2) >div:nth-child(2) {
            display:flex;
            flex-direction: column;
            width: 33%;
        }
        div:nth-child(2) >div:nth-child(3) {
            display:flex;
            flex-direction: column;
            width: 33%
        }
    }
    @media only screen and (min-width: 1500px) { 
        padding-bottom: 0%;

        div:nth-child(1) {
            margin-bottom: 5%;
            width: 30%;
        } 
        div:nth-child(2) {
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            width: 1208px;
        }
        a {
            font-size: 25px;
            line-height: 36px
        }
        div > p:nth-child(1) {
            font-size: 30px;
        }
        div:nth-child(2) >div:nth-child(1) {
            width: 40%;
            margin-right:6%;
        }
        div:nth-child(2) >div:nth-child(2) {

            width: 40%;
        }
        div:nth-child(2) >div:nth-child(3) {
     
            width: 40%;
        }
    }

    @media only screen and (min-width: 2000px) { 
        a {
            font-size: 33px;
        }
        div:nth-child(2) {
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            width: 1408px;
        }
        div > p:nth-child(1) {
            font-size: 39px;
        }
        div img {
            width: 70%;
        }
        div:nth-child(2) >div:nth-child(1) {
            width: 70%;
            margin-right:6%;
        }
        div:nth-child(2) >div:nth-child(2) {
            width: 70%;
        }
        div:nth-child(2) >div:nth-child(3) {
            width: 70%;
        }
    }

    @media only screen and (min-width: 2500px) { 
        div:nth-child(2) {
            width: 1708px;
        }
        a {
            font-size: 35px;
        }
        div > p:nth-child(1) {
            font-size: 45px;
        }
        div img {
            width: 75%;
        }
    }

    @media only screen and (min-width: 3500px) { 
        div:nth-child(2) {

            width: 2708px;
        }
        a {
            font-size: 52px;
            line-height: 90px;
        }
        div > p:nth-child(1) {
            font-size: 65px;
        }
        div img {
            width: 75%;
        }
    }

    @media only screen and (min-width: 4000px) { 
        a {
            font-size: 52px;
        }
        div > p:nth-child(1) {
            font-size: 65px;
        }
        div img {
            width: 75%;
        }
    }


    @media only screen and (max-width: 752px) { 
        width: 100vw;
        flex-direction: column;
        align-items: center;
        line-height: 5vw;

        a {
            font-size: 20px;
            line-height: 40px
        }
        div > p:nth-child(1) {
            font-size: 27px;
        }
        div img {
            width: 60%;
        }
        div:nth-child(1) {
            width:60%;
            margin-bottom: 15%
        }
        div:nth-child(2) {
            width:100%
        }
        div:nth-child(3) {
            width:100%
        }
        div:nth-child(4) {
            width:100%
        }
    }

    @media only screen and (max-width: 480px) {
        width: 100vw;
        flex-direction: column;
        align-items: center;
        line-height: 5vw;

        div img {
            width: 35%;
            margin-left: 1vw;
            margin-bottom: 15%
        }
        div {
            width: 100%;
            padding-left: 2%;
            margin-bottom: 3vw;
        }
        div:nth-child(1) {
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
            padding-top: 3%;
        }
        a {
            font-size: 15px;
        }
        div > p:nth-child(1) {
            font-size: 22px;
        }
    }
`

const FooterTag = styled.footer`
    width: 100vw;
    overflow-x: hidden;

    img {
        width: 100%;
        margin-bottom: -1;
    }
`

const DerechosDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'M Light';
    font-size: 15px;

    div {
        display: flex;
        align-items: center;
        width: 100%;
    }

    a {
        color: white;
    }

    @media only screen and (min-width: 1500px) {
        padding: .6vw;
        font-size: 25px;
    }

    @media only screen and (min-width: 2000px) {
        padding: 1vw;
        font-size: 33px;
    }

    @media only screen and (min-width: 2500px) {
        font-size: 40px;
    }

    @media only screen and (min-width: 3500px) {
        font-size: 55px;
    }

    @media only screen and (min-width: 4000px) {
        font-size: 52px;
    }
    @media only screen and (max-width: 905px) { 
        font-size: 17px;
        margin-top: 0%
    }
    @media only screen and (max-width: 480px) {
        padding: 6vw;
        font-size: 19px;
    }
`

const Footer = () => {
    const windowSize = useWindowSize();

    return (
        <FooterTag>
            <img src={PerritosBottom}/>
            <MainDiv>
                <HorizontalDiv>
                    <div>
                        <img src={Logo} alt="Logo White" />
                    </div>
                    {windowSize < 752 ? (
                        <>
                        <div>
                            <p>Woof Tulum</p>
                            <p><Link to='/aviso-de-privacidad'>Sobre Woof Tulum</Link></p>
                            <p><Link to='/cookies'>¿Porque una peluquería canina</Link></p>
                            <p><Link to='/aviso-de-privacidad'>¿Qué es una peluquería canina?</Link></p>
                            <p><Link to='/cookies'>¿Porque una peluquería canina</Link></p>
                            <p><Link to='/aviso-de-privacidad'>¿Qué es una peluquería de bajo estrés?</Link></p>
                            <p><Link to='/cookies'>Consejos</Link></p>
                        </div>
                        <div>
                            <p>Servicios</p>
                            <p><Link to='/aviso-de-privacidad'>Aviso de Privacidad</Link></p>
                            <p><Link to='/cookies'>Políticas de Cookies</Link></p>
                        </div>
                        <div>
                            <p>Redes sociales</p>
                            <p><a href="https://wa.me/5215580452327">Whatsapp</a></p>
                            <p><a href="https://www.facebook.com/profile.php?id=100084692705749" target='_blank'>Facebook</a></p>
                            <p><a href="https://www.instagram.com/wooftulum/" target='_blank'>Instagram</a></p>
                        </div>
                        </>
                    ):(
                        <div>
                            <div>
                                <p>Woof Tulum</p>
                                <p><Link to='/aviso-de-privacidad'>Sobre Woof Tulum</Link></p>
                                <p><Link to='/cookies'>¿Porque una peluquería canina</Link></p>
                                <p><Link to='/aviso-de-privacidad'>¿Qué es una peluquería de bajo estrés?</Link></p>
                                <p><Link to='/cookies'>Consejos</Link></p>
                            </div>
                            <div>
                                <p>Servicios</p>
                                <p><Link to='/aviso-de-privacidad'>Aviso de Privacidad</Link></p>
                                <p><Link to='/cookies'>Políticas de Cookies</Link></p>
                            </div>
                            <div>
                                <p>Redes sociales</p>
                                <p><a href="https://wa.me/5215580452327">Whatsapp</a></p>
                                <p><a href="https://www.facebook.com/profile.php?id=100084692705749" target='_blank'>Facebook</a></p>
                                <p><a href="https://www.instagram.com/wooftulum/" target='_blank'>Instagram</a></p>
                            </div>
                        </div>
                    ) }

                </HorizontalDiv>
                <DerechosDiv>
                    <p>©2022 Woof Tulum. Todos los derechos reservados</p>
                </DerechosDiv>
            </MainDiv>
        </FooterTag>
    )
}

export default Footer
