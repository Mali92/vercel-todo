import { Fragment, useState } from "react";

const TodoForm = ({ onSubmitText }) => {
  const [val, setValue] = useState("");

  const handleClickChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    onSubmitText?.(val);
    setValue("");
    setTimeout(() => alert('Dodali ste task!'), 1000);
  };

  return (
    <Fragment>
      <h2>Šta planiraš danas da radiš?</h2>
      {/* <h2>What is your main focus for today?</h2> */}
      <form onSubmit={handleOnSubmitForm}>
        <input
          required
          minLength={3}
          type="text"
          onChange={handleClickChange}
          value={val}
          placeholder="Unesite nešto"
        />
        <input type="submit" value={'Pošalji'} />
      </form>
    </Fragment>
  );
};

export default TodoForm;
