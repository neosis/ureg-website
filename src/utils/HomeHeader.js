import React from 'react';
import styled from "styled-components";
const IndexHeader = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
align-items: center;
justify-items: center;
.image {
  //min-height: 85vh;
  width: 100%;
  grid-column: 1/1;
  grid-row: 1/1;
}
`;
const HomeHeader = ({img}) => {
    return (
        <IndexHeader>
            <img src={img} alt={"KYC document exchange"} className="image" />
        </IndexHeader>
    );
};

export default HomeHeader;
