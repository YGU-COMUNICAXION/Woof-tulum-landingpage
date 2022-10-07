import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useTranslation } from "gatsby-plugin-react-i18next";

function UncontrolledExample() {
  const { t } = useTranslation("testimonialsWoof");
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card1")}</p>
          <p className="user">Andrea</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card2")}</p>
          <p className="user">Laura</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card3")}</p>
          <p className="user">Marina</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card4")}</p>
          <p className="user">Nicolás</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card5")}</p>
          <p className="user">Oscar</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card6")}</p>
          <p className="user">Vanesa</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card7")}</p>
          <p className="user">Martín</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="yellowDiv">
          <p className="testimonio">{t("Card8")}</p>
          <p className="user">Carla</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

// function UncontrolledExample() {
//     return (
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }

//   export default UncontrolledExample;
