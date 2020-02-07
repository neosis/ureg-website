import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBeer } from 'react-icons/fa';
import {H3} from "../utils/Typography";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`u-reg`, `ureg`, `KYC`, `utility`]}/>
    <H3>This is home page</H3>
  </Layout>
);

export default IndexPage;
