import React from "react";
import Layout from "../components/layout/Layout";
import LoginComponent from "../components/Login/mainView";

export default function Login() {
   
 



  return (
    <Layout>
        <div className="become-partner-bg-img"  style={{
          background:
            "url('assets/img/partner-bg.jpg')no-repeat center center / cover",
        }}>

      <LoginComponent  />

      </div>
    </Layout>
  );
}
