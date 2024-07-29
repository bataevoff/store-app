import NikeLogo from "../assets/svg/NikeLogoSvg";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import styles from "./App.module.scss";
import TopNavbar from "../components/TopNavbar/TopNavbar";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <TopNavbar />
      </Container>
    </div>
  );
}

export default App;
