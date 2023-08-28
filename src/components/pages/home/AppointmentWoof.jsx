import React from "react";
import HuellasA from "../../../images/mobile/cita/patas-top.svg";
import PerritoCita from "../../../images/desktop/cita/foto-perrito-haz-tu-cita.svg";
import HuellasCita from "../../../images/desktop/cita/patitascita.svg";
import Boton from "../../../components/boton";
import WhatsappButton from "../../../images/mobile/cita/WhatsappLogo.svg";
import BurbujasRojas from "../../../images/desktop/layout/circulos-coral.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../../utils/renderStringHMTLtoJSX";

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
              <h2>{t("AppointmentTitle")}</h2>
              <p className="hazCitaFirstP">
                {renderStringHMTLtoJSX(t("AppointmentParam1"))}
              </p>
              <p className="hazCitaSecondP">{t("AppointmentParam2")}</p>
              <Boton url={"https://wa.me/529842170782"}>
                <img src={WhatsappButton} />
                <p>{t("ButtonText")}</p>
              </Boton>
            </div>
          </div>
          <div className="citaSecondSection">
            <div className="regaloDiv">
              <h2>{t("AppointmentTitle2")}</h2>
              <p className="regaloP">
                {renderStringHMTLtoJSX(t("AppointmentParam3"))}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="cita" className="citaFirstSectionDesk">
            <div className="citaUpperDiv">
              <div className="hazCitaDivDesk">
                <h2>{t("AppointmentTitle")}</h2>
                <p className="hazCitaFirstP">
                  {renderStringHMTLtoJSX(t("AppointmentParam1"))}
                </p>
                <p className="hazCitaSecondP">{t("AppointmentParam2")}</p>
                <div className="citabotonDivDesk">
                  <Boton url={"https://wa.me/529842170782"}>
                    <img src={WhatsappButton} />
                    <p>{t("ButtonText")}</p>
                  </Boton>
                </div>
              </div>
              <img src={PerritoCita} />
            </div>
            <div className="regaloDivDesk">
              <div className="regaloDivInfo">
                <h2>{t("AppointmentTitle2")}</h2>
                <p className="regaloPDesk">
                  {renderStringHMTLtoJSX(t("AppointmentParam3"))}
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
