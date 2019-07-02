import React from "react";
import Layout from "../src/components/layout/Layout";
import { Route } from "react-router-dom";

import LandingPage from "../src/components/Containers/Landing";
import AdoptionCenter from "./components/Containers/AdoptionCenter/AdoptionCenter";
import MyPets from "./components/Containers/MyPets/MyPets";
import PetShop from "./components/Containers/PetShop/PetShop";
import InventoryPage from "./components/Containers/InventoryPage";
import Login from "./components/Containers/auth/Login";
import Register from "./components/Containers/auth/Register";
import EarnTokens from "./components/Containers/EarnTokens/EarnTokens";
import HomePage from "./components/Containers/HomePage";

const App = () => {
  return (
    <div class="container-main">
      <Layout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/adopt" component={AdoptionCenter} />
        <Route path="/my-pets" component={MyPets} />
        <Route path="/pet-shop" component={PetShop} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/earn-tokens" component={EarnTokens} />
        <Route path="/home" component={HomePage} />
      </Layout>
    </div>
  );
};

export default App;
