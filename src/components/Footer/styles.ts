import styled from "styled-components";

export const ContainerFooter = styled.footer`
  height: 5rem;
  border-bottom: 1px solid var(--white-100);
`;

export const FooterContent = styled.div`
  @media (max-width: 1280px) {
    max-width: 900px;
  }

  @media (max-width: 475px) {
    height: 2rem;
    margin-top: 3rem;

    flex-direction: column;
  }

  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  span {
    color: #5d5c86;
    font-weight: 400;
  }

  nav {
    margin-left: auto;
    height: 5rem;

    @media (max-width: 475px) {
      margin: 0 auto;
    }

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--purple-20);
      cursor: pointer;
      transition: 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: var(--white-100);
      }

      &.active {
        color: var(--white-100);
        font-weight: bold;
      }
    }
  }

  button {
    margin-left: 2rem;
  }
`;
