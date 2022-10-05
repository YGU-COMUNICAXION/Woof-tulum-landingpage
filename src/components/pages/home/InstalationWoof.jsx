import React from "react";
import PerroVerde from "../../../images/mobile/instalaciones/foto-perrito-verde.svg";
import PerroAmarillo from "../../../images/mobile/instalaciones/foto-perrito-amarillo.svg";
import PerroRojo from "../../../images/mobile/instalaciones/foto-perrito-coral.svg";
import PerroAzul from "../../../images/mobile/instalaciones/foto-perrito-azul.svg";
import useWindowSize from "../../../hooks/useWindowSize";

const InstalationWoof = () => {
  const windowSize = useWindowSize();

  return (
    <div id="instalaciones" className="instalaciones">
      <div className="instalacionesFirstSection">
        <h1 className="sectionTitle">Instalaciones</h1>
        {windowSize < 752 ? (
          <>
            <h2 className="instalacionesDescription">
              <span>Woof Tulum</span> <span1>es un lugar de</span1> respeto,{" "}
              <span2>tranquilidad,</span2> higiene, <span2>belleza</span2>{" "}
              <span1>y</span1> diseño de imagen.
            </h2>
            <img className="firstPerrito" src={PerroVerde} />
          </>
        ) : (
          <div className="descriptionImageDesk">
            <h2 className="instalacionesDescription">
              <span>Woof Tulum</span> <span1>es un lugar de</span1> respeto,{" "}
              <span2>tranquilidad,</span2> higiene, <span2>belleza</span2>{" "}
              <span1>y</span1> diseño de imagen.
            </h2>
            <img className="firstPerrito" src={PerroVerde} />
          </div>
        )}
        <p className="notaras">
          Notarás el resultado a un <span>precio justo</span> y lo más
          importante es la <span>responsabilidad</span> que tenemos con nuestros{" "}
          <span>amigos peludos.</span>
        </p>
        <div className="perritosRow">
          <img src={PerroAmarillo} />
          <img src={PerroRojo} />
          <img src={PerroAzul} />
        </div>
        <p className="notaras">
          También vendemos <span>alimento y accesorios</span> para tus mascotas
        </p>
      </div>
    </div>
  );
};

export default InstalationWoof;
