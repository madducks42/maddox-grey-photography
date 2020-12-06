import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import ShutterSirenContainer from "./ShutterSirenContainer"
import PerpetuallyLostContainer from "./PerpetuallyLostContainer"


const App = () => {
  return (
<Router>
    <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/shuttersiren" exact component={ShutterSirenContainer} />
        <Route path="/perpetuallylost" exact component={PerpetuallyLostContainer} />
    </Switch>
  </Router>
  )
}

export default App