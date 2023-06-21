import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'

const TodoLists = ({ todo, onDeleteTodo }) => {
    
  const handleRemoveTodo = (item) => {
    onDeleteTodo(item);
  };

  return (
    <ul>
      {todo.map((item, index) => (
        <li key={index}>
          <span> {item}</span>
          <button className={'user-remove'} onClick={() => handleRemoveTodo(item)}> <FontAwesomeIcon icon={faUserMinus} /> </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
