import React from 'react';
import Layout from "../components/layout";
import {H3} from "../utils/Typography";
import SEO from "../components/seo";

const Careers = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`u-reg`, `ureg`, `KYC`, `utility`]}/>
            <H3>This is careers page</H3>
        </Layout>
    );
};

export default Careers;
