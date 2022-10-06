import React from "react";
import HuellasA from "../../../images/mobile/cita/patas-top.svg";
import PerritoCita from "../../../images/desktop/cita/foto-perrito-haz-tu-cita.svg";
import HuellasCita from "../../../images/desktop/cita/patitascita.svg";
import Boton from "../../../components/boton";
import WhatsappButton from "../../../images/mobile/cita/WhatsappLogo.svg";
import BurbujasRojas from "../../../images/desktop/layout/circulos-coral.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AppointmentWoof = () => {
  const windowSize = useWindowSize();

  const { t } = useTranslation("appointmentWoof");

  return (
    <div className="cita">
      {windowSize < 752 ? (
        <>
          <div id="cita" className="citaFirstSection">
            <img src={HuellasA} />
            <div className="hazCitaDiv">
              <h2>Haz tu cita</h2>
              <p className="hazCitaFirstP">
                Comprueba nuestra <span>disponibilidad</span> y{" "}
                <span>reserva la fecha y la hora</span> que más te convengan. Te
                sugerimos <span>agendar</span> con al menos{" "}
                <span>1 día de anticipación</span> para garantizar que tengamos
                espacio disponible para tu mascota.
              </p>
              <p className="hazCitaSecondP">
                *En caso de que tu mascota venga con pulgas y/o garrapatas
                considera que se aplicará un tarifa extra a tu servicio.
              </p>
              <Boton url={"https://wa.me/529842170782"}>
                <img src={WhatsappButton} />
                <p>Agendar cita</p>
              </Boton>
            </div>
          </div>
          <div className="citaSecondSection">
            <div className="regaloDiv">
              <h2>¡Regalo para tu peludo!</h2>
              <p className="regaloP">
                Por ser <span>cliente frecuente</span>, el{" "}
                <span>10mo baño</span> va por nuestra cuenta.{" "}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="cita" className="citaFirstSectionDesk">
            <div className="citaUpperDiv">
              <div className="hazCitaDivDesk">
                <h2>Haz tu cita</h2>
                <p className="hazCitaFirstP">
                  Comprueba nuestra <span>disponibilidad</span> y{" "}
                  <span>reserva la fecha y la hora</span> que más te convengan.
                  Te sugerimos <span>agendar</span> con al menos{" "}
                  <span>1 día de anticipación</span> para garantizar que
                  tengamos espacio disponible para tu mascota.
                </p>
                <p className="hazCitaSecondP">
                  *En caso de que tu mascota venga con pulgas y/o garrapatas
                  considera que se aplicará un tarifa extra a tu servicio.
                </p>
                <div className="citabotonDivDesk">
                  <Boton url={"https://wa.me/529842170782"}>
                    <img src={WhatsappButton} />
                    <p>Agendar cita</p>
                  </Boton>
                </div>
              </div>
              <img src={PerritoCita} />
            </div>
            <div className="regaloDivDesk">
              <div className="regaloDivInfo">
                <h2>¡Regalo para tu peludo!</h2>
                <p className="regaloPDesk">
                  Por ser <span>cliente frecuente</span>, el{" "}
                  <span>10mo baño</span> va por nuestra cuenta.{" "}
                </p>
              </div>
            </div>
            <img className="BurbujasRojas" src={BurbujasRojas} />
            <img className="huellasCita" src={HuellasCita} />
          </div>
        </>
      )}
    </div>
  );
};

export default AppointmentWoof;
