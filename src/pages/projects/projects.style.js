import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 20px;
  text-align: center;

  h1 {
    color: #45505b;
    text-decoration: underline;
    text-decoration-color: #0563bb;
  }
`;

export const ProjectTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #45505b;

  .active {
    color: #0563bb;
  }
`;
export const Tag = styled.p`
  margin-right: 2ch;

  &:hover {
    cursor: pointer;
  }
`;
export const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 20px;
`;


