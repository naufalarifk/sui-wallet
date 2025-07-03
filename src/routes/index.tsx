import { SendTransaction } from "@/pages";
import { Switch, Route } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={SendTransaction} />
      <Route>404: No such page!</Route>
    </Switch>
  );
};

export default Routes;
