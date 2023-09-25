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
      <Navbar darkBg />
      <PageHeader HeaderTitle="Become A Partner" Parent="Pages" PageTitle="business Partner" />
      <Accordion Title />
      <FaqStatic Title space />
      <Footer />
    </Layout>
  );
}
