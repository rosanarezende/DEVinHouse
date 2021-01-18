import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../utils/constants";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
