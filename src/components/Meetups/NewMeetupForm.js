import css from "./NewMeetupForm.module.css";
import { useRef } from "react";
import Card from "../UI/Card";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImg,
        address: enteredAddress,
        description: enteredDesc
    }
    props.onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form autocomplite="off" className={css.form} onSubmit={onSubmit}>
        <div className={css.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imgInputRef}/>
        </div>
        <div className={css.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={css.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            name="description"
            required
            id="description"
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={css.actions}>
          <button type="submit">Add meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
