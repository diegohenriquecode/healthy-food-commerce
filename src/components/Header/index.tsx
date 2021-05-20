import { RegisterButton } from "../RegisterButton";
import { ContainerHeader, HeaderContent } from "./styles";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <Link to="/">
          <h1>Healthy Food</h1>
        </Link>

        <nav>
          <a>HEALTHY RECIPES</a>
          <a>BLOG</a>
          <a>JOIN</a>
        </nav>

        <RegisterButton />
      </HeaderContent>
    </ContainerHeader>
  );
}
