import { useContext } from "react";
import FavContext from "../store/fav-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favCTX = useContext(FavContext);
  let content;

  if (favCTX.totalFavorites === 0) {
    content = <p>We have no Favorites to display, add some?</p>;
  } else {
    content = <MeetupList meetups={favCTX.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
