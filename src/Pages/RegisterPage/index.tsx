import { RegisterPageContainer, RegisterPageSection } from "./styles";
import { FiSearch } from "react-icons/fi";

import blocoFinalImage from "../../assets/bloco_final_image.svg";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <RegisterPageContainer>
        <section className="firstSection">
          <h1>
            Register Now <br /> And Get Our
          </h1>
          <ul>
            <li>Best Recipes</li>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <li>Best services </li>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
          </ul>
        </section>
        <RegisterPageSection>
          <RegisterForm />
        </RegisterPageSection>
        <img src={blocoFinalImage} alt="" />
      </RegisterPageContainer>
      <Footer />
    </>
  );
}
