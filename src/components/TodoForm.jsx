import { Fragment, useState } from "react";
import { toast } from "react-toastify";


const TodoForm = ({ onSubmitText }) => {
  const [val, setValue] = useState("");

  const handleClickChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  //  Notify Succes Alert

  const toastSettingSucces =   {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  }

  const notifySucces = () =>
    toast.success("Dodali ste taks!",
    { ...toastSettingSucces }
  );

  // End  Notify Succes Alert

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    onSubmitText?.(val);
    setValue("");
    notifySucces();
  };

  return (
    <Fragment>
      <h2>Šta planiraš danas da radiš?</h2>
      <form onSubmit={handleOnSubmitForm}>
        <input
          required
          minLength={3}
          type="text"
          onChange={handleClickChange}
          value={val}
          placeholder="Unesite nešto"
          className={"input-change"}
        />
        <input type="submit" value={"Pošalji"} />
      </form>
    </Fragment>
  );
};

export default TodoForm;
