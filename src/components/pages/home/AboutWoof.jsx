import React from "react";
import BurbujasAzules from "../../../images/desktop/layout/círculos-verdes.svg";
import BurbujasAmarillas from "../../../images/desktop/layout/círculos-amarillos.svg";
import Huellas1 from "../../../images/mobile/sobre/Group 70.svg";
import PerroHome from "../../../images/mobile/sobre/perropatas.svg";
import Perro2 from "../../../images/mobile/sobre/foto-perrito.svg";
import ManchasItem from "../../../components/manchasItem";
import Mancha1 from "../../../images/mobile/sobre/mancha-cepillo.svg";
import Mancha2 from "../../../images/mobile/sobre/mancha-huella.svg";
import Mancha3 from "../../../images/mobile/sobre/manchaorejas.svg";
import Mancha4 from "../../../images/mobile/sobre/mancha-jabon.svg";
import Mancha5 from "../../../images/mobile/sobre/mancha-jerginga.svg";
import Mancha6 from "../../../images/mobile/sobre/mancha-cola.svg";
import ManchaCard from "../../../components/manchaCard/ index";
import ManchaCardimg from "../../../images/mobile/sobre/mancha-contenedor.svg";
import ManchaCardDesk from "../../../images/desktop/sobre/contenedor-por-que-una-peluqería.svg";
import ProcessCard from "../../../components/processCard";
import Perro1 from "../../../images/mobile/sobre/processCards/foto-1.png";
import Perro3 from "../../../images/mobile/sobre/processCards/foto-3.png";
import Perro4 from "../../../images/mobile/sobre/processCards/foto-4.png";
import ConsejosCard from "../../../components/consejosCard";
import PerroIcon from "../../../images/mobile/sobre/consejosCards/perro.svg";
import Hueso from "../../../images/mobile/sobre/consejosCards/hueso.svg";
import CepilloIcon from "../../../images/mobile/sobre/consejosCards/cepillo.svg";
import PatasTop from "../../../images/desktop/sobre/patas top.svg";
import PataAmarilla from "../../../images/desktop/sobre/pataAmarilla.svg";
import PataAzul from "../../../images/desktop/sobre/pataazul.svg";
import PerroHomeDesk from "../../../images/desktop/sobre/foto-home.svg";
import HuellasPeluqueria from "../../../images/desktop/sobre/huellaspeluqueria.svg";
import PerritoPeluqueria from "../../../images/desktop/sobre/foto-perrito.svg";

import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AboutWoof = () => {
  const Red = "#FCCA65";
  const Beige = "#FFF5E0";
  const White = "#FFFFFF";
  const Black = "#000000";
  const Blue = "#5189D3";

  const windowSize = useWindowSize();

  const { t } = useTranslation();

  return (
    <div className="sobreWoof">
      {/* Banner */}
      {windowSize < 752 ? (
        <div className="sobreFirstSection">
          <img src={Huellas1} />
          <h1 className="mainTitle">
            En <span>Woof Tulum</span> hacemos mucho más que{" "}
            <span2>
              cuidar mascotas
              {/* Obtener texto de Banner.Title */}
              {t("Banner")}
            </span2>
          </h1>
          <img src={PerroHome} />
          <p className="firstDescription">
            Nos preocupamos por tu mascota tanto como nos preocupamos por la
            nuestra. Así que puedes encontrar en <span>nuestro equipo</span> a{" "}
            <span>amantes de los animales</span> con la experiencia para
            brindarte el servicio de calidad que tus amigos perrunos se merecen.
          </p>
        </div>
      ) : (
        <div className="sobreFirstSectionDesk">
          <div className="leftHomeDiv">
            <img className="patasTop" src={PatasTop} />
            <h1 className="mainTitleDesk">
              En <span>Woof Tulum</span> hacemos mucho más que{" "}
              <span2>cuidar mascotas</span2>
            </h1>
            <div className="pata-description">
              <p className="firstDescriptionDesk">
                Nos preocupamos por tu mascota tanto como nos preocupamos por la
                nuestra. Así que puedes encontrar en <span>nuestro equipo</span>{" "}
                a <span>amantes de los animales</span> con la experiencia para
                brindarte el servicio de calidad que tus amigos perrunos se
                merecen.
              </p>
              <img src={PataAmarilla} />
            </div>
            <img className="pataAzul" src={PataAzul} />
          </div>
          <div className="perroHomeDiv">
            <img className="perroHomeDesk" src={PerroHomeDesk} />
          </div>
        </div>
      )}

      {windowSize < 752 ? (
        <div id="sobre" className="sobreSecondSection">
          <h1 className="sectionTitle">Sobre Woof Tulum</h1>
          <div className="secondSubtitle">
            <h2 className="multiColorSubt">
              Mucho más <span>que</span> <span1>Estética</span1>
            </h2>
            <img src={Perro2} />
          </div>
          <p className="lightP">
            Ante todo, somos unos verdaderos{" "}
            <span>amantes de los animales</span>.
          </p>
          <p className="lightP">
            {" "}
            Y esa, es la <span>principal razón</span> que nos ha llevado a{" "}
            <span>fundar Woof Tulum</span>, una{" "}
            <span>peluquería canina especializada en cuidar y mimar</span> a las
            mascotas siguiendo un modelo de estética de bajo estrés.
          </p>
          <h3 id="porque">¿Por qué una peluquería canina? </h3>
          <h2 className="tricolor">
            Bañar, <span>secar,</span> <span1>cortar…</span1>
          </h2>
          <p className="boldP">
            La peluquería canina es mucho más que el arreglo o la estética del
            animal.
          </p>
          <p className="lightP">
            En <span>Woof Tulum</span>, te ayudamos a mantener{" "}
            <span>la higiene de tu mascota</span> como{" "}
            <span>prevención de su salud</span> y a{" "}
            <span>detectar alteraciones en su piel</span>, así como alguna
            enfermedad. También realizamos estas otras tareas.
          </p>
        </div>
      ) : (
        <div id="sobre" className="sobreSecondSectionDesk">
          <h1 className="sectionTitle">Sobre Woof Tulum</h1>
          <div className="sobreFirstHorDivDesk">
            <div className="subtitleDescriptionDesk">
              <h2 className="multiColorSubt">
                Mucho más <span>que</span> <span1>Estética</span1>
              </h2>
              <p className="lightP">
                Ante todo, somos unos verdaderos{" "}
                <span>amantes de los animales</span>.
              </p>
              <p className="lightP">
                {" "}
                Y esa, es la <span>principal razón</span> que nos ha llevado a{" "}
                <span>fundar Woof Tulum</span>, una{" "}
                <span>peluquería canina especializada en cuidar y mimar</span> a
                las mascotas siguiendo un modelo de estética de bajo estrés.
              </p>
            </div>
            <img src={Perro2} />
          </div>
          <h3 id="porque">¿Por qué una peluquería canina? </h3>
          <h2 className="tricolor">
            Bañar, <span>secar,</span> <span1>cortar…</span1>
          </h2>
          <p className="boldP">
            La peluquería canina es mucho más que el arreglo o la estética del
            animal.
          </p>
          <p className="lightP" style={{ textAlign: "center" }}>
            En <span>Woof Tulum</span>, te ayudamos a mantener{" "}
            <span>la higiene de tu mascota</span> como{" "}
            <span>prevención de su salud</span> y a{" "}
            <span>detectar alteraciones en su piel</span>, así como alguna
            enfermedad. También realizamos estas otras tareas.
          </p>
          <img className="BurbujasAzules" src={BurbujasAzules} />
          <img className="BurbujasAmarillas" src={BurbujasAmarillas} />
        </div>
      )}

      {windowSize < 752 ? (
        <div className="sobreThirdSection">
          <div className="manchasRow">
            <ManchasItem
              image={Mancha1}
              text={"Peinar y cepillar el manto del perro"}
            />
            <ManchasItem image={Mancha2} text={"Cortar las uñas"} />
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha3} text={"Limpieza del canal auditivo"} />
            <ManchasItem
              image={Mancha4}
              text={"Aplicacion de trtamientos para mejorar el pelaje"}
            />
          </div>
          <div className="manchasRow">
            <ManchasItem
              image={Mancha5}
              text={"Vacunación y desparacitación"}
            />
            <ManchasItem
              image={Mancha6}
              text={"Limpieza de glándulas anales"}
            />
          </div>
        </div>
      ) : (
        <div className="sobreThirdSectionDesk">
          <div className="manchasRowDesk">
            <ManchasItem
              image={Mancha1}
              text={"Peinar y cepillar el manto del perro"}
            />
            <ManchasItem image={Mancha2} text={"Cortar las uñas"} />
            <ManchasItem image={Mancha3} text={"Limpieza del canal auditivo"} />
            <ManchasItem
              image={Mancha4}
              text={"Aplicacion de trtamientos para mejorar el pelaje"}
            />
            <ManchasItem
              image={Mancha5}
              text={"Vacunación y desparacitación"}
            />
            <ManchasItem
              image={Mancha6}
              text={"Limpieza de glándulas anales"}
            />
          </div>
        </div>
      )}

      {windowSize < 752 ? (
        <div id="bajoEstres" className="sobreFourthSection">
          <ManchaCard backgroundImage={ManchaCardimg}>
            <h2 className="firsth2">
              ¿Que es una peluqueria de <span>bajo estrés?</span>
            </h2>
            <h2 className="secondh2">
              En <span>Woof Tulum Spa</span>, tu mascota marca el ritmo
            </h2>
            <p className="manchaP">
              Queremos que tus caninos se sientan{" "}
              <span>
                como en casa y estén felices cuando vengas a buscarlos
              </span>
              . Por ello hemos apostado por un modelo de{" "}
              <span>peluquería canina de bajo estrés</span>.
            </p>
          </ManchaCard>
        </div>
      ) : (
        <div id="bajoEstres" className="sobreFourthSectionDesk">
          <ManchaCard backgroundImage={ManchaCardDesk}>
            <h2 className="firsth2">
              ¿Que es una peluqueria de <span>bajo estrés?</span>
            </h2>
            <h2 className="secondh2">
              En <span>Woof Tulum Spa</span>, tu mascota marca el ritmo
            </h2>
            <p className="manchaP">
              Queremos que tus caninos se sientan{" "}
              <span>
                como en casa y estén felices cuando vengas a buscarlos
              </span>
              . Por ello hemos apostado por un modelo de{" "}
              <span>peluquería canina de bajo estrés</span>.
            </p>
          </ManchaCard>
          <img className="huellasPeluqueria" src={HuellasPeluqueria} />
          <img className="perritoPeluqueria" src={PerritoPeluqueria} />
        </div>
      )}

      {windowSize < 752 ? (
        <div className="sobreFifhtSection">
          <ProcessCard
            image={Perro1}
            title={"Antes de la sesión"}
            text={
              "Creamos un clima de calma y contemplamos el comportamiento de tu perro. La primera sesión será más lenta, ya que es una nueva experiencia para tu amigo peludo y requiere de un proceso de adaptación. El fin es evitarle el sentimiento miedo y desconfianza que le genera entrar a una peluquería canina."
            }
            backgroundColor={Red}
          />
          <ProcessCard
            image={Perro4}
            title={"Durante la sesión"}
            text={
              "Presentamos el material de manera progresiva, es decir, las máquinas de corte, secador, bañera, etcétera y cuidamos la potencia del aire, la temperatura o fuerza del agua, así como la velocidad del corte. Sin prisa pero sin pausa. El ritmo de trabajo es lento, para que el perro asimile el proceso y vaya poco a poco sintiendo confianza con su peluquero."
            }
            backgroundColor={Black}
            color={White}
          />
          <ProcessCard
            image={Perro3}
            title={"El momento del baño"}
            text={
              "Es lento, ya que dejamos que tu peludo tenga contacto con el agua y no se asuste. Si se muestra tranquilo, mojamos el resto del cuerpo a través de una ducha suave. Asimismo, utilizamos los mejores productos para mantener el pH del pelaje y evitar reacciones alérgicas."
            }
            backgroundColor={Blue}
          />
        </div>
      ) : (
        <div className="sobreFifhtSectionDesk">
          <ProcessCard
            image={Perro1}
            title={"Antes de la sesión"}
            text={
              "Creamos un clima de calma y contemplamos el comportamiento de tu perro. La primera sesión será más lenta, ya que es una nueva experiencia para tu amigo peludo y requiere de un proceso de adaptación. El fin es evitarle el sentimiento miedo y desconfianza que le genera entrar a una peluquería canina."
            }
            backgroundColor={Red}
          />
          <ProcessCard
            image={Perro4}
            title={"Durante la sesión"}
            text={
              "Presentamos el material de manera progresiva, es decir, las máquinas de corte, secador, bañera, etcétera y cuidamos la potencia del aire, la temperatura o fuerza del agua, así como la velocidad del corte. Sin prisa pero sin pausa. El ritmo de trabajo es lento, para que el perro asimile el proceso y vaya poco a poco sintiendo confianza con su peluquero."
            }
            backgroundColor={Black}
            color={White}
          />
          <ProcessCard
            image={Perro3}
            title={"El momento del baño"}
            text={
              "Es lento, ya que dejamos que tu peludo tenga contacto con el agua y no se asuste. Si se muestra tranquilo, mojamos el resto del cuerpo a través de una ducha suave. Asimismo, utilizamos los mejores productos para mantener el pH del pelaje y evitar reacciones alérgicas."
            }
            backgroundColor={Blue}
          />
        </div>
      )}

      {windowSize < 752 ? (
        <div id="consejos" className="sobreSixthSection">
          <h2>
            Consejos para <span>antes</span> y <span1>después</span1> del baño{" "}
          </h2>
          <ConsejosCard
            text={
              "Media hora antes de la sesión dale un paseo relajante para que gaste energía, haga sus necesidades y se sienta más cómodo."
            }
            icon={PerroIcon}
          />
          <ConsejosCard
            text={
              "Al salir de la peluquería puedes premiarle con golosinas para reforzar positivamente su comportamiento."
            }
            icon={Hueso}
          />
          <ConsejosCard
            text={
              "Cepilla regularmente a tu perrito en casa para que se acostumbre a este tipo de acción y no sienta extraño cuando un desconocido lo peine."
            }
            icon={CepilloIcon}
          />
        </div>
      ) : (
        <div id="consejos" className="sobreSixthSectionDesk">
          <h2>
            Consejos para <span>antes</span> y <span1>después</span1> del baño{" "}
          </h2>
          <div className="consejosRow">
            <ConsejosCard
              text={
                "Media hora antes de la sesión dale un paseo relajante para que gaste energía, haga sus necesidades y se sienta más cómodo."
              }
              icon={PerroIcon}
            />
            <ConsejosCard
              text={
                "Al salir de la peluquería puedes premiarle con golosinas para reforzar positivamente su comportamiento."
              }
              icon={Hueso}
            />
            <ConsejosCard
              text={
                "Cepilla regularmente a tu perrito en casa para que se acostumbre a este tipo de acción y no sienta extraño cuando un desconocido lo peine."
              }
              icon={CepilloIcon}
            />
          </div>
        </div>
      )}

      {windowSize < 752 ? (
        <div id="servicios" className="sobreSeventhSection">
          <h2 className="sevenH2">
            Servicios de <span>primera calidad</span> para que puedas{" "}
            <span>consentir a tu peludo</span>.
          </h2>
        </div>
      ) : (
        <div className="sobreSeventhSectionDesk">
          <h2 className="sevenH2Desk">
            Servicios de <span>primera calidad</span> para que puedas{" "}
            <span>consentir a tu peludo</span>.
          </h2>
        </div>
      )}
    </div>
  );
};

export default AboutWoof;
