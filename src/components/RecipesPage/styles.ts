import styled from "styled-components";

export const RecipesPageBackground = styled.section`
  background: var(--white-70);
`;

export const RecipesPageContainer = styled.div`
  width: 100%;
  margin: 2rem auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecipesPageContent = styled.div`
  .recipesPageText {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;

    .spanText {
      color: var(--violet-100);
      font-weight: bold;
      font-size: 2.4rem;
      line-height: 4rem;
    }

    p {
      @media (max-width: 1280px) {
        font-size: 1.4rem;
      }

      @media (max-width: 475px) {
        width: 80%;
        /* font-size: 1.15rem; */
      }

      font-size: 2rem;
      color: var(--purple-20);
      font-size: 1rem;
      line-height: 1.8rem;
      text-align: center;
    }
  }
  .recipesPageCardsGroup {
    @media (max-width: 475px) {
      flex-direction: column;
    }

    max-width: 1120px;
    flex-wrap: wrap;
    width: 100%;
    margin: 3 auto;
    display: flex;
    justify-content: space-between;

    transition: filter 0.2s;

    .recipesPageCard {
      @media (max-width: 1280px) {
        width: 45%;

        margin: 2rem auto 3rem;
      }

      @media (max-width: 475px) {
        width: 57%;
      }

      width: 48%;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      border-radius: 0.5rem;
      border: 1px solid inherit;
      margin-bottom: 3rem;
      cursor: pointer;

      .recipesPageCardHead {
        display: flex;
        flex-direction: columns;

        @media (max-width: 475px) {
          flex-direction: column;
        }

        img {
          @media (max-width: 475px) {
            width: 100%;
            border-radius: 0 7px 8px 0px;
          }

          width: 50%;
        }

        .recipesPageCardBody {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            @media (max-width: 1280px) {
              font-size: 1.8rem;
            }

            @media (max-width: 768px) {
              margin: 0.4rem 0.2rem 0.2rem 0.6rem;
            }

            @media (max-width: 475px) {
              margin: 1rem;
              text-align: center;
            }

            margin-left: 2rem;
            font-size: 2rem;
            font-weight: 500;
          }

          button {
            @media (max-width: 1280px) {
              margin-left: -2rem;
            }

            @media (max-width: 768px) {
              padding: 0.4rem 1.2rem;
              margin-left: -2.7rem;
            }

            @media (max-width: 475px) {
              margin: 1rem;
              text-align: center;
              padding: 0.8rem 1.6rem;
            }

            margin-left: -5rem;
            margin-top: 1rem;
            background: var(--green-100);
            font-size: 1.2rem;
            font-weight: 400;
            color: var(--white-100);
            padding: 0.8rem 1.6rem;
            border: 0;
            border-radius: 0.3rem;

            transition: filter 0.2s;

            &:hover {
              filter: brightness(0.98);
            }
          }
        }
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
