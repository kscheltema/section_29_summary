import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
//{props.children}
//prevents a wrapping component swallowing content
//and holds all this wrapping content
