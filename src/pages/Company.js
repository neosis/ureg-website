import React from 'react';
import Layout from "../components/layout";
import {H3} from "../utils/Typography";
import SEO from "../components/seo";

const Company = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`u-reg`, `ureg`, `KYC`, `utility`]}/>
            <H3>This is company page</H3>
        </Layout>
    );
};

export default Company;
