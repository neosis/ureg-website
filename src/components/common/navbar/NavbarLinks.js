import React, {Component} from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {colors} from "../../../utils/Typography";

const LoginLink = styled.a`
  // border-style: solid;
  // border-width : 0.1rem;
  // text-decoration : none;
  // padding : 1rem;
  // border-color : ${colors.primaryColor};
  // color: ${colors.primaryColor};
  // text-transform: uppercase;
  // border-radius: 0.5rem;
  
  display: block;
font-size: 1.7rem;
@media (max-width: 900px) {
  font-size: 1.5rem
 }
 
 @media (max-width: 767px) {
  font-size: 1.4rem
 }
text-decoration: none;
padding: 1rem 0.5rem;
color: ${colors.primaryColor};
font-weight: 500;
text-transform: uppercase;
cursor:pointer;
`;

export default class NavbarLinks extends Component {
    state = {
        links: [
            {
                id: 0,
                path: "/Company",
                name: "company"
            },
            {
                id: 1,
                path: "/Products",
                name: "products"
            },
            {
                id: 2,
                path: "/Careers",
                name: "careers"
            },
            {
                id: 3,
                path: "/Contact",
                name: "contact us"
            }
        ],
    };
    render() {
        return (
            <LinkWrapper open={this.props.navbarOpen}>
                {
                    this.state.links.map((link) => {return (
                        <li key={link.id}>
                            <Link to={link.path} className="nav-link">{link.name}</Link>
                        </li>
                    );})
                }
                <li>
                    <LoginLink target="_blank" rel="noopener noreferrer" href="https://u-reg.centelon.com/centelon/login/" className="nav-link loginweb">Login</LoginLink>
                </li>
            </LinkWrapper>
        );
    }
}



const LinkWrapper = styled.ul`
//display: flex;
li {
list-style-type: none;
//text-align: center;
};

.nav-link {
display: block;
font-size: 1.7rem;
 @media (max-width: 900px) {
  font-size: 1.5rem
 }
 @media (max-width: 767px) {
  font-size: 1.4rem
 }
text-decoration: none;
padding: 1rem 2.5vw;
color: ${colors.primaryColor};
font-weight: 500;
text-transform: uppercase;
cursor:pointer;
//text-align: center;
//transition: all 0.5s ease-in-out;
&:hover {
color: ${colors.onPrimary};
background-color: ${colors.primaryColor};
}
}
overflow: hidden;
transition: all 0.5s linear;
height: ${(props) => (props.open ? '200px' : '0px')};

@media (min-width: 768px){
  height: auto;
  display: flex;
  margin: 0 auto;
  .nav-link:hover {
      
      background-color: ${colors.surfaceColor};
      color: ${colors.hoverPrimaryColor};
  }
  .loginweb {
  text-decoration : none;
  color : ${colors.onPrimary};
  background-color: ${colors.primaryColor};
  text-transform: uppercase;
  border-radius: 0.5rem;
  margin-left: 5vw;
  justify-self: flex-end;
  @media (min-width: 1200px){
  margin-left: 8vw;
  }
  //justify-self: flex-end;
  &:hover {
    color : ${colors.onPrimary};
    background-color: ${colors.hoverPrimaryColor};
  }
  }
}

`;
