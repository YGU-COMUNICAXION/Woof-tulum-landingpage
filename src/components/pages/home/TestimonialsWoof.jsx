import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CarouselTestimonios from "../../../components/carousel";
import useWindowSize from "../../../hooks/useWindowSize";
import PeritoTestimonios from "../../../images/desktop/testimonios/foto (1).svg";

const TestimonialsWoof = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation("testimonialsWoof");

  return (
    <div id="testimonios" className="testimonios">
      <h1 className="sectionTitle">{t("TestimonialTitle")}</h1>
      {windowSize < 752 ? (
        <div className="carouselDiv">
          <CarouselTestimonios />
        </div>
      ) : (
        <div className="testimoniosDesk">
          <CarouselTestimonios />
          <img src={PeritoTestimonios} />
        </div>
      )}
    </div>
  );
};

export default TestimonialsWoof;
