import styled from "styled-components";

export const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1,
  p {
    letter-spacing: 1.5px;
  }
`;

export const Title = styled.h1`
  color: #45505b;
  font-size: 64px;
  width: 90%;
`;

export const Iama = styled.p`
  width: 90%;
  font-size: 26px;

  span {
    display: inline-block;
    margin-left: 5px;
    color: #0563bb;
  }
`;
export const Description = styled.p`
  font-size: 26px;
  width: 90%;
  margin: none;
  
`;
export const NextPage = styled.div`
width: 75%;
border-top: 1px solid #0563bb

`