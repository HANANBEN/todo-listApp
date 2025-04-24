//a hoc here what connect does is :

import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../../redux/todoReducer/action";
import TodoList from "./component";
import useTodoData from "../../hooks/useTodoData";

/**
 * 
 * The connect() function acts like a bridge between your React component(todoList) and the Redux store.
 * 
 * This means TodoList can now:
     => Access data from the Redux store.
     => Send actions to update the store.
 * 




 * 
 * 
 * 
 * 
 * 
 * 
 */

// import { connect } from "react-redux";
// import TodoList from "./component";
// import { AddTodo, deleteTodo } from "../../redux/todoReducer/action";

// const mapStateToProps = (store) =>(
//     {

//         todos: store.todo.todos ,
//         isLoading:store.todo.isLoading
// }

// )

// const mapDispatchToProps = {

//           AddTodo

// }

// const TodoListContainer = connect(mapStateToProps , mapDispatchToProps )(TodoList);

// export default TodoListContainer;

const TodoListContainer = (props) => {
  /*
this before we crated the custom hook to centralise the process of the hooks ....instead i created 
useTodoData ,,, its a custom hook who use useSelector to retrieve the Data fromm the store 

  const { todos, isLoading } = useSelector(({ todo }) => todo);
*/

  //then i use it here  :

  const { todos, isLoading } = useTodoData();

  const dispatch = useDispatch();

  return (
    <TodoList
      {...props}
      todos={todos}
      isLoading={isLoading}
      AddTodo={() => dispatch(AddTodo())}
    />
  );
};
export default TodoListContainer;
