

export const DELETE_TODO = "DELETE_TODO" 
export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export const deleteTodo = (id) => ({

   type : DELETE_TODO,
   payload:{id},


}
)



export const AddTodo = (todo) => ({

   type : ADD_TODO,
   payload:{todo},


}
)




export const updatedTodo = (updatedtodo) => ({

   type : UPDATE_TODO,
   payload:{updatedtodo},


}
)
