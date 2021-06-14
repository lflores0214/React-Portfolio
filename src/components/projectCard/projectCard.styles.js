import styled from "styled-components";

export const CardOverlay = styled.div`
  position: absolute;
  background-color: transparent;
  color: transparent;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    display: inline-block;
    color: black;

    a {
      color: #45505b;
    }
  }
`;

export const Card = styled.div`
  position: relative;

  box-shadow: 2px 2px rgba(100, 100, 100, 0.8);
  background: url(${(props) => props.img});
  height: auto;
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProjectLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 25%;
  font-size: 1.5rem;
  a {
    color: transparent;
  }
`;
