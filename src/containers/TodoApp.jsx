import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoLists from "../components/TodoLists";
import ShowHiddenLists from "../components/ShowHiddenLists";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'


const TodoApp = () => {
  
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);


  useEffect(() => {
   const handleKeyDown = (e) => {
      if( e.key === 'd' ) {
        setDarkTheme( perv => !perv );
      }
   } 
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isDarkTheme])
  

  const handleChangeTheme = () => {
    setDarkTheme( perv => !perv );
  }

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

    <div  className={ isDarkTheme ? 'app-wrapper dark-color' : 'app-wrapper light-color'}>

      <div className="wrapper">

        <div className={'handle-theme'}>
            <label>
              <input type="checkbox" onChange={handleChangeTheme} checked={isDarkTheme} />
              Tamna Tema ( D na tastaturi )
            </label>
           
        </div>

        <Header />
        
        <div className={'form-wrapper'}      style={ { backgroundColor: isDarkTheme ? 'transparent' : '#161a2b', border: isDarkTheme ? '2px solid #359470' : '2px solid transparent'  } } >
        
          <TodoForm onSubmitText={handleSubmitForm} />
          <ShowHiddenLists isShown={show} >
              <TodoLists todo={todos} onDeleteTodo={handleDeleteTodo} />
          </ShowHiddenLists>

          <span>Ukupno: {todosCount} </span> 
          
          <button className={'show'} onClick={handleShowToggle} > {  show ? <FontAwesomeIcon icon={faMinusCircle} /> :  <FontAwesomeIcon icon={faPlusCircle} />  } </button>
          <button className={'clearAll'} onClick={handleClearAllTodos}>  <FontAwesomeIcon icon={faTrashCan} /> </button>


        </div>
      </div>

    </div>
  );
};

export default TodoApp;
