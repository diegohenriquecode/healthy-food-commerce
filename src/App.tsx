import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { SearchPage } from "./components/SearchPage";
import { RecipesPage } from "./components/RecipesPage";
import { ServicesPage } from "./components/ServicesPage";
import { BlogPage } from "./components/BlogPage";
import { MembershipPage } from "./components/MembershipPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchPage />
        <RecipesPage />
        <ServicesPage />
        <BlogPage />
        <MembershipPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
