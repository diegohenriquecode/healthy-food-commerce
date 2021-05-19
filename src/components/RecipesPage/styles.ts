import styled from "styled-components";

export const RecipesPageBackground = styled.section`
  background: var(--white-70);
`;

export const RecipesPageContainer = styled.div`
  max-width: 1120px;
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
      font-size: 2rem;
      color: var(--purple-20);
      font-size: 1rem;
      line-height: 1.8rem;
      text-align: center;
    }
  }
  .recipesPageCardsGroup {
    max-width: 1120px;
    flex-wrap: wrap;
    width: 70rem;
    display: flex;
    justify-content: space-between;

    transition: filter 0.2s;

    .recipesPageCard {
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

        .recipesPageCardBody {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            margin-left: 2rem;
            font-size: 2rem;
            font-weight: 500;
          }

          button {
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
