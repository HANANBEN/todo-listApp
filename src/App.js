

import TodoListContainer from './components/todoList/index' ;



const { Component} =  require('react')



/*
a class in react : 






in Regular Function//

=>::this::: depends on how the function is called.
 May be undefined, an object, or window.

 in Arrow Function :// 

=> this is always inherited from where it was created.
 Never changes.




*/


class App extends Component {


  //render 
  render() {
    

    return(
    <div>


<TodoListContainer />

  


</div>
    )
  }; 
  
};


export default App