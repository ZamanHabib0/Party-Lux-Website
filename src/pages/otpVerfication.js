import React from "react";
import Layout from "../components/layout/Layout";
import OtpVerfication from "../components/Login/otpVerfication";

export default function Login() {
   
 



  return (
    <Layout>
        <div className="become-partner-bg-img"  style={{
          background:
            "url('assets/img/partner-bg.jpg')no-repeat center center / cover",
        }}>

      <OtpVerfication  />

      </div>
    </Layout>
  );
}
