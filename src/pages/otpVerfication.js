import React from "react";
import Layout from "../components/layout/Layout";
import OtpVerification from "../components/Login/otpVerfication";


export default function OtpView() {


  return (
    <Layout>
      <div
        className="become-partner-bg-img"
        style={{
          background:
            "url('assets/img/partner-bg.jpg') no-repeat center center / cover",
        }}
      >
        <OtpVerification />
      </div>
    </Layout>
  );
}
