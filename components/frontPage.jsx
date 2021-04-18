import React from "react";
import styled from "styled-components";

export default function frontPage() {
  return (
    <>
      <Wrapper>
        <p>the finest talent across Kenya</p>
        <button>See the Talent</button>
        <div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-color: #000;
  font-family: "Unica One", cursive;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.04;
    background-image: url("https://image.freepik.com/free-photo/kenya-flag-ruffled-beautifully-waving-macro-close-up-shot_1379-77.jpg");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
  p {
    color: rgb(239 249 255);
    font-size: 80px;
    text-align: center;
    padding: 200px 0 0 0;
  }
  button {
    background: rgb(239 249 255);
    height: 30px;
    margin: 20px;
    text-align: center;
  }
`;
