import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsScreen = () => {
 const [data1, setdata1] = useState({});
 const data = useParams();

 useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${data.id}`)
      .then((response) => {
        // console.log(response);
        setdata1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
 }, [data.id]);

 const handleIncrement = () => {
    setdata1({ ...data1, rating: { ...data1.rating, count: data1.rating.count + 1 } });
 };

 const handleDecrement = () => {
    setdata1({ ...data1, rating: { ...data1.rating, count: data1.rating.count - 1 } });
 };

 return (
    <>
      {Object.keys(data1).length > 0 ? (
        <div className="items">
          <img src={data1.image} alt="" width={200} height={200} />
          <div className="block1">
          <h1 className="headings"> Category:</h1>
          <h1 className="data">{data1.category}</h1>
          </div>
          <div className="block2">
          <h1 className="headings">Title:</h1>
          <h1 className="data">{data1.title}</h1>
          </div>
          <div className="block3">
          <h1 className="headings"> Price:</h1>
          <h1 className="data">${data1.price}</h1>
         </div>
         <div className="block4">
          <h1 className="headings">Product Description:</h1>
          <h1 className="data">{data1.description}</h1>
         </div>
          <div className="incredecre">
            <h1 className="headings">Count:</h1>
          <button onClick={handleDecrement}>-</button>
          <h1 className="data1">{data1.rating.count}</h1>
          <button onClick={handleIncrement}>+</button>
          </div>
        <div className="block5">
          <h1 className="headings">Rating:</h1>
          <h1 className="data">{data1.rating.rate}</h1>
          </div>
        </div>
      ) : (
        <h2>loading</h2>
      )}
      </>
 )
      }
      export default ProductsScreen