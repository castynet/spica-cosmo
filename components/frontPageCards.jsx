import React from "react";
import styled from "styled-components";

import Card from "./person-card.jsx";
import SideBarA from "./side-bar-a";

export default function frontPageCards(){
  return(<>
        <Wrapper>
        <CardsSection>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsSection>
        <SideBarA />
      </Wrapper></>)
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardsSection = styled.div`
  margin: 50px 0 0;
  display: flex;
  flex-wrap: wrap;
  width: 900px;
`;