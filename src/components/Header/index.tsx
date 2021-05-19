import { RegisterButton } from "../RegisterButton";
import { ContainerHeader, HeaderContent } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <HeaderContent>
        <h1>Healthy Food</h1>

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
