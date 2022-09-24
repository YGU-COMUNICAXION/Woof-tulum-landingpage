import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./styles.css"

function UncontrolledExample() {
  return (
    <Carousel slidesToShow={1}>
      <Carousel.Item>
        <div className='yellowDiv'>
            <p className='testimonio'>“Son muy amables y el servicio que ofrecen es muy bueno, quedé fascinada con ellos pues el trato que tuvieron con Nico fue muy bueno, lo llevé por un corte y salí con par de cositas extra pues lo que ofrecen es muy funcional y está bien padre.”</p>
            <p className='user'>Andrea</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='yellowDiv'>
            <p className='testimonio'>“Me gustaron las instalaciones y la limpieza que hay en el lugar, las personas que me atendieron me ayudaron bastante a elegir mi compra, tienen todo bien ordenado y me ayudaron a elegir las tallas de la ropa para mis perritos.”</p>
            <p className='user'>Laura</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='yellowDiv'>
            <p className='testimonio'>“Vine aquí por recomendación de una amiga y fue lo mejor, llegar está bien fácil, y bueno ya en el lugar nos trataron a Bruno y a mí de maravilla, me gusta el que los servicios que ofrecen son personalizados dependiendo cada perrito.”</p>
            <p className='user'>Marina</p>
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