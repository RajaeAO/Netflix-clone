import "./App.scss";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";
import Video from "./components/Video";
import requests from "./config/Requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Row
              title="Programmes originaux Netflix"
              fetchUrl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchUrl={requests.fetchTrending}
            />
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
            <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />

            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
