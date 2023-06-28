import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoLists from "../components/TodoLists";
import ShowHiddenLists from "../components/ShowHiddenLists";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Quote from "../components/Quote";
import axios from "axios";


const TodoApp = () => {
  
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [quote, setQuote] = useState(null)
  const [filter, setFilter] = useState("");
  const [filterdUsers, setFilteredUsers] = useState([]);

  useEffect(() => {

    axios.get('https://type.fit/api/quotes')
    .then( ( data ) => {
      const randomQuote = (data) => {
        return data[Math.floor(Math.random() * data.length)]
      }
      const rnquote = randomQuote(data.data)
      setQuote(rnquote)
    })   

  }, []);

    // Filters

  const filteredCount = filterdUsers.length;

  useEffect(() => {

    if( filter.length >= 3 ) {
      const filterdText = filter.toLowerCase();
      setFilteredUsers(todos.filter((todo) => todo.toLowerCase().includes(filterdText)));
    } else {
      setFilteredUsers(todos);
    }

  }, [filter, todos]);


  // end Filters


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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }


  return (

    <div  className={ isDarkTheme ? 'app-wrapper dark-color' : 'app-wrapper light-color'}>

      <div className="wrapper">

        <div  className={'handle-theme'}>

            <label>
              <input type="checkbox" onChange={handleChangeTheme} checked={isDarkTheme} />
              Tamna Tema
            </label>
            
        </div>

        <Header />

        <input  placeholder="Pretraži..." className={'search-input'} value={filter} onChange={handleFilterChange} />

        <div className={'form-wrapper'}  style={ { backgroundColor: isDarkTheme ? 'transparent' : '#161a2b', border: isDarkTheme ? '2px solid #359470' : '2px solid transparent'  } } >
        
          <TodoForm onSubmitText={handleSubmitForm} />

          <ShowHiddenLists isShown={show} >
              <TodoLists todo={filterdUsers} onDeleteTodo={handleDeleteTodo} />
          </ShowHiddenLists>


          <span>Ukupno: {filteredCount} </span> 
        
          <button className={'show'} onClick={handleShowToggle} > {  show ? <FontAwesomeIcon icon={faMinusCircle} /> :  <FontAwesomeIcon icon={faPlusCircle} />  } </button>
          <button className={'clearAll'} onClick={handleClearAllTodos}>  <FontAwesomeIcon icon={faTrashCan} /> </button>

          <Quote text={quote?.text} author={quote?.author}/>

        </div>
      </div>

    </div>
  );
};

export default TodoApp;
