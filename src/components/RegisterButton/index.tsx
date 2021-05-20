import { RegisterButtonContainer } from "./styles";
import { Link } from "react-router-dom";

export function RegisterButton() {
  return (
    <>
      <RegisterButtonContainer type="button">
        <Link to="/register">REGISTER</Link>
      </RegisterButtonContainer>
    </>
  );
}
