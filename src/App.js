import "./styles/partials/global.scss";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader.js";
import GoogleMap from "./components/GoogleMap/GoogleMap.js";
import Landing from "./pages/Landing/Landing";
import PageFooter from "./components/PageFooter/PageFooter.js";
document.title = "BMO | Newcomers to Canada";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <PageHeader />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/contact" component={GoogleMap} />
          </Switch>
          <PageFooter />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
