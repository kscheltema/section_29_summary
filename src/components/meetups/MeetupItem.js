import { useContext } from "react";
import Card from "../ui/Card";
import FavContext from "../../store/fav-context";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favCTX = useContext(FavContext);

  const itemIsFavorite = favCTX.itemIsFavorite(props.id);

  function toggleFavStatusHandler() {
    if (itemIsFavorite) {
      favCTX.removeFavorite(props.id);
    } else {
      favCTX.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
