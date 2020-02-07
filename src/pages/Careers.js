import React from 'react';
import Layout from "../components/layout";
import {H3} from "../utils/Typography";
import SEO from "../components/seo";
import img from "../images/Home.jpeg";
import HomeHeader from "../utils/HomeHeader";

const Careers = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`u-reg`, `ureg`, `KYC`, `utility`]}/>
            <HomeHeader img={img} />
        </Layout>
    );
};

export default Careers;
