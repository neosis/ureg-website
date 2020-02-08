import React, {Component} from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import styled from "styled-components";
import {colors} from "../../../utils/Typography";

export default class Navbar extends Component {
    state={
        navbarOpen: false
    };

    handleNavbar = () => {
        this.setState(() => {return {navbarOpen: !this.state.navbarOpen}})
    };

    render() {
        return (
            <NavWrapper>
                <NavbarHeader handleNavbar={this.handleNavbar}/>
                <NavbarLinks navbarOpen={this.state.navbarOpen}/>
                {/*<NavbarIcons />*/}
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    z-index: 5;
    background-color: ${colors.surfaceColor};
    
    @media (min-width: 840px) {
      display: flex;
      align-items: center;
    }
`;
