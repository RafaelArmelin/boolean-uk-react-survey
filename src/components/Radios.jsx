function Radios(props) {
  const { radioButtons, handleRadioButtons } = props;

  return (
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <ul>
        <li>
          <input
            id="color-one"
            type="radio"
            name="color"
            value="1"
            onChange={handleRadioButtons}
            checked={radioButtons === 1}
          />
          <label for="color-one">1</label>
        </li>
        <li>
          <input
            id="color-two"
            type="radio"
            name="color"
            value="2"
            onChange={handleRadioButtons}
            checked={radioButtons === 2}
          />
          <label for="color-two">2</label>
        </li>
        <li>
          <input
            id="color-three"
            type="radio"
            name="color"
            value="3"
            onChange={handleRadioButtons}
            checked={radioButtons === 3}
          />
          <label for="color-three">3</label>
        </li>
        <li>
          <input
            id="color-four"
            type="radio"
            name="color"
            value="4"
            onChange={handleRadioButtons}
            checked={radioButtons === 4}
          />
          <label for="color-four">4</label>
        </li>
      </ul>
    </div>
  );
}
export default Radios;
