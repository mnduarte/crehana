import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Layout } from "./components/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
