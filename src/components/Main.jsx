import { useState } from "react";
import Checkboxes from "./Checkboxes";
import Radios from "./Radios";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [radioButtons, setRadioButtons] = useState(null);
  const [textArea, setTextArea] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  });
  console.log("State: ", { checkboxes, radioButtons });

  const handleRadioButtons = (event) => {
    console.log("inside handleRadioButtons: ", event.target.value);

    const value = parseInt(event.target.value, 10);

    setRadioButtons(value);
  };

  const handleCheckboxes = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    console.log("inside handleCheckboxes: ", targetValue, isChecked);

    const updatedCheckboxes = {
      ...checkboxes,
      [targetValue]: isChecked,
    };

    setCheckboxes(updatedCheckboxes);
  };

  const handleTextArea = (event) => {
    console.log("inside handleTextArea: ", event.target.value);
    setTextArea(event.target.value);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <Radios
            radioButtons={radioButtons}
            handleRadioButtons={handleRadioButtons}
          />
          <Checkboxes
            checkboxes={Checkboxes}
            handleCheckboxes={handleCheckboxes}
          />
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleTextArea}
              value={textArea}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
