import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://burgerbuilder-89b34-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    }); //push enables the back functionality replace not
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
