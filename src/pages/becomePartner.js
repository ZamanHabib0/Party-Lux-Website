import React from "react";
import MainView from "../components/business-partner/mainView";
import Layout from "../components/layout/Layout";

export default function BusinessPartner() {
   
 



  return (
    <Layout>
        <div className="become-partner-bg-img"  style={{
          background:
            "url('assets/img/partner-bg.jpg')no-repeat center center / cover",
        }}>

      <MainView  />

      </div>
    </Layout>
  );
}
