import * as React from "react"
import "../css/home.css"
import { Element } from 'react-scroll'
import Huellas1 from "../images/mobile/sobre/Group 70.svg"
import PerroHome from "../images/mobile/sobre/perropatas.svg"
import Layout from "../components/layout"
import Perro2 from "../images/mobile/sobre/foto-perrito.svg"
import ManchasItem from "../components/manchasItem"
import Mancha1 from "../images/mobile/sobre/mancha-cepillo.svg"
import Mancha2 from "../images/mobile/sobre/mancha-huella.svg"
import Mancha3 from "../images/mobile/sobre/manchaorejas.svg"
import Mancha4 from "../images/mobile/sobre/mancha-jabon.svg"
import Mancha5 from "../images/mobile/sobre/mancha-jerginga.svg"
import Mancha6 from "../images/mobile/sobre/mancha-cola.svg"
import ManchaCard from "../components/manchaCard/ index"
import ManchaCardimg from "../images/mobile/sobre/mancha-contenedor.svg"
import ManchaCardDesk from "../images/desktop/sobre/contenedor-por-que-una-peluqería.svg"
import ProcessCard from "../components/processCard"
import Perro1 from "../images/mobile/sobre/processCards/foto-1.png"
import Perro3 from "../images/mobile/sobre/processCards/foto-3.png"
import Perro4 from "../images/mobile/sobre/processCards/foto-4.png"
import ConsejosCard from "../components/consejosCard"
import PerroIcon from "../images/mobile/sobre/consejosCards/perro.svg"
import Hueso from "../images/mobile/sobre/consejosCards/hueso.svg"
import CepilloIcon from "../images/mobile/sobre/consejosCards/cepillo.svg"
import ServiciosCard from "../components/serviciosCard"
import Regla from "../images/mobile/servicios/Regla_woof.svg"
import PerroVerde from "../images/mobile/instalaciones/foto-perrito-verde.svg"
import PerroAmarillo from "../images/mobile/instalaciones/foto-perrito-amarillo.svg"
import PerroRojo from "../images/mobile/instalaciones/foto-perrito-coral.svg"
import PerroAzul from "../images/mobile/instalaciones/foto-perrito-azul.svg"
import Domicilio from "../images/mobile/servicios/serviciosCard/auto.svg"
import Aseo from "../images/mobile/servicios/serviciosCard/estampilla.svg"
import BajoCosto from "../images/mobile/servicios/serviciosCard/plata.svg"
import Atencion from "../images/mobile/servicios/serviciosCard/heart.svg"
import HuellasA from "../images/mobile/cita/patas-top.svg"
import ContactoCard from "../components/contactoCard"
import Phone from "../images/mobile/contacto/Phone.svg"
import Clock from "../images/mobile/contacto/Clock.svg"
import Ubi from "../images/mobile/contacto/MapPin.svg"
import CarouselTestimonios from "../components/carousel"
import useWindowSize from "../hooks/useWindowSize"
import PatasTop from "../images/desktop/sobre/patas top.svg"
import PataAmarilla from "../images/desktop/sobre/pataAmarilla.svg"
import PataAzul from "../images/desktop/sobre/pataazul.svg"
import PerroHomeDesk from "../images/desktop/sobre/foto-home.svg"
import HuellasPeluqueria from "../images/desktop/sobre/huellaspeluqueria.svg"
import PerritoPeluqueria from "../images/desktop/sobre/foto-perrito.svg"
import PerritoStripping from "../images/desktop/servicios/perritohandstripping.svg"
import PerritoCita from "../images/desktop/cita/foto-perrito-haz-tu-cita.svg"
import HuellasCita from "../images/desktop/cita/patitascita.svg"
import PeritoTestimonios from "../images/desktop/testimonios/foto (1).svg"
import Boton from "../components/boton"
import WhatsappButton from "../images/mobile/cita/WhatsappLogo.svg"
import BurbujasAzules from "../images/desktop/layout/círculos-verdes.svg"
import BurbujasAmarillas from "../images/desktop/layout/círculos-amarillos.svg"
import BurbujasRojas from "../images/desktop/layout/circulos-coral.svg"

const IndexPage = () => {
const Red = ("#FCCA65")
const Beige = ("#FFF5E0")
const White = ("#FFFFFF")
const Black = ("#000000")
const Blue = ("#5189D3")

const windowSize = useWindowSize();

  return (
    <Layout>
    <div className="mainDiv">
      <div className="sobreWoof">
      {windowSize < 752 ? (
        <div className="sobreFirstSection">
            <img src={Huellas1}/>
            <h1 className="mainTitle">En <span>Woof Tulum</span> hacemos mucho más que <span2>cuidar mascotas</span2></h1>
            <img src={PerroHome}/>
            <p className="firstDescription">Nos preocupamos por tu mascota tanto como nos preocupamos por la nuestra. Así que puedes encontrar en <span>nuestro equipo</span> a <span>amantes de los animales</span> con la experiencia para brindarte el servicio de calidad que tus amigos perrunos se merecen.</p>
        </div>
      ):(
        <div className="sobreFirstSectionDesk">
          <div className="leftHomeDiv">
            <img className="patasTop" src={PatasTop}/>
            <h1 className="mainTitleDesk">En <span>Woof Tulum</span> hacemos mucho más que <span2>cuidar mascotas</span2></h1>
            <div className="pata-description">
              <p className="firstDescriptionDesk">Nos preocupamos por tu mascota tanto como nos preocupamos por la nuestra. Así que puedes encontrar en <span>nuestro equipo</span> a <span>amantes de los animales</span> con la experiencia para brindarte el servicio de calidad que tus amigos perrunos se merecen.</p>
              <img src={PataAmarilla}/>
            </div>
            <img className="pataAzul" src={PataAzul}/>
          </div>
          <div className="perroHomeDiv">
            <img className="perroHomeDesk" src={PerroHomeDesk}/>
          </div>
        </div>
      )}
      {windowSize < 752 ? (
        <div id="sobre" className="sobreSecondSection">
          <h1 className="sectionTitle">Sobre Woof Tulum</h1>
          <div className="secondSubtitle">
            <h2 className="multiColorSubt">Mucho más <span>que</span> <span1>Estética</span1></h2>
            <img src={Perro2}/>
          </div>
          <p className="lightP">Ante todo, somos unos verdaderos <span>amantes de los animales</span>.</p>
          <p className="lightP"> Y esa, es la <span>principal razón</span> que nos ha llevado a <span>fundar Woof Tulum</span>, una <span>peluquería canina especializada en cuidar y mimar</span> a las mascotas siguiendo un modelo de estética de bajo estrés.</p>
          <h3>¿Por qué una peluquería canina? </h3>
          <h2 className="tricolor">Bañar, <span>secar,</span> <span1>cortar…</span1></h2>
          <p className="boldP">La peluquería canina es mucho más que el arreglo o la estética del animal.</p>
          <p className="lightP">En <span>Woof Tulum</span>, te ayudamos a mantener <span>la higiene de tu mascota</span> como <span>prevención de su salud</span> y a <span>detectar alteraciones en su piel</span>, así como alguna enfermedad. También realizamos estas otras tareas.</p>
        </div>
      ):(
          <div id="sobre" className="sobreSecondSectionDesk">
            <h1 className="sectionTitle">Sobre Woof Tulum</h1>
            <div className="sobreFirstHorDivDesk">
              <div className="subtitleDescriptionDesk">
                <h2 className="multiColorSubt">Mucho más <span>que</span> <span1>Estética</span1></h2>
                <p className="lightP">Ante todo, somos unos verdaderos <span>amantes de los animales</span>.</p>
                <p className="lightP"> Y esa, es la <span>principal razón</span> que nos ha llevado a <span>fundar Woof Tulum</span>, una <span>peluquería canina especializada en cuidar y mimar</span> a las mascotas siguiendo un modelo de estética de bajo estrés.</p>
              </div>
              <img src={Perro2}/>
            </div>
            <h3>¿Por qué una peluquería canina? </h3>
            <h2 className="tricolor">Bañar, <span>secar,</span> <span1>cortar…</span1></h2>
            <p className="boldP">La peluquería canina es mucho más que el arreglo o la estética del animal.</p>
            <p className="lightP" style={{textAlign : "center"}}>En <span>Woof Tulum</span>, te ayudamos a mantener <span>la higiene de tu mascota</span> como <span>prevención de su salud</span> y a <span>detectar alteraciones en su piel</span>, así como alguna enfermedad. También realizamos estas otras tareas.</p>
            <img className="BurbujasAzules" src={BurbujasAzules}/>
            <img className="BurbujasAmarillas" src={BurbujasAmarillas}/>
          </div>

      )}
        {windowSize <  752 ? (
        <div className="sobreThirdSection">
          <div className="manchasRow">
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
            <ManchasItem image={Mancha2} text={"Cortar las uñas"}/>
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha3} text={"Limpieza del canal auditivo"}/>
            <ManchasItem image={Mancha4} text={"Aplicacion de trtamientos para mejorar el pelaje"}/>
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha5} text={"Vacunación y desparacitación"}/>
            <ManchasItem image={Mancha6} text={"Limpieza de glándulas anales"}/>
          </div>
        </div>
        ):(
          <div className="sobreThirdSectionDesk">
            <div className="manchasRowDesk">
            <ManchasItem image={Mancha1} text={"Peinar y cepillar el manto del perro"}/>
            <ManchasItem image={Mancha2} text={"Cortar las uñas"}/>
            <ManchasItem image={Mancha3} text={"Limpieza del canal auditivo"}/>
            <ManchasItem image={Mancha4} text={"Aplicacion de trtamientos para mejorar el pelaje"}/>
            <ManchasItem image={Mancha5} text={"Vacunación y desparacitación"}/>
            <ManchasItem image={Mancha6} text={"Limpieza de glándulas anales"}/>
            </div>
          </div>
        )}
        {windowSize <  752 ? (
        <div className="sobreFourthSection">
          <ManchaCard backgroundImage={ManchaCardimg}>
            <h2 className="firsth2">¿Que es una peluqueria de <span>bajo estrés?</span></h2>
            <h2 className="secondh2">En <span>Woof Tulum Spa</span>, tu mascota marca el ritmo</h2>
            <p className="manchaP">Queremos que tus caninos se sientan <span>como en casa y estén felices cuando vengas a buscarlos</span>. Por ello hemos apostado por un modelo de <span>peluquería canina de bajo estrés</span>.</p>
          </ManchaCard>
        </div>
        ):(
          <div className="sobreFourthSectionDesk">
            <ManchaCard backgroundImage={ManchaCardDesk}>
              <h2 className="firsth2">¿Que es una peluqueria de <span>bajo estrés?</span></h2>
              <h2 className="secondh2">En <span>Woof Tulum Spa</span>, tu mascota marca el ritmo</h2>
              <p className="manchaP">Queremos que tus caninos se sientan <span>como en casa y estén felices cuando vengas a buscarlos</span>. Por ello hemos apostado por un modelo de <span>peluquería canina de bajo estrés</span>.</p>
            </ManchaCard>
            <img className="huellasPeluqueria" src={HuellasPeluqueria}/>
            <img className="perritoPeluqueria" src={PerritoPeluqueria}/>
          </div>
        )}
          {windowSize <  752 ? (
            <div className="sobreFifhtSection">
              <ProcessCard image={Perro1} title={"Antes de la sesión"} text={"Creamos un clima de calma y contemplamos el comportamiento de tu perro. La primera sesión será más lenta, ya que es una nueva experiencia para tu amigo peludo y requiere de un proceso de adaptación. El fin es evitarle el sentimiento miedo y desconfianza que le genera entrar a una peluquería canina."} backgroundColor={Red}/>
              <ProcessCard image={Perro4} title={"Durante la sesión"} text={"Presentamos el material de manera progresiva, es decir, las máquinas de corte, secador, bañera, etcétera y cuidamos la potencia del aire, la temperatura o fuerza del agua, así como la velocidad del corte. Sin prisa pero sin pausa. El ritmo de trabajo es lento, para que el perro asimile el proceso y vaya poco a poco sintiendo confianza con su peluquero."} backgroundColor={Black} color={White} />
              <ProcessCard image={Perro3} title={"El momento del baño"} text={"Es lento, ya que dejamos que tu peludo tenga contacto con el agua y no se asuste. Si se muestra tranquilo, mojamos el resto del cuerpo a través de una ducha suave. Asimismo, utilizamos los mejores productos para mantener el pH del pelaje y evitar reacciones alérgicas."} backgroundColor={Blue}/>
            </div>
          ):(
            <div className="sobreFifhtSectionDesk">
              <ProcessCard image={Perro1} title={"Antes de la sesión"} text={"Creamos un clima de calma y contemplamos el comportamiento de tu perro. La primera sesión será más lenta, ya que es una nueva experiencia para tu amigo peludo y requiere de un proceso de adaptación. El fin es evitarle el sentimiento miedo y desconfianza que le genera entrar a una peluquería canina."} backgroundColor={Red}/>
              <ProcessCard image={Perro4} title={"Durante la sesión"} text={"Presentamos el material de manera progresiva, es decir, las máquinas de corte, secador, bañera, etcétera y cuidamos la potencia del aire, la temperatura o fuerza del agua, así como la velocidad del corte. Sin prisa pero sin pausa. El ritmo de trabajo es lento, para que el perro asimile el proceso y vaya poco a poco sintiendo confianza con su peluquero."} backgroundColor={Black} color={White} />
              <ProcessCard image={Perro3} title={"El momento del baño"} text={"Es lento, ya que dejamos que tu peludo tenga contacto con el agua y no se asuste. Si se muestra tranquilo, mojamos el resto del cuerpo a través de una ducha suave. Asimismo, utilizamos los mejores productos para mantener el pH del pelaje y evitar reacciones alérgicas."} backgroundColor={Blue}/>
            </div>
          )}
          {windowSize <  752 ? (
            <div className="sobreSixthSection">
              <h2>Consejos para <span>antes</span> y <span1>después</span1> del baño </h2>
              <ConsejosCard text={"Media hora antes de la sesión dale un paseo relajante para que gaste energía, haga sus necesidades y se sienta más cómodo."} icon={PerroIcon}/>
              <ConsejosCard text={"Al salir de la peluquería puedes premiarle con golosinas para reforzar positivamente su comportamiento."} icon={Hueso}/>
              <ConsejosCard text={"Cepilla regularmente a tu perrito en casa para que se acostumbre a este tipo de acción y no sienta extraño cuando un desconocido lo peine."} icon={CepilloIcon}/>
            </div>
          ):(
            <div className="sobreSixthSectionDesk">
              <h2>Consejos para <span>antes</span> y <span1>después</span1> del baño </h2>
              <div className="consejosRow">
                <ConsejosCard text={"Media hora antes de la sesión dale un paseo relajante para que gaste energía, haga sus necesidades y se sienta más cómodo."} icon={PerroIcon}/>
                <ConsejosCard text={"Al salir de la peluquería puedes premiarle con golosinas para reforzar positivamente su comportamiento."} icon={Hueso}/>
                <ConsejosCard text={"Cepilla regularmente a tu perrito en casa para que se acostumbre a este tipo de acción y no sienta extraño cuando un desconocido lo peine."} icon={CepilloIcon}/>
              </div>
            </div>
          )}
          {windowSize < 752 ? (
            <div id="servicios" className="sobreSeventhSection">
              <h2 className="sevenH2">Servicios de <span>primera calidad</span> para que puedas <span>consentir a tu peludo</span>.</h2>
            </div>
          ):(
            <div className="sobreSeventhSectionDesk">
              <h2 className="sevenH2Desk">Servicios de <span>primera calidad</span> para que puedas <span>consentir a tu peludo</span>.</h2>
            </div>
          )}

      </div>
      <div id="servicios" className="servicios">
        <div className="serviciosFirstSection">
          <h1 className="sectionTitle">Servicios</h1>
          <p className="serviciosFirstP">Contamos con el <span>servicio de recolección y entrega a domicilio</span> y nos ocupamos de todas las necesidades <span>de aseo y baño</span> que tu perro pueda necesitar.</p>
          <p className="serviciosFirstP"><span>¡Olvídate de largas colas y tiempo de espera!</span></p>
          <div className="serviciosSecondTextDiv">
            <p className="serviciosSecondText">Nuestros precios pueden variar según el tamaño, la raza de tu perro y sus necesidades específicas.</p>
            <p className="serviciosSecondText">Aunque podemos asegurarte que somos la <span>mejor opción de estética canina en Tulum.</span></p>
          </div>
        </div>
        {windowSize < 752 ? (
          <div className="serviciosSecondSection">
            <h2>Servicio a domicilio</h2>
            <ServiciosCard icon={Domicilio} text={"Nosotros recogemos a tu peludo y lo regresamos a la puerta de tu casa."} backgroundColor={Beige}/>
            <ServiciosCard icon={Aseo} text={"Aseo de primera calidad para su cachorro o perro adulto."} backgroundColor={White}/>
            <ServiciosCard icon={BajoCosto} text={"Bajo costo, sin contratos, sin tarifas ocultas."} backgroundColor={Beige}/>
            <ServiciosCard icon={Atencion} text={"Atención personalizada y personal amable."} backgroundColor={White}/>
            <div className="serviciosBotonDiv">
              <Boton>
                <p>Consultar precios</p>
              </Boton>
            </div>

          </div>
        ):(
          <div className="serviciosSecondSectionDesk">
            <h2>Servicio a domicilio</h2>
            <div className="serviciosCardGrid">
              <ServiciosCard icon={Domicilio} text={"Nosotros recogemos a tu peludo y lo regresamos a la puerta de tu casa."} backgroundColor={Beige}/>
              <ServiciosCard icon={Aseo} text={"Aseo de primera calidad para su cachorro o perro adulto."} backgroundColor={White}/>
            </div>
            <div className="serviciosCardGrid">
              <ServiciosCard icon={Atencion} text={"Atención personalizada y personal amable."} backgroundColor={White}/>
              <ServiciosCard icon={BajoCosto} text={"Bajo costo, sin contratos, sin tarifas ocultas."} backgroundColor={Beige}/>
            </div>            
            <div className="serviciosBotonDiv">
              <Boton>
                <p>Consultar precios</p>
              </Boton>
            </div>
          </div>
        )}
        {windowSize < 752 ? (
          <div className="serviciosThirdSection">
            <h2>Hand Stripping</h2>
            <p>Se trata de una <span>muda artificial del pelo</span>. Quitamos las capas que están a punto de caerse para que <span>no dificulte el crecimiento de la nuevas capas de pelo</span> y así <span>crezca mucho más fuerte</span>.</p>
            <img src={Regla}/>
          </div>
        ):(
          <div className="serviciosThirdSectionDesk">
            <div className="handStrippingHorDiv">
              <div className="handInfo">
                <h2>Hand Stripping</h2>
                <p>Se trata de una <span>muda artificial del pelo</span>. Quitamos las capas que están a punto de caerse para que <span>no dificulte el crecimiento de la nuevas capas de pelo</span> y así <span>crezca mucho más fuerte</span>.</p>
                <img src={PerritoStripping}/>
              </div>
              <div className="reglaDiv">
                <img src={Regla}/>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="instalaciones" className="instalaciones">
        <div className="instalacionesFirstSection">
          <h1 className="sectionTitle">Instalaciones</h1>
          {windowSize < 752 ? (
            <>
              <h2 className="instalacionesDescription"><span>Woof Tulum</span> <span1>es un lugar de</span1> respeto, <span2>tranquilidad,</span2> higiene, <span2>belleza</span2> <span1>y</span1> diseño de imagen.</h2>
              <img className="firstPerrito" src={PerroVerde}/>
            </>
          ):(
            <div className="descriptionImageDesk">
              <h2 className="instalacionesDescription"><span>Woof Tulum</span> <span1>es un lugar de</span1> respeto, <span2>tranquilidad,</span2> higiene, <span2>belleza</span2> <span1>y</span1> diseño de imagen.</h2>
              <img className="firstPerrito" src={PerroVerde}/>
            </div>
          )}
          <p className="notaras">Notarás el resultado a un <span>precio justo</span> y lo más importante es la <span>responsabilidad</span> que tenemos con nuestros <span>amigos peludos.</span></p>
          <div className="perritosRow">
            <img src={PerroAmarillo}/>
            <img src={PerroRojo}/>
            <img src={PerroAzul}/>
          </div>
          <p className="notaras">También vendemos <span>alimento y accesorios</span> para tus mascotas</p>
        </div>
      </div>
      <div className="cita">
      {windowSize < 752 ? (
        <>
        <div id="cita" className="citaFirstSection">
          <img src={HuellasA}/>
          <div className="hazCitaDiv">
            <h2>Haz tu cita</h2>
            <p className="hazCitaFirstP">Comprueba nuestra <span>disponibilidad</span> y <span>reserva la fecha y la hora</span> que más te convengan. Te sugerimos <span>agendar</span> con al menos <span>1 día de anticipación</span> para garantizar que tengamos espacio disponible para tu mascota.</p>
            <p className="hazCitaSecondP">*En caso de que tu mascota venga con pulgas y/o garrapatas considera que se aplicará un tarifa extra a tu servicio.</p>
            <Boton>
              <img src={WhatsappButton}/>
              <p>Agendar cita</p>
            </Boton>
          </div>
        </div>
        <div className="citaSecondSection">
          <div className="regaloDiv">
            <h2>¡Regalo para tu peludo!</h2>
            <p className="regaloP">Por ser <span>cliente frecuente</span>, el <span>10mo baño</span> va por nuestra cuenta. </p>
          </div>
        </div>
        </>

      ):(
        <>
        <div id="cita" className="citaFirstSectionDesk">
          <div className="citaUpperDiv">
            <div className="hazCitaDivDesk">
              <h2>Haz tu cita</h2>
              <p className="hazCitaFirstP">Comprueba nuestra <span>disponibilidad</span> y <span>reserva la fecha y la hora</span> que más te convengan. Te sugerimos <span>agendar</span> con al menos <span>1 día de anticipación</span> para garantizar que tengamos espacio disponible para tu mascota.</p>
              <p className="hazCitaSecondP">*En caso de que tu mascota venga con pulgas y/o garrapatas considera que se aplicará un tarifa extra a tu servicio.</p>
              <div className="citabotonDivDesk">
                <Boton>
                  <img src={WhatsappButton}/>
                  <p>Agendar cita</p>
                </Boton>
              </div>
            </div>
            <img src={PerritoCita}/>
          </div>
          <div className="regaloDivDesk">
            <div className="regaloDivInfo">
              <h2>¡Regalo para tu peludo!</h2>
              <p className="regaloPDesk">Por ser <span>cliente frecuente</span>, el <span>10mo baño</span> va por nuestra cuenta. </p>
            </div>
          </div>
          <img  className="BurbujasRojas" src={BurbujasRojas}/>
          <img className="huellasCita" src={HuellasCita}/>
        </div>
        </>
      )}
      </div>
      <div id="testimonios" className="testimonios">
        <h1 className="sectionTitle">Testimonios</h1>
        {windowSize < 752 ? (
          <div className="carouselDiv">
            <CarouselTestimonios/>
          </div>
        ):(
          <div className="testimoniosDesk">
            <CarouselTestimonios/>
            <img src={PeritoTestimonios}/>
          </div>
        )}
      </div>
      <div id="contacto" className="contacto">
        <h1 className="sectionTitle">Contacto</h1>
        {windowSize < 752 ? (
          <>
          <div className="contactoCardsDiv">
            <ContactoCard icon={Phone} title={"Teléfono"} info={"+52 984 217 0782"}/>
            <ContactoCard icon={Clock} title={"Horario"} info={"Lunes a Viernes: 9:00am - 18:00pm"}>
              <p>Sábados: 9:00am - 17:00pm</p>
            </ContactoCard>
            <ContactoCard icon={Ubi} title={"Dirección"} info={"Av. La Selva, 77760 Tulum, Q.R., México"}/>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14975.835857120077!2d-87.4692647!3d20.2190262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42b4fe450d31e588!2sWoof%20Tulum!5e0!3m2!1ses!2smx!4v1664055019260!5m2!1ses!2smx" className="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </>
        ):(
          <>
            <div className="contactoDeskDiv">
              <div className="contactoCardsDivDesk">
                <ContactoCard icon={Phone} title={"Teléfono"} info={"+52 984 217 0782"}/>
                <ContactoCard icon={Clock} title={"Horario"} info={"Lunes a Viernes: 9:00am - 18:00pm"}>
                  <p>Sábados: 9:00am - 17:00pm</p>
                </ContactoCard>
                <ContactoCard icon={Ubi} title={"Dirección"} info={"Av. La Selva, 77760 Tulum, Q.R., México"}/>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14975.835857120077!2d-87.4692647!3d20.2190262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42b4fe450d31e588!2sWoof%20Tulum!5e0!3m2!1ses!2smx!4v1664055019260!5m2!1ses!2smx" className="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </>
        )} 
      </div>
      {/* <div className="perritosBottom"></div> */}
    </div>
    </Layout>
  )
}

export default IndexPage

