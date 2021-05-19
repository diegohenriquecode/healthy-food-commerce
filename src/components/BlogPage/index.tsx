import { BlogCarousel } from "../BlogCarousel";
import { BlogPageContainer } from "./styles";

export function BlogPage() {
  return (
    <>
      <BlogPageContainer>
        <div className="recipesPageText">
          <span className="spanText">Read Our Blog</span>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <BlogCarousel />
      </BlogPageContainer>
    </>
  );
}
