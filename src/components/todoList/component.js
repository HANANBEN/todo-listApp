import Todo from "../todo/component";

const TodoList = ({ AddTodo, todos }) => (
  //         constructor(props){
  //             super(props)

  //              }

  //         deleteToDo = (id) => {

  //           /*
  //             If you modify this.state.TodoListData directly
  //             (without setState), React won’t re-render the component.

  //             here is why ze need the this.setState :

  //             React does the following:

  //               1.Creates a new state object → { TodoListData: filteredTodoList }
  //               2.Schedules a re-render of the component.
  //               3.Updates the UI to reflect the changes.

  //           */
  //             const filteredTodoList = this.props.TodoListData.filter((todo) =>
  //                 todo.id !== id
  // );

  //             /**
  //              * filter() creates a new array because:

  //              React follows immutability principles.
  //              Modifying the original state directly is bad practice in React.
  //              A new array triggers a re-render in React when used with setState.
  //              *
  //              *
  //              *
  //              */
  //             this.setState({TodoListData : filteredTodoList});

  //             console.log("the id that is passed by the parent component: " , id);

  //         }

  //         addTodo = () => {
  //                  const lastId= this.props.TodoListData.slice(-1)[0].id;
  //                   console.log("last element id :" , lastId);
  //                  let newItemId=lastId + 1;

  //                 const newItem=   {
  //                     id:newItemId  , etat:PROGRESS_STATE.TO_DO
  //                     };
  //                 this.setState({ TodoListData : [ ...this.state.TodoListData , newItem

  //         ] } );

  //                 }

  // updateTodo = (updatedtodo)=>{
  //             const newtodos=this.state.TodoListData.map(
  //               todo => {

  //                 if(todo.id == updatedtodo.id) return updatedtodo;

  //                 return todo

  //               }

  //             )
  //      this.setState({TodoListData : newtodos})

  // }

  <div className=" relative place-items-center min-h-screen mt-10 border-purple-500  ">
    <h2 className="text-4xl font-extrabold dark:text-white">Todo List :</h2>

    <button
      type="submit"
      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-7"
      onClick={AddTodo}
    >
      Add to do
    </button>
    {(todos || []).map((todo) => {
      console.log(todo);

      return (
        <div
          className="w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4 mt-5 mb-5 w-1000"
          style={{ display: "flex", gap: "10px" }}
        >
          <Todo
            key={todo.id}
            label={todo.label}
            etat={todo.etat}
            id={todo.id}
          />
        </div>
      );
    })}
  </div>
);

export default TodoList;
