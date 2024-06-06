import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import ProductCard from "../customer/Components/Product/ProductCard/ProductCard";
import { Backdrop, CircularProgress } from "@mui/material";
import { findProducts } from "../Redux/Customers/Product/Action";
const Homepage = () => {


  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      <div>
      <findProducts/>
      </div>
    </div>
  );
};

export default Homepage;
