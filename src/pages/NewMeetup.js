import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useNavigate} from "react-router-dom";
function NewMeetup() {
    const navigate = useNavigate();
  const onAddMeetup = (meetupData) => {
    fetch(
      "https://react-meetup-16fc1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res.status);
        navigate('/', {replace: true})
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </section>
  );
}
export default NewMeetup;
