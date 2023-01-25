import css from './MeetupItem.module.css';
import Card from '../UI/Card';
function MeetupItem({meetup}) {
  return (
    <li className={css.item}>
      <Card>
      <div className={css.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={css.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
      <div className={css.actions}>
        <button>to fav</button>
      </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
