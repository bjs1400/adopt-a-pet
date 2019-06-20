import React from "react";
import Layout from "../src/components/layout/Layout";
import { Route } from "react-router-dom";

import LandingPage from "../src/components/pages/Landing";
import AdoptionCenter from "./components/Containers/AdoptionCenter/AdoptionCenter";
import MyPets from "./components/pages/MyPets";
import PetShop from "./components/Containers/PetShop/PetShop";
import InventoryPage from "./components/pages/InventoryPage";

const App = () => {
  return (
    <div class="container-main">
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/adopt" component={AdoptionCenter} />
        <Route path="/my-pets" component={MyPets} />
        <Route path="/pet-shop" component={PetShop} />
        <Route path="/inventory" component={InventoryPage} />
      </Layout>
    </div>
  );
};

export default App;
