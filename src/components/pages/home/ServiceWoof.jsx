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

const ServiceWoof = () => {
  const Beige = "#FFF5E0";
  const White = "#FFFFFF";

  const windowSize = useWindowSize();

  return (
    <div id="servicios" className="servicios">
      <div className="serviciosFirstSection">
        <h1 className="sectionTitle">Servicios</h1>
        <p className="serviciosFirstP">
          Contamos con el{" "}
          <span>servicio de recolección y entrega a domicilio</span> y nos
          ocupamos de todas las necesidades <span>de aseo y baño</span> que tu
          perro pueda necesitar.
        </p>
        <p className="serviciosFirstP">
          <span>¡Olvídate de largas colas y tiempo de espera!</span>
        </p>
        <div className="serviciosSecondTextDiv">
          <p className="serviciosSecondText">
            Nuestros precios pueden variar según el tamaño, la raza de tu perro
            y sus necesidades específicas.
          </p>
          <p className="serviciosSecondText">
            Aunque podemos asegurarte que somos la{" "}
            <span>mejor opción de estética canina en Tulum.</span>
          </p>
        </div>
      </div>
      {windowSize < 752 ? (
        <div id="servicioDomicilio" className="serviciosSecondSection">
          <h2>Servicio a domicilio</h2>
          <ServiciosCard
            icon={Domicilio}
            text={
              "Nosotros recogemos a tu peludo y lo regresamos a la puerta de tu casa."
            }
            backgroundColor={Beige}
          />
          <ServiciosCard
            icon={Aseo}
            text={"Aseo de primera calidad para su cachorro o perro adulto."}
            backgroundColor={White}
          />
          <ServiciosCard
            icon={BajoCosto}
            text={"Bajo costo, sin contratos, sin tarifas ocultas."}
            backgroundColor={Beige}
          />
          <ServiciosCard
            icon={Atencion}
            text={"Atención personalizada y personal amable."}
            backgroundColor={White}
          />
          <div className="serviciosBotonDiv">
            <Boton url={PdfPrecios}>
              <p>Consultar precios</p>
            </Boton>
          </div>
        </div>
      ) : (
        <div id="servicioDomicilio" className="serviciosSecondSectionDesk">
          <h2>Servicio a domicilio</h2>
          <div className="serviciosCardGrid">
            <ServiciosCard
              icon={Domicilio}
              text={
                "Nosotros recogemos a tu peludo y lo regresamos a la puerta de tu casa."
              }
              backgroundColor={Beige}
            />
            <ServiciosCard
              icon={Aseo}
              text={"Aseo de primera calidad para su cachorro o perro adulto."}
              backgroundColor={White}
            />
          </div>
          <div className="serviciosCardGrid">
            <ServiciosCard
              icon={Atencion}
              text={"Atención personalizada y personal amable."}
              backgroundColor={White}
            />
            <ServiciosCard
              icon={BajoCosto}
              text={"Bajo costo, sin contratos, sin tarifas ocultas."}
              backgroundColor={Beige}
            />
          </div>
          <div className="serviciosBotonDiv">
            <Boton url={PdfPrecios}>
              <p>Consultar precios</p>
            </Boton>
          </div>
        </div>
      )}
      {windowSize < 752 ? (
        <div id="handstripping" className="serviciosThirdSection">
          <h2>Hand Stripping</h2>
          <p>
            Se trata de una <span>muda artificial del pelo</span>. Quitamos las
            capas que están a punto de caerse para que{" "}
            <span>no dificulte el crecimiento de la nuevas capas de pelo</span>{" "}
            y así <span>crezca mucho más fuerte</span>.
          </p>
          <img src={Regla} />
        </div>
      ) : (
        <div id="handstripping" className="serviciosThirdSectionDesk">
          <div className="handStrippingHorDiv">
            <div className="handInfo">
              <h2>Hand Stripping</h2>
              <p>
                Se trata de una <span>muda artificial del pelo</span>. Quitamos
                las capas que están a punto de caerse para que{" "}
                <span>
                  no dificulte el crecimiento de la nuevas capas de pelo
                </span>{" "}
                y así <span>crezca mucho más fuerte</span>.
              </p>
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
