import { Component } from "react";
import { deleteTodo, updatedTodo } from "../../redux/todoReducer/action";
import { connect } from "react-redux";

const Todo = ({ label, etat, id, updatedTodo, deleteTodo }) => {
  const OnchangeState = ({ target: { value: newEtat } }) => {
    //this.setState({etat : newEtat});
    updatedTodo({ label, id, etat: newEtat });
  };

  const OnchangeLabel = ({ target: { value: newLabel } }) => {
    console.log(newLabel);

    //this.setState({label : newLabel});
    updatedTodo({ etat, id, label: newLabel });
  };

  const handleDeleteTodo = () => {
    console.log(" id of the todo that was clicked  from the child comp:", id);

    deleteTodo(id);
  };

  return (
    <>
      <input
        type="text"
        value={label}
        onChange={OnchangeLabel}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></input>
      <select
        value={etat}
        onChange={OnchangeState}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>PROGRESS_STATE.done</option>
        <option>PROGRESS_STATE.TO_DO</option>
        <option>PROGRESS_STATE.INPROGRESS</option>
      </select>
      <button
        type="submit"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </>
  );
};

const mapDispatchToProps = {
  deleteTodo,
  updatedTodo,
};

Todo.propTypes = {
  label: String.isRequired,
  etat: String,
  id: Number.isRequired,
};
Todo.defaultProps = {
  label: "add your todo label",
};

export default Todo;
