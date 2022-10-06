import React from "react";
import Boton from "../../boton";
import ServiciosCard from "../../../components/serviciosCard";
import Regla from "../../../images/mobile/servicios/Regla_woof.svg";
import Domicilio from "../../../images/mobile/servicios/serviciosCard/auto.svg";
import Aseo from "../../../images/mobile/servicios/serviciosCard/estampilla.svg";
import BajoCosto from "../../../images/mobile/servicios/serviciosCard/plata.svg";
import Atencion from "../../../images/mobile/servicios/serviciosCard/heart.svg";
import PerritoStripping from "../../../images/desktop/servicios/perritohandstripping.svg";
import PdfPrecios from "../../../static/Precios_Woof_Final.pdf";
import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../../utils/renderStringHMTLtoJSX";

const ServiceWoof = () => {
  const Beige = "#FFF5E0";
  const White = "#FFFFFF";

  const windowSize = useWindowSize();
  const { t } = useTranslation("serviceWoof");

  return (
    <div id="servicios" className="servicios">
      {/* Services Banner */}
      <div className="serviciosFirstSection">
        <h1 className="sectionTitle">{t("BannerTitle")}</h1>
        <p className="serviciosFirstP">
          {renderStringHMTLtoJSX(t("BannerParam1"))}
        </p>
        <p className="serviciosFirstP">
          {renderStringHMTLtoJSX(t("BannerParam2"))}
        </p>
        <div className="serviciosSecondTextDiv">
          <p className="serviciosSecondText">{t("BannerParam3")}</p>
          <p className="serviciosSecondText">
            {renderStringHMTLtoJSX(t("BannerParam4"))}
          </p>
        </div>
      </div>

      {/* Service to home */}
      {windowSize < 752 ? (
        <div id="servicioDomicilio" className="serviciosSecondSection">
          <h2>{t("HomeServiceTitle")}</h2>
          <ServiciosCard
            icon={Domicilio}
            text={t("HomeServiceCard1")}
            backgroundColor={Beige}
          />
          <ServiciosCard
            icon={Aseo}
            text={t("HomeServiceCard2")}
            backgroundColor={White}
          />
          <ServiciosCard
            icon={BajoCosto}
            text={t("HomeServiceCard3")}
            backgroundColor={Beige}
          />
          <ServiciosCard
            icon={Atencion}
            text={t("HomeServiceCard4")}
            backgroundColor={White}
          />
          <div className="serviciosBotonDiv">
            <Boton url={PdfPrecios}>
              <p>{t("HomeServiceButton")}</p>
            </Boton>
          </div>
        </div>
      ) : (
        <div id="servicioDomicilio" className="serviciosSecondSectionDesk">
          <h2>{t("HomeServiceTitle")}</h2>
          <div className="serviciosCardGrid">
            <ServiciosCard
              icon={Domicilio}
              text={t("HomeServiceCard1")}
              backgroundColor={Beige}
            />
            <ServiciosCard
              icon={Aseo}
              text={t("HomeServiceCard2")}
              backgroundColor={White}
            />
          </div>
          <div className="serviciosCardGrid">
            <ServiciosCard
              icon={Atencion}
              text={t("HomeServiceCard3")}
              backgroundColor={White}
            />
            <ServiciosCard
              icon={BajoCosto}
              text={t("HomeServiceCard4")}
              backgroundColor={Beige}
            />
          </div>
          <div className="serviciosBotonDiv">
            <Boton url={PdfPrecios}>
              <p>{t("HomeServiceButton")}</p>
            </Boton>
          </div>
        </div>
      )}

      {windowSize < 752 ? (
        <div id="handstripping" className="serviciosThirdSection">
          <h2>{t("HandStrippingTitle")}</h2>
          <p>{renderStringHMTLtoJSX(t("HandStrippingDescription"))}</p>
          <img src={Regla} />
        </div>
      ) : (
        <div id="handstripping" className="serviciosThirdSectionDesk">
          <div className="handStrippingHorDiv">
            <div className="handInfo">
              <h2>{t("HandStrippingTitle")}</h2>
              <p>{renderStringHMTLtoJSX(t("HandStrippingDescription"))}</p>

              <img src={PerritoStripping} />
            </div>
            <div className="reglaDiv">
              <img src={Regla} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceWoof;
