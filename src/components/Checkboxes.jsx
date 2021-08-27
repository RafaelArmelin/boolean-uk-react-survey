function Checkboxes(props) {
  const { checkboxes, handleCheckboxes } = props;

  return (
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={handleCheckboxes}
              checked={checkboxes.swimming}
            />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="bathing"
              onChange={handleCheckboxes}
              checked={checkboxes.bathing}
            />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="chatting"
              onChange={handleCheckboxes}
              checked={checkboxes.chatting}
            />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="noTime"
              onChange={handleCheckboxes}
              checked={checkboxes.noTime}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}
export default Checkboxes;
