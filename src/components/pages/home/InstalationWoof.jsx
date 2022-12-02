import React from "react";
import PerroVerde from "../../../images/mobile/instalaciones/foto-perrito-verde.png";
import PerroAmarillo from "../../../images/mobile/instalaciones/foto-perrito-amarillo.png";
import PerroRojo from "../../../images/mobile/instalaciones/foto-perrito-coral.png";
import PerroAzul from "../../../images/mobile/instalaciones/foto-perrito-azul.png";
import useWindowSize from "../../../hooks/useWindowSize";
import renderStringHMTLtoJSX from "../../../utils/renderStringHMTLtoJSX";
import { useTranslation } from "gatsby-plugin-react-i18next";

const InstalationWoof = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation("instalationsWoof");

  return (
    <div id="instalaciones" className="instalaciones">
      <div className="instalacionesFirstSection">
        <h1 className="sectionTitle">{t("InstalTitle")}</h1>
        {windowSize < 752 ? (
          <>
            <h2 className="instalacionesDescription">
              {renderStringHMTLtoJSX(t("InstalDescription"))}
            </h2>
            <img className="firstPerrito" src={PerroVerde} />
          </>
        ) : (
          <div className="descriptionImageDesk">
            <h2 className="instalacionesDescription">
              {renderStringHMTLtoJSX(t("InstalDescription"))}
            </h2>
            <img className="firstPerrito" src={PerroVerde} />
          </div>
        )}
        <p className="notaras">
          {renderStringHMTLtoJSX(t("InstalDescription1"))}
        </p>
        <div className="perritosRow">
          <img src={PerroAmarillo} />
          <img src={PerroRojo} />
          <img src={PerroAzul} />
        </div>
        <p className="notaras">
          {renderStringHMTLtoJSX(t("InstalDescription2"))}
        </p>
      </div>
    </div>
  );
};

export default InstalationWoof;
