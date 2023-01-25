import css from './MeetupList.module.css'
import MeetupItem from './MeetupItem'
function MeetupList({meetups}) {
return <ul className={css.list}>
    {meetups.map(meetup => <MeetupItem key={meetup.id} id={meetup.id} meetup={meetup}/>)}
</ul>
}
export default MeetupList