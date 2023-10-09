import React from "react";
import AcceptableUsePolicy from "../components/AcceptableUsePolicy/AcceptableUsePolicy.js";
import Navbar from "../components/layout/header/Navbar";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/team/PageHeader";
export default function privacyPolicy() {
  return (
    <Layout>
      <Navbar darkBg  Home = "/"  Unlock = '/#pricing'  Features = "/#features"  Team = "/#team"  Contact = "/#contact" BecomeApartner = "/become-partner" />
      <PageHeader HeaderTitle="Acceptable Use Policy" Parent="Pages" PageTitle="Acceptable Use Policy" />
      <AcceptableUsePolicy/>
 
    </Layout>
  );
}
