
import { PROGRESS_STATE } from "../../constents/consts";




export const initialState ={
todo : [

       {label:"Math" , id:1 , etat:PROGRESS_STATE.DONE},
        {label:"Physique" , id:2, etat:PROGRESS_STATE.INPROGRESS}
],
isLoading:false,

}


const todoReducer = (state = initialState , action) => {


    console.log({state , action});


    return state;
}


export default todoReducer;