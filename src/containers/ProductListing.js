import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

//create component

const ProductListing = () => {
  const products = useSelector((state) => state);

  // using useDispatch hook
  const dispatch = useDispatch();

  // function for fetching products from API
  const fetchProducts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=20")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setProducts(response.data));
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
