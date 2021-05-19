import { ContainerFooter, FooterContent } from "./styles";

export function Footer() {
  return (
    <ContainerFooter>
      <FooterContent>
        <span>© Copyrights 2019 Stack. All Rights Reserved.</span>

        <nav>
          <a>Privacy Policy </a>
          <a>Terms and Conditions</a>
        </nav>
      </FooterContent>
    </ContainerFooter>
  );
}
