import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ContactoCard from "../../../components/contactoCard";
import Phone from "../../../images/mobile/contacto/Phone.svg";
import Clock from "../../../images/mobile/contacto/Clock.svg";
import Ubi from "../../../images/mobile/contacto/MapPin.svg";
import useWindowSize from "../../../hooks/useWindowSize";

const ContactWoof = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation("contactWoof");

  return (
    <div id="contacto" className="contacto">
      <h1 className="sectionTitle">{t("ContactTitle")}</h1>
      {windowSize < 752 ? (
        <>
          <div className="contactoCardsDiv">
            <ContactoCard
              icon={Phone}
              title={t("Subtitle1")}
              info={t("Info1")}
            />
            <ContactoCard icon={Clock} title={t("Subtitle2")} info={t("Info2")}>
              <p>{t("Info2.1")}</p>
            </ContactoCard>
            <ContactoCard icon={Ubi} title={t("Subtitle3")} info={t("Info3")} />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14975.835857120077!2d-87.4692647!3d20.2190262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42b4fe450d31e588!2sWoof%20Tulum!5e0!3m2!1ses!2smx!4v1664055019260!5m2!1ses!2smx"
            className="mapa"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      ) : (
        <>
          <div className="contactoDeskDiv">
            <div className="contactoCardsDivDesk">
              <ContactoCard
                icon={Phone}
                title={t("Subtitle1")}
                info={t("Info1")}
              />
              <ContactoCard
                icon={Clock}
                title={t("Subtitle2")}
                info={t("Info2")}
              >
                <p>{t("Info2.1")}</p>
              </ContactoCard>
              <ContactoCard
                icon={Ubi}
                title={t("Subtitle3")}
                info={t("Info3")}
              />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14975.835857120077!2d-87.4692647!3d20.2190262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42b4fe450d31e588!2sWoof%20Tulum!5e0!3m2!1ses!2smx!4v1664055019260!5m2!1ses!2smx"
              className="mapa"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactWoof;
