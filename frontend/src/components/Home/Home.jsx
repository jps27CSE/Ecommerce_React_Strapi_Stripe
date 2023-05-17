import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getCategoris();
  }, []);

  const getCategoris = () => {
    fetchDataFromApi("/api/categories?populate=*").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
