
import { PROGRESS_STATE } from "../../constents/consts";
import { DELETE_TODO ,ADD_TODO , UPDATE_TODO } from "./action";



export const initialState ={
    
todos: [

       {label:"Math" , id:1 , etat:PROGRESS_STATE.DONE},
        {label:"Physique" , id:2, etat:PROGRESS_STATE.INPROGRESS}
],
isLoading:false,

}


const todoReducer = (state = initialState, action) => {
    console.log({ state, action });

    const { payload, type } = action;

    switch (type) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload.id)
            };

        case ADD_TODO:
            // Handle empty todos case
            const lastId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id : 0;
            console.log("Last element ID:", lastId);
            let newItemId = lastId + 1;

            return {
                ...state,
                todos: [...state.todos, { ...payload, id: newItemId }]
            };


            case UPDATE_TODO:

                  return {
                    ...state,
                    todos: state.todos.map(
                        todo => {
    
                          if(todo.id == payload.updatedtodo.id) return payload.updatedtodo;
    
                          return todo
    
                        }
    
                      )
                };
    

        default:
            return state;
    }
};

export default todoReducer;