import { Link } from "react-router-dom";

function MainNav() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
