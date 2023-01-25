import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";
function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [dataMeetup, setDataMeetup] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://react-meetup-16fc1-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        for(const key in data) {
            const meetup = {
                id: key,
                ...data[key]
            };
            meetups.push(meetup);
        }
        setLoading(false);
        setDataMeetup(meetups);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={dataMeetup} />
    </section>
  );
}
export default AllMeetups;
