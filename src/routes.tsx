import { Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import RegisterPage from "./Pages/RegisterPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/register" exact component={RegisterPage} />
  </Switch>
);

export default Routes;
