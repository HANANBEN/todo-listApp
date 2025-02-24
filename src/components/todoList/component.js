import { PROGRESS_STATE } from "../../constents/consts";
import Todo from "../todo/component";

import { Component } from "react";




console.log("show state :" ,PROGRESS_STATE.DONE);
class TodoList extends Component {
         


        constructor(props){
            super(props);

            this.state = {
              TodoListData :
            [
                {label:"Math" , id:1 , etat:PROGRESS_STATE.DONE},
                {label:"Physique" , id:2, etat:PROGRESS_STATE.INPROGRESS}
            ],
             }

        }
        deleteToDo = (id) => {

          /*
            If you modify this.state.TodoListData directly 
            (without setState), React won’t re-render the component.



            here is why ze need the this.setState : 

            React does the following:

              1.Creates a new state object → { TodoListData: filteredTodoList }
              2.Schedules a re-render of the component.
              3.Updates the UI to reflect the changes.
          
          */
            const filteredTodoList = this.state.TodoListData.filter((todo) =>
                todo.id !== id
); 



            /**
             * filter() creates a new array because:

             React follows immutability principles.
             Modifying the original state directly is bad practice in React.
             A new array triggers a re-render in React when used with setState.
             * 
             * 
             * 
             */
            this.setState({TodoListData : filteredTodoList});
            
            console.log("the id that is passed by the parent component: " , id); 

        }




render(){

return (
  <div className=" relative place-items-center min-h-screen mt-10 " >
    <h2 class="text-4xl font-extrabold dark:text-white">Todo List :</h2>
     {
    this.state.TodoListData.map( todo => {
        console.log(todo)
       
        return (
        <div className="w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4 mt-5 mb-5 w-1000"
        style={{display :"flex" , gap: "10px"}}
        >
        <Todo  key={todo.id} deleteTodo={this.deleteToDo} label={todo.label}  etat={todo.etat} id={todo.id}  />
        </div>
        )
      
   })}
   </div>
  
)  

  


}

}
    


export default TodoList;