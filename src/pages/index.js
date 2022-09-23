import * as React from "react"
import "../styles/home.css"
import Huellas1 from "../images/mobile/sobre/Group 70.svg"
import PerroHome from "../images/mobile/sobre/perropatas.svg"
import Layout from "../components/layout"
import Perro2 from "../images/mobile/sobre/foto-perrito.svg"
import ManchasItem from "../components/manchasItem"
import Mancha1 from "../images/mobile/sobre/mancha-cepillo.svg"
import ManchaCard from "../components/manchaCard/ index"
import ManchaCardimg from "../images/mobile/sobre/mancha-contenedor.svg"
import ProcessCard from "../components/processCard"
import Perro1 from "../images/mobile/sobre/processCards/foto-1.png"
import ConsejosCard from "../components/consejosCard"
import Hueso from "../images/mobile/sobre/consejosCards/hueso.svg"
import Patitias1 from "../images/mobile/sobre/BannerWoof_Pagina_Opc1.svg"
import ServiciosCard from "../components/serviciosCard"
import Regla from "../images/mobile/servicios/Regla_woof 1.svg"
import PerroVerde from "../images/mobile/instalaciones/foto-perrito-verde.svg"
import PerroAmarillo from "../images/mobile/instalaciones/foto-perrito-amarillo.svg"
import PerroRojo from "../images/mobile/instalaciones/foto-perrito-coral.svg"
import PerroAzul from "../images/mobile/instalaciones/foto-perrito-verde.svg"
import Domicilio from "../images/mobile/servicios/serviciosCard/auto.svg"


const IndexPage = () => {
const Red = ("#FCCA65")

  return (
    <Layout>
    <div className="mainDiv">
      <div className="sobreWoof">
        <div className="sobreFirstSection">
            <img src={Huellas1}/>
            <h1>En Woof Tulum hacemos mucho más que cuidar mascotas<span></span><span></span></h1>
            <img src={PerroHome}/>
            <p>Nos preocupamos por tu mascota tanto como nos preocupamos por la nuestra. Así que puedes encontrar en nuestro equipo a amantes de los animales con la experiencia para brindarte el servicio de calidad que tus amigos perrunos se merecen.</p>
        </div>
        <div className="sobreSecondSection">
          <h2>Sobre Woof Tulum</h2>
          <div className="secondSubtitle">
            <h2>Mucho más que Estética</h2>
            <img src={Perro2}/>
          </div>
          <p>Ante todo, somos unos verdaderos amantes de los animales.</p>
          <p> Y esa, es la principal razón que nos ha llevado a fundar Woof Tulum, una peluquería canina especializada en cuidar y mimar a las mascotas siguiendo un modelo de estética de bajo estrés.</p>
          <h3>¿Por qué una peluquería canina? </h3>
          <h2>Bañar, secar, cortar…</h2>
          <p>La peluquería canina es mucho más que el arreglo o la estética del animal.</p>
          <p>En Woof Tulum, te ayudamos a mantener la higiene de tu mascota como prevención de su salud y a detectar alteraciones en su piel, así como alguna enfermedad. También realizamos estas otras tareas.</p>
        </div>
        <div className="sobreThirdSection">
          <div className="manchasRow">
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
          </div>
        </div>
        <div className="sobreFourthSection">
          <ManchaCard backgroundImage={ManchaCardimg}>
            <h2>Que es una peluqueria de bajo estrés?</h2>
          </ManchaCard>
        </div>
        <div className="sobreFifhtSection">
          {/* <ProcessCard image={Perro1} title={"Antes de la sesión"} text={"crksjdhfkasjdhfkasjdhfklasjdhfklashjdfkasjhdfkasjhdfkljashf kd fhkasjhdf kasj hfkas f sajdkfhsakjdhfaks djhfsjh"} backgroundColor={Red}/> */}
        </div>
        <div className="sobreSixthSection">
          <h2>Consejos para antes y después del baño </h2>
          <ConsejosCard text={"kjshdfkjh fsajd hfkasjdhfask dfas dfkasjdf askhfkjhdffkasfh asdfh askjdfh askjf hsajfhaskjhf s"} icon={Hueso}/>
        </div>
        <div className="sobreSeventhSection">
          <h2>Servicios de primera calidad para que puedas consentir a tu peludo.</h2>
          <img src={Patitias1}/>
        </div>
      </div>
      <div className="servicios">
        <div className="serviciosFirstSection">
          <h1>Servicios</h1>
          <p>Contamos con el servicio de recolección y entrega a domicilio y nos ocupamos de todas las necesidades de aseo y baño que tu perro pueda necesitar.¡Olvídate de largas colas y tiempo de espera!</p>
          <p>Nuestros precios pueden variar según el tamaño, la raza de tu perro y sus necesidades específicas.</p>
          <p>Aunque podemos asegurarte que somos la mejor opción de estética canina en Tulum.</p>
        </div>
        <div className="serviciosSecondSection">
          <h2>Servicio a domicilio</h2>
          <ServiciosCard icon={Domicilio} text={"kjdshfkasjhfdkasjhdfkashjfaskjhfkjashfkasjhf ashfd askjhdfkasjh fkas f"} backgroundColor={Red}/>
          {/* button */}
        </div>
        <div className="serviciosThirdSection">
          <h2>Hand Stripping</h2>
          <p>Se trata de una muda artificial del pelo. Quitamos las capas que están a punto de caerse para que no dificulte el crecimiento de la nuevas capas de pelo y así crezca mucho más fuerte.</p>
          <img src={Regla}/>
        </div>
      </div>
      <div className="instalaciones">
        <div className="instalacionesFirstSection">
          <h1>Instalaciones</h1>
          <h2>Woof Tulum es un lugar de respeto, tranquilidad, higiene, belleza y diseño de imagen.</h2>
          <img src={PerroVerde}/>
          <p>Notarás el resultado a un precio justo y lo más importante es la responsabilidad que tenemos con nuestros amigos peludos.</p>
          <div className="perritosRow">
            <img src={PerroAmarillo}/>
            <img src={PerroRojo}/>
            <img src={PerroAzul}/>
          </div>
          <p>También vendemos alimento y accesorios para tus mascotas</p>
        </div>
      </div>
      <div className="cita">
        <div className="citaFirstSection">
          <div className="hazCitaDiv">
            <h2>Haz tu cita</h2>
            <p>Comprueba nuestra disponibilidad y reserva la fecha y la hora que más te convengan. Te sugerimos agendar con al menos 1 día de anticipación para garantizar que tengamos espacio disponible para tu mascota.</p>
            <p>*En caso de que tu mascota venga con pulgas y/o garrapatas considera que se aplicará un tarifa extra a tu servicio.</p>
            {/* button */}
          </div>
        </div>
        <div className="citaSecondSection">
          <div className="regaloDiv">
            <h2>¡Regalo para tu peludo!</h2>
            <p>Por ser cliente frecuente, el 10mo baño va por nuestra cuenta. </p>
          </div>
        </div>
      </div>
      <div className="testimonios">
        <h2>Testimonios</h2>
        {/* carousel */}
      </div>
      <div className="contacto">
        <h1>Contacto</h1>
        {/* contacto card x3 */}
        {/* mapa */}
      </div>
      <div className=""></div>
    </div>
    </Layout>
  )
}

export default IndexPage

