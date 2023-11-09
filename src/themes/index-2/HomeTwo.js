import React, { useState , useEffect } from 'react';

import Footer from "../../components/layout/footer/Footer";
import AboutApp from "../../components/about/AboutApp";
import AccordionWithImg from "../../components/Faqs/AccordionWithImg";
import Contact from "../../components/contact/Contact";
import FeatureImg from "../../components/features/FeatureImg";
import Navbar from "../../components/layout/header/Navbar";
import Layout from "../../components/layout/Layout";
import Price from "../../components/prices/Price";
import PromoTwo from "../../components/promo/PromoTwo";
import VideoPromoTwo from "../../components/promo/VideoPromoTwo";
import TeamTwo from "../../components/team/TeamTwo";
import HeroTwo from "./HeroTwo";
import Subsribe from "../../components/newsletter/Subsribe";
// import BrandCarousel from "../../components/testimonial/BrandCarousel";
// import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import Screenshot from "../../components/screenshot/Screenshot";
import axios from "axios";
// import { ReactDialogBox } from '';

export default function HomeTwo() {

  const [businessCount, setBusinessCount] = useState(null);

  useEffect(()  =>  {
    // Retrieve the token from local storage
    const authToken = localStorage.getItem('authToken');
  
    // Check if the token exists
    if (authToken) {
      // Define the headers with the token
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
  
      // Make the API request with the headers
      axios.get('https://backend-partylux-staging.up.railway.app/v1/mobile/business/my-business', {
        headers: headers,
      })
        .then((response) =>  {

          const count = response.data.data.length;
        
          setBusinessCount(count)

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Handle the case where the token is missing from local storage
      console.error('Authentication token is missing');
    }
  }, []);

  return (
    <Layout>
      <Navbar darkBg businessCount = {businessCount}   />
      <HeroTwo />
      <PromoTwo />
      <AboutApp />
      <FeatureImg ImgSource="assets/img/image-10.png" />
      <VideoPromoTwo />
      <Price />
      {/* <AlertDialog isDialogOpen={isDialogOpen} handleLogout={handleLogout} /> */}
      <Screenshot hasBg />
      <TeamTwo />
      <AccordionWithImg />
      {/* <LatestNewsOne light bgColor="gray-light-bg" /> */}
      
      <Contact bgColor="gray-light-bg" />
      {/* <BrandCarousel /> */}
      <Subsribe />
      <Footer space />
    </Layout>
  );
}
