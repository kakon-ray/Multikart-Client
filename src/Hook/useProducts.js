import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFunction() {
      try {
        const response = await fetch(
          `https://still-gorge-24214.herokuapp.com/product`
        );
        const json = await response.json();
        setProducts(json);
      } catch (err) {
        throw err;
        console.log(err);
      }
    }
    fetchFunction();
    // try {
    //   fetch("https://still-gorge-24214.herokuapp.com/product")
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data));
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);

  return [products, setProducts];
};

export default useProducts;
