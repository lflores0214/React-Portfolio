import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 97.85vh;
  width: 150px;
  padding: 10px;

  a {
    color: #45505b;
    text-decoration: none;
    font-size: 16px;
    line-height: 4ch;
    width: 100%;
    text-align: center;
  }
  .active {
    color: #0563bb;
    text-decoration: underline;
  }
`;
