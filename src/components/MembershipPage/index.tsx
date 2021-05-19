import { MembershipPageContainer, MembershipPageContent } from "./styles";
import blocoFinalImage from "../../assets/bloco_final_image.svg";

export function MembershipPage() {
  return (
    <>
      <MembershipPageContainer>
        <MembershipPageContent>
          <h1>
            Join our membership <br />
            to get special offer
          </h1>
          <div>
            <input type="text" placeholder="Enter your email address" />
            <button type="button">Join</button>
          </div>
        </MembershipPageContent>
        <img src={blocoFinalImage} alt="" />
      </MembershipPageContainer>
    </>
  );
}
