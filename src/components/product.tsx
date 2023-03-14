// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import {NavLink} from "react-router-dom"

// interface Products {
//     id: number;
//     image: string;
//     title: string;
//     price: string;
//     category: string;
//     rating?: {
//       rate: number;
//     };
//     description?: string;
//   }
  
// export default function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Products | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       setProduct(await response.json());
//       setLoading(false);
//     };
//     getProducts();
//   }, []);

//   const Loading = () => {
//     return <>Loading...</>;
//   };

//   const ShowProduct = () => {
//     if (!product) {
//         return null;
//       }
//     return (
//       <>
//         <div className="col-md-6">
//           <img
//             src={product.image}
//             alt={product.title}
//             height="400px"
//             width="400px"
//           />
//         </div>
//         <div className="col-md-6">
//           <h4 className="text-uppercase text-black-50">{product.category}</h4>
//           <h1 className="display-5">{product.title}</h1>
//           <p className="lead fw-bolder">
//             Rating{product.rating && product.rating.rate}
//             <i className="fa fa-star"></i>
//           </p>
//           <h3 className=" display-6 fw-bold my-4">
//              Rs {product.price}
//           </h3>
//           <p className="lead">
//             {product.description}
//           </p>
//           <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
//           <NavLink  to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>

//         </div>
//       </>
//     );
//   };
//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
//       </div>
//     </div>
//   );
// }

export default function product() {
  return (
    <div>product</div>
  )
}
