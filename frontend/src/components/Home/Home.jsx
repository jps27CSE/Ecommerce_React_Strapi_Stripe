import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategoris();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((response) => {
      console.log(response);
      setProducts(response);
    });
  };

  const getCategoris = () => {
    fetchDataFromApi("/api/categories?populate=*").then((response) => {
      console.log(response);
      setCategories(response);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
