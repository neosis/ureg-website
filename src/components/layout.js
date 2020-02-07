/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "./GlobalStyle";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/Footer";

// import "./layout.css"


const Layout = ({children}) => {
    return (
        <div>
            <GlobalStyle/>
            <React.Fragment>
                <Navbar/>
                {children}
                <Footer />
            </React.Fragment>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
