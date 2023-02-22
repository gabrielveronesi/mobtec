import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ListaImoveis from "../../components/ListaImoveis";
import Footer from "../../components/Footer";
import ListaMelhoresImoveis from "../../components/ListaMelhoresImoveis";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <ListaImoveis />
      <ListaMelhoresImoveis />
      <Footer />
    </React.Fragment>
  )
}

export default Home;
