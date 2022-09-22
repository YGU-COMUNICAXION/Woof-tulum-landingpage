import * as React from "react"
import Logo from "../../images/mobile/layout/footer/logo.svg"
import styled from "styled-components"

import { Link } from "gatsby"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 15px;
    align-items: center;

    @media only screen and (max-width: 480px) {
        font-size: 5vw;
    }
`

const HorizontalDiv = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2%;

    div img {
        width: 55%;
        margin-left: 10%;
    }
    >div:nth-child(1){
        align-self: center;
    }
    div {
        width: 25vw;
    }
    div > p:nth-child(1) {
        font-family: 'Roboto Bold';
        font-size: 19px;
    }
    a {
        color: white;
        text-decoration: none;
        font-family: 'Roboto Regular';
        font-size: 17px;
    }

    @media only screen and (min-width: 1500px) { 
        a {
            font-size: 22px;
        }
        div > p:nth-child(1) {
            font-size: 27px;
        }
        div img {
            width: 70%;
        }
    }

    @media only screen and (min-width: 2000px) { 
        a {
            font-size: 27px;
        }
        div > p:nth-child(1) {
            font-size: 34px;
        }
        div img {
            width: 70%;
        }
    }

    @media only screen and (min-width: 2500px) { 
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
        a {
            font-size: 42px;
        }
        div > p:nth-child(1) {
            font-size: 55px;
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


    @media only screen and (max-width: 905px) { 
        a {
            font-size: 15px;
        }
        div > p:nth-child(1) {
            font-size: 17px;
        }
        div img {
            width: 60%;
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
        }
        div {
            width: 100%;
            padding-left: 20%;
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
            font-size: 20px;
        }
        div > p:nth-child(1) {
            font-size: 22px;
        }
    }
`

const FooterTag = styled.footer`
    background-color: #0B2A3B;
    width: 100vw;
    overflow-x: hidden;
`

const DerechosDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Regular';
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
        font-size: 23px;
    }

    @media only screen and (min-width: 2000px) {
        padding: 1vw;
        font-size: 28px;
    }

    @media only screen and (min-width: 2500px) {
        font-size: 33px;
    }

    @media only screen and (min-width: 3500px) {
        font-size: 42px;
    }

    @media only screen and (min-width: 4000px) {
        font-size: 52px;
    }

    @media only screen and (max-width: 480px) {
        padding: 6vw;
        font-size: 19px;
    }
`

const Footer = () => {
    return (
        <FooterTag>
            <MainDiv>
                <HorizontalDiv>
                    <div>
                        <img src={Logo} alt="Logo White" />
                    </div>
                    <div>
                        <p>Contáctanos</p>
                        <p><a href="tel:5580452327">55 8045 2327</a></p>
                        <p><a href="mailto:espana@ingezar.com.mx">espana@ingezar.com.mx</a></p>
                    </div>
                    <div>
                        <p>Legales</p>
                        <p><Link to='/aviso-de-privacidad'>Aviso de Privacidad</Link></p>
                        <p><Link to='/cookies'>Políticas de Cookies</Link></p>
                    </div>
                    <div>
                        <p>Síguenos en redes</p>
                        <p><a href="https://www.linkedin.com/company/ingezar-españa" target='_blank' >Linkedin</a></p>
                        <p><a href="https://www.facebook.com/IngezarEspana/" target='_blank'>Facebook</a></p>
                        <p><a href="https://www.instagram.com/ingezardesarrollos/" target='_blank'>Instagram</a></p>
                    </div>
                </HorizontalDiv>
                <DerechosDiv>
                    <p>©2022 Ingezar. Todos los derechos reservados. Elaborado por <a href="https://www.ygucomunicaxion.com" target='_blank'>YGU Comunicaxión</a></p>
                </DerechosDiv>
            </MainDiv>
        </FooterTag>
    )
}

export default Footer
