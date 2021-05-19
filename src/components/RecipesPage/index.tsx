import {
  RecipesPageContainer,
  RecipesPageBackground,
  RecipesPageContent,
} from "./styles";
import comida1 from "../../assets/comida_1.svg";
import comida2 from "../../assets/comida_2.svg";
import comida3 from "../../assets/comida_3.svg";
import comida4 from "../../assets/comida_4.svg";

export function RecipesPage() {
  return (
    <>
      <RecipesPageBackground>
        <RecipesPageContainer>
          <RecipesPageContent>
            <div className="recipesPageText">
              <span className="spanText">Our Best Recipes</span>
              <p>
                Far far away, behind the word mountains, far from the countries
                <br />
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div className="recipesPageCardsGroup">
              <div className="recipesPageCard">
                <div className="recipesPageCardHead">
                  <img src={comida1} alt="" />
                  <div className="recipesPageCardBody">
                    <p>Broccoli Salad with Bacon</p>
                    <button>See Recipe</button>
                  </div>
                </div>
              </div>

              <div className="recipesPageCard">
                <div className="recipesPageCardHead">
                  <img src={comida2} alt="" />
                  <div className="recipesPageCardBody">
                    <p>Classic Beef Burgers</p>
                    <button>See Recipe</button>
                  </div>
                </div>
              </div>

              <div className="recipesPageCard">
                <div className="recipesPageCardHead">
                  <img src={comida3} alt="" />
                  <div className="recipesPageCardBody">
                    <p>Classic Potato Salad</p>
                    <button>See Recipe</button>
                  </div>
                </div>
              </div>

              <div className="recipesPageCard">
                <div className="recipesPageCardHead">
                  <img src={comida4} alt="" />
                  <div className="recipesPageCardBody">
                    <p>Cherry Cobbler on the Grill</p>
                    <button>See Recipe</button>
                  </div>
                </div>
              </div>
            </div>
          </RecipesPageContent>
        </RecipesPageContainer>
      </RecipesPageBackground>
    </>
  );
}
