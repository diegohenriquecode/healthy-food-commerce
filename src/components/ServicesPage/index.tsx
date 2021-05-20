import { ServicesPageSection } from "./styles";
import blocoServicesImage from "../../assets/bloco_services.svg";

export function ServicesPage() {
  return (
    <>
      <ServicesPageSection>
        <img src={blocoServicesImage} alt="" />
        <div>
          <h1>
            The best services ready <br /> To serve you
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. <br />
            <br /> Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. <br />
            <br /> A small river named Duden flows by their place and supplies
            it with the necessary regelialia.
          </p>
          <button>Know More</button>
        </div>
      </ServicesPageSection>
    </>
  );
}
