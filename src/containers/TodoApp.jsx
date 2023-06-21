import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoLists from "../components/TodoLists";
import ShowHiddenLists from "../components/ShowHiddenLists";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'


const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [show, setShow] = useState(true);

  const handleShowToggle = () => {
    setShow( ( pervState ) => pervState = !pervState )
  }

  const handleSubmitForm = (val) => {
    setTodos((oldTodos) => [...oldTodos, val]);
  };

  const handleClearAllTodos = () => {
    setTodos([]);
}

  const handleDeleteTodo = (deleteTodo) => {
    const filteredTodos = todos.filter( ( todosItem ) => todosItem !== deleteTodo )
    setTodos(filteredTodos);
  };

  const todosCount = todos.length;

  return (
    <>
      <Header />
      
      <div className={'form-wrapper'}>
      
        <TodoForm onSubmitText={handleSubmitForm} />
        <ShowHiddenLists isShown={show} >
            <TodoLists todo={todos} onDeleteTodo={handleDeleteTodo} />
        </ShowHiddenLists>

        <span>Ukupno: {todosCount} </span> 
        
        <button className={'show'} onClick={handleShowToggle} > {  show ? <FontAwesomeIcon icon={faMinusCircle} /> :  <FontAwesomeIcon icon={faPlusCircle} />  } </button>
        <button className={'clearAll'} onClick={handleClearAllTodos}>  <FontAwesomeIcon icon={faTrashCan} /> </button>


      </div>
    </>
  );
};

export default TodoApp;
