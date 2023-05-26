import React from "react";
import Product from "./Product";
import axios from "axios"
import { useState, useEffect } from "react";
import styles from "./Product.module.css";

const Products = () => {

  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const url = "https://fakestoreapi.com/products"


  const fetchedData = async () => {

    setIsLoading(true)

    try {

      const result = await axios.get(url);
      console.log(result, "--innerData")
      // const cartList = [...innerData?.results];
      // console.log(cartList, "MOVELIST")

      setResponse(result.data);

      console.log(result.data, "products")


    } catch (error) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }

  };

  useEffect(() => {

    fetchedData()

  }, []);

  console.log(response, "--DATA")





  return (
    <>
      {isLoading ? <p>loading</p> :

        <div>

          <ul className={styles.productsContainer}>

            {response.map((product, index) => (

              <li key={index}>
                <Product
                  id={product.id}
                  name={product.title}
                  imgURL={product.image}
                  price={product.price}
                />
              </li>

            ))}

          </ul>

        </div>


      }


    </>



  );
};

export default Products;
