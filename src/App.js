import "./styles/normalize.css";

import Header from "./components/header/Header.jsx";
import Information from "./components/information/Information.jsx";
import Ymap from "./components/map/Ymap.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Information />
      <Ymap />
      <Footer />
    </>
  );
}
