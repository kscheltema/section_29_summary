import { useState, useEffect } from "react"; //useEffect is used to prevent an infinite loop
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://burgerbuilder-89b34-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); //this will give access to the data converted into a json compatible file
      })
      .then((data) => {
        const meetups = []; //data is received as an object with nested array
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      }); //default is a GET request
  }, []); //the array of dependencies determine when useEffect block will execute other than initial
  //rule is to add all external dependencies outside the block used within
  //(state/props)

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
