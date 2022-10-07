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
import renderStringHMTLtoJSX from "../../../utils/renderStringHMTLtoJSX";

const AboutWoof = () => {
  const Red = "#FCCA65";
  const White = "#FFFFFF";
  const Black = "#000000";
  const Blue = "#5189D3";

  const windowSize = useWindowSize();

  const { t } = useTranslation(["aboutWoof"]);

  return (
    <div className="sobreWoof">
      {/* Banner */}
      {windowSize < 752 ? (
        <div className="sobreFirstSection">
          <img src={Huellas1} />
          <h1 className="mainTitle">
            {renderStringHMTLtoJSX(t("BannerTitle"))}
          </h1>
          <img src={PerroHome} />
          <p className="firstDescription">
            {renderStringHMTLtoJSX(t("BannerDescription"))}
          </p>
        </div>
      ) : (
        <div className="sobreFirstSectionDesk">
          <div className="leftHomeDiv">
            <img className="patasTop" src={PatasTop} />
            <h1 className="mainTitleDesk">
              {renderStringHMTLtoJSX(t("BannerTitle"))}
            </h1>
            <div className="pata-description">
              <p className="firstDescriptionDesk">
                {renderStringHMTLtoJSX(t("BannerDescription"))}
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

      {/* About Woof */}
      {windowSize < 752 ? (
        <div id="sobre" className="sobreSecondSection">
          <h1 className="sectionTitle">
            {renderStringHMTLtoJSX(t("AboutWoofTitle"))}
          </h1>
          <div className="secondSubtitle">
            <h2 className="multiColorSubt">
              {renderStringHMTLtoJSX(t("AboutWoofSlogan"))}
            </h2>
            <img src={Perro2} />
          </div>
          <p className="lightP">
            {renderStringHMTLtoJSX(t("AboutWoofParam1"))}
          </p>
          <p className="lightP">
            {renderStringHMTLtoJSX(t("AboutWoofParam2"))}
          </p>

          <h3 id="porque">{renderStringHMTLtoJSX(t("AboutWoofSubtitle"))}</h3>
          <h2 className="tricolor">
            {renderStringHMTLtoJSX(t("AboutWoofSubSlogan"))}
          </h2>
          <p className="boldP">{t("AboutWoofSubParam1")}</p>
          <p className="lightP">
            {renderStringHMTLtoJSX(t("AboutWoofSubParam2"))}
          </p>
        </div>
      ) : (
        <div id="sobre" className="sobreSecondSectionDesk">
          <h1 className="sectionTitle">
            {renderStringHMTLtoJSX(t("AboutWoofTitle"))}
          </h1>
          <div className="sobreFirstHorDivDesk">
            <div className="subtitleDescriptionDesk">
              <h2 className="multiColorSubt">
                {renderStringHMTLtoJSX(t("AboutWoofSlogan"))}
              </h2>
              <p className="lightP">
                {renderStringHMTLtoJSX(t("AboutWoofParam1"))}
              </p>
              <p className="lightP">
                {renderStringHMTLtoJSX(t("AboutWoofParam2"))}
              </p>
            </div>
            <img src={Perro2} />
          </div>

          <h3 id="porque">{renderStringHMTLtoJSX(t("AboutWoofSubtitle"))}</h3>
          <h2 className="tricolor">
            {renderStringHMTLtoJSX(t("AboutWoofSubSlogan"))}
          </h2>
          <p className="boldP">{t("AboutWoofSubParam1")}</p>
          <p className="lightP" style={{ textAlign: "center" }}>
            {renderStringHMTLtoJSX(t("AboutWoofSubParam2"))}
          </p>
          <img className="BurbujasAzules" src={BurbujasAzules} />
          <img className="BurbujasAmarillas" src={BurbujasAmarillas} />
        </div>
      )}

      {/* Services */}
      {windowSize < 752 ? (
        <div className="sobreThirdSection">
          <div className="manchasRow">
            <ManchasItem image={Mancha1} text={t("Service1")} />
            <ManchasItem image={Mancha2} text={t("Service2")} />
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha3} text={t("Service3")} />
            <ManchasItem image={Mancha4} text={t("Service4")} />
          </div>
          <div className="manchasRow">
            <ManchasItem image={Mancha5} text={t("Service5")} />
            <ManchasItem image={Mancha6} text={t("Service6")} />
          </div>
        </div>
      ) : (
        <div className="sobreThirdSectionDesk">
          <div className="manchasRowDesk">
            <ManchasItem image={Mancha1} text={t("Service1")} />
            <ManchasItem image={Mancha2} text={t("Service2")} />
            <ManchasItem image={Mancha3} text={t("Service3")} />
            <ManchasItem image={Mancha4} text={t("Service4")} />
            <ManchasItem image={Mancha5} text={t("Service5")} />
            <ManchasItem image={Mancha6} text={t("Service6")} />
          </div>
        </div>
      )}

      {/* What is */}
      {windowSize < 752 ? (
        <div id="bajoEstres" className="sobreFourthSection">
          <ManchaCard backgroundImage={ManchaCardimg}>
            <h2 className="firsth2">
              {renderStringHMTLtoJSX(t("WhatIsTitle"))}
            </h2>
            <h2 className="secondh2">
              {renderStringHMTLtoJSX(t("WhatIsSlogan"))}
            </h2>
            <p className="manchaP">
              {renderStringHMTLtoJSX(t("WhatIsDescription"))}
            </p>
          </ManchaCard>
        </div>
      ) : (
        <div id="bajoEstres" className="sobreFourthSectionDesk">
          <ManchaCard backgroundImage={ManchaCardDesk}>
            <h2 className="firsth2">
              {renderStringHMTLtoJSX(t("WhatIsTitle"))}
            </h2>
            <h2 className="secondh2">
              {renderStringHMTLtoJSX(t("WhatIsSlogan"))}
            </h2>
            <p className="manchaP">
              {renderStringHMTLtoJSX(t("WhatIsDescription"))}
            </p>
          </ManchaCard>
          <img className="huellasPeluqueria" src={HuellasPeluqueria} />
          <img className="perritoPeluqueria" src={PerritoPeluqueria} />
        </div>
      )}

      {/* Process */}
      {windowSize < 752 ? (
        <div className="sobreFifhtSection">
          <ProcessCard
            image={Perro1}
            title={t("Step1")}
            text={t("Step1Description")}
            backgroundColor={Red}
          />
          <ProcessCard
            image={Perro4}
            title={t("Step2")}
            text={t("Step2Description")}
            backgroundColor={Black}
            color={White}
          />
          <ProcessCard
            image={Perro3}
            title={t("Step3")}
            text={t("Step3Description")}
            backgroundColor={Blue}
          />
        </div>
      ) : (
        <div className="sobreFifhtSectionDesk">
          <ProcessCard
            image={Perro1}
            title={t("Step1")}
            text={t("Step1Description")}
            backgroundColor={Red}
          />
          <ProcessCard
            image={Perro4}
            title={t("Step2")}
            text={t("Step2Description")}
            backgroundColor={Black}
            color={White}
          />
          <ProcessCard
            image={Perro3}
            title={t("Step3")}
            text={t("Step3Description")}
            backgroundColor={Blue}
          />
        </div>
      )}

      {/* Tips before bath */}
      {windowSize < 752 ? (
        <div id="consejos" className="sobreSixthSection">
          <h2>{renderStringHMTLtoJSX(t("TipsTitle"))}</h2>
          <ConsejosCard text={t("TipsCard1")} icon={PerroIcon} />
          <ConsejosCard text={t("TipsCard2")} icon={Hueso} />
          <ConsejosCard text={t("TipsCard3")} icon={CepilloIcon} />
        </div>
      ) : (
        <div id="consejos" className="sobreSixthSectionDesk">
          <h2>{renderStringHMTLtoJSX(t("TipsTitle"))}</h2>
          <div className="consejosRow">
            <ConsejosCard text={t("TipsCard1")} icon={PerroIcon} />
            <ConsejosCard text={t("TipsCard2")} icon={Hueso} />
            <ConsejosCard text={t("TipsCard3")} icon={CepilloIcon} />
          </div>
        </div>
      )}

      {/* SecondBanner */}
      {windowSize < 752 ? (
        <div id="servicios" className="sobreSeventhSection">
          <h2 className="sevenH2">
            {renderStringHMTLtoJSX(t("SecondBannerTitle"))}
          </h2>
        </div>
      ) : (
        <div className="sobreSeventhSectionDesk">
          <h2 className="sevenH2Desk">
            {renderStringHMTLtoJSX(t("SecondBannerTitle"))}
          </h2>
        </div>
      )}
    </div>
  );
};

export default AboutWoof;
