import styled from "styled-components";

export const RegisterButtonContainer = styled.button`
  z-index: 1;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--green-100);
  padding: 0.8rem 1.6rem;
  border: 0;
  border-radius: 0.3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
