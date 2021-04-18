import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 350px;
  height: 90vh;
  position: sticky;
  top: 5vh;
  border-radius: 10px;
  background: rgb(239 249 255);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 5vh 20px;
`;
