

//a hoc here what connect does is : 

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


import { connect } from "react-redux";
import TodoList from "./component";
import { AddTodo, deleteTodo } from "../../redux/todoReducer/action";



const mapStateToProps = (store) =>(
    {
 
        todos: store.todo.todos ,
        isLoading:store.todo.isLoading
}
    
)


const mapDispatchToProps = {

          AddTodo

}

const TodoListContainer = connect(mapStateToProps , mapDispatchToProps )(TodoList); 

export default TodoListContainer; 


