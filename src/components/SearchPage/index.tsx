import ilustrationImage from "../../assets/Illustration.svg";
import { SearchPageContainer, SearchPageSection } from "./styles";
import { FiSearch } from "react-icons/fi";

export function SearchPage() {
  return (
    <SearchPageContainer>
      <SearchPageSection>
        <h1>
          Ready for <br />
          Trying a new <br /> recipe?
        </h1>
        <div>
          <input type="text" placeholder="Search healthy recipes" />
          <button type="button">
            <FiSearch className="FiSearch" size={20} />
          </button>
        </div>
      </SearchPageSection>
      <img src={ilustrationImage} alt="" />
    </SearchPageContainer>
  );
}
