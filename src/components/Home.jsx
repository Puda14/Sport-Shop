import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
// import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product._id} className="product">
                  <h3>{product.name}</h3>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image?.url} alt={product.name} />
                  </Link>
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;

// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useGetAllProductsQuery } from "../features/productsAPI";
// import { addToCart } from "../features/cartSlice";
// import { useSelector } from "react-redux";

// const Home = () => {

//     // const { items: data, status} = useSelector((state) => state.products);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {data, error, isLoading} = useGetAllProductsQuery();
//     // console.log("Api", isLoading);

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//         navigate("/cart");
//     };

//     return <div className="home-container">
//         { isLoading ? (
//             <p>Loading...</p>
//           ) : error ? (
//           <p>An error occured...</p>
//           ) : (
//             <>
//                 <h2>New Arrivals</h2>
//                 <div className="products">
//                     {data?.map( (product) => (
//                     <div key={product._id} className="product">
//                         <h3>{product.name}</h3>
//                         <img src={product.image} alt ={product.name}/>
//                         <div className="details">
//                             <span>{product.desc}</span>
//                             <span className="price">${product.price}</span>
//                         </div>
//                         <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
//                     </div>
//                 ))}
//                 </div>
//             </>
//           )}
//     </div>
// }

// export default Home;
