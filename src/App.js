import "./styles/normalize.css";

import Header from "./components/header/Header.jsx";
import Information from "./components/information/Information.jsx";
import Map from "./components/map/Map.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Information />
      <Map />
      <Footer />
    </>
  );
}
