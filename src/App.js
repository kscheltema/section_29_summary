import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={AllMeetupsPage} exact />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Layout>
  );
}

export default App;
