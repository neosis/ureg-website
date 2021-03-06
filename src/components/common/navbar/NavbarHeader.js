import React, {Component} from 'react';
import {Link} from 'gatsby';
import logo from '../../../images/Ureg-logo.png';
import {MdMenu} from 'react-icons/md';
import styled from "styled-components";
import Header from "../../header";
import {colors} from "../../../utils/Typography";

const HeaderWrapper = styled.div`
    padding: 1.5rem 1rem;
    padding-left: 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .toggle-icon {
    font-size: 4rem;
    color: ${colors.primaryColor};
    cursor: pointer;
    }
    
    @media (min-width: 840px){
        .toggle-icon {
        display: none;
        }
    }
`;
const ImageLogo = styled.img`
padding-top: 1rem;
max-width: 15vw;
min-width: 15rem;
`;

export default class NavbarHeader extends Component {
    render() {
        const {handleNavbar} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <ImageLogo src={logo} alt={"Company Logo"}/>
                </Link>
                <MdMenu className="toggle-icon" onClick={() => {
                    handleNavbar()
                }}/>
            </HeaderWrapper>
        );
    }
};




