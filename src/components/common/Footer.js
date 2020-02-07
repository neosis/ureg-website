import React, {Component} from 'react';
import {FaTwitter, FaLinkedin} from "react-icons/fa";
import styled from "styled-components";
import {colors, H4, P} from "../../utils/Typography";

const FooterWrapper = styled.footer`
background-color: ${colors.secondaryColor};
padding: 2rem;
display: flex;
@media (max-width: 500px){
  flex-direction: column;
  & > * {
  margin-top: 2rem;
  }
}
align-items: center;
justify-content: space-around;
.icon {
  color: white;
}
`;
const H4OnSecondary = styled.h4`
  color: #fff;
  display: inline;
  font-size: 2rem;
`;
export default class Footer extends Component {
    state={
        icons: [
            {id: 1, icon: <FaTwitter className="icon twitter-icon"/>, path: "https://www.ureg.netlify.com"},
            {id: 2, icon: <FaLinkedin className="icon linkedin-icon"/>, path: "https://www.ureg.netlify.com"},
        ],
    };
    render() {
        return (
            <FooterWrapper>
                <H4OnSecondary>U-reg Pte. Ltd</H4OnSecondary>
                {
                    this.state.icons.map((item)=>(
                        <a key={item.id} href="#">{item.icon}</a>
                    ))
                }
                <P style={{display: "inline"}}>copyright &copy; 2020 u-reg</P>

            </FooterWrapper>
        );
    }
}
