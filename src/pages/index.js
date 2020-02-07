import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/HomeHeader";
import img from "../images/Home.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`u-reg`, `ureg`, `KYC`, `utility`]}/>
      <HomeHeader img={img} />
  </Layout>
);

export default IndexPage;
