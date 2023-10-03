import React from "react";
import Accordion from "../components/business-partner/Accordion";
import FaqStatic from "../components/business-partner/FaqStatic";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";

export default function Faq() {
  return (
    <Layout>
        <div className="become-partner-bg-img"  style={{
          background:
            "url('assets/img/partner-bg.jpg')no-repeat center center / cover",
        }}>

      <Accordion Title />

      </div>
    </Layout>
  );
}
