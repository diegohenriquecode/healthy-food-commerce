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
        <RegisterPageSection>
          <h1>Register Now</h1>
          <RegisterForm />
        </RegisterPageSection>
        <img src={blocoFinalImage} alt="" />
      </RegisterPageContainer>
      <Footer />
    </>
  );
}
