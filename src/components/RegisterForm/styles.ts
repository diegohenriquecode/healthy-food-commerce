import styled from "styled-components";

export const FormStructure = styled.div`
  form {
    margin-top: -6rem;
    input {
      text-align: center;
    }

    width: 100%;
    margin: 0 auto;

    button {
      margin-top: 4rem;
      width: 90%;
    }
  }

  .form-control-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .form-control-group label {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
