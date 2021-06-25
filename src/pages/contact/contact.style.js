import styled from "styled-components";

export const ContactContainer = styled.section`
  display: grid;
  width: 90%;
  height: 80vh;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  padding: 20px;
  
`;
export const ContactHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  h1 {
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: #0563bb;
    color: #45505b;
  }
`;

export const ContactInfoContainer = styled.div`
  border-right: 1px solid #0563bb;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #45505b;

  h3,
  p {
    display: block;
    margin: 5px;
  }
  .icon {
    font-size: 20px;
    background-color: #eef7ff;
    color: #0563bb;
    padding: 8px;
    border-radius: 50px;
    margin-right: 15px;
  }
`;
export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5px;

  label {
    display: block;
  }
  input {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #45505b;
    &:focus {
      outline: 3px solid #0563bb;
    }
  }
  input.subject {
    width: 100%;
  }
  textarea {
    width: 100%;
    height: 125px;
    border-radius: 5px;
    border: 1px solid #45505b;

    &:focus {
      outline: 2px solid #0563bb;
    }
  }
  .subject,
  .subBtn,
  .message {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  div.subBtn {
    justify-self: center;
    width: 100%;
    text-align: center;
  }
  button {
    width: clamp(100px, 25%, 25%);
    border-radius: 20px;
    border: 1px solid #45505b;
    background-color: #0563bb;
    color: white;
    font-size: 1em;
    font-weight: bold;
    padding: 10px 0px;
  }
`;
