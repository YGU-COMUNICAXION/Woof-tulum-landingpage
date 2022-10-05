import * as React from "react";
import "../css/home.css";

import Layout from "../components/layout";
import AboutWoof from "../components/pages/home/AboutWoof";
import ServiceWoof from "../components/pages/home/ServiceWoof";
import InstalationWoof from "../components/pages/home/InstalationWoof";
import AppointmentWoof from "../components/pages/home/AppointmentWoof";
import TestimonialsWoof from "../components/pages/home/TestimonialsWoof";
import ContactWoof from "../components/pages/home/ContactWoof";

const IndexPage = () => {
  return (
    <Layout>
      <div id="inicio" className="mainDiv">
        <AboutWoof />

        <ServiceWoof />

        <InstalationWoof />

        <AppointmentWoof />

        <TestimonialsWoof />

        <ContactWoof />
      </div>
    </Layout>
  );
};

export default IndexPage;
