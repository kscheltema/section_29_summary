import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNav from "./components/Layout/MainNav";

function App() {
  return (
    <div>
      <MainNav>
        <Switch>
          <Route path="/" component={AllMeetupsPage} exact />
          <Route path="/new-meetup" component={NewMeetupPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </MainNav>
    </div>
  );
}

export default App;
