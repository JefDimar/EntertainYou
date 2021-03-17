import "./App.css";
import { Container, } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import MoviePage from "./views/MoviePage";
import SeriePage from "./views/SeriePage";
import FavoritePage from "./views/FavoritePage";
import DetailPage from "./views/DetailPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movie">
            <MoviePage />
          </Route>
          <Route path="/serie">
            <SeriePage />
          </Route>
          <Route path="/favorite">
            <FavoritePage />
          </Route>
          <Route path="/details/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
