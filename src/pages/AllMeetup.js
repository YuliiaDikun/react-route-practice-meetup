import { DUMMY_DATA } from "../services/data";
import MeetupList from "../components/Meetups/MeetupList";
function AllMeetups () {
return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={DUMMY_DATA}/>
</section>
}
export default AllMeetups;