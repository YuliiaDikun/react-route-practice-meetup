import css from './MeetupItem.module.css';
function MeetupItem({meetup}) {
  return (
    <li className={css.item}>
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
    </li>
  );
}
export default MeetupItem;
