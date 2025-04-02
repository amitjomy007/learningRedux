import Image from "next/image";
//import for redux below
import {createStore} from 'redux';


// STORE - the globalalized STATE , that we can access from anywhere

// ACTIONS - the functions that determine the STATE UPDATE LOGIC

const increment = () => {
  return {
    type: "INCREMENT",
  }
}

const decrement = () => {
  return {
    type: "DECREMENT",
  }
}


// REDUCERS
//here counter is the state we made
//this code decides what to update (Actions have multiple scenarios defined here it narrows down to the final decision of what to do on the state)
const counter = (state=0,action) => {
  switch(action.type){
    case("INCREMENT"):
      return state+1;
    
    case("DECREMENT"):
      return  state -1;
    
  }

}

let store = createStore(counter);

// Display it in the console

store.subscribe(()=> console.log(store.getState()));


//DISPATCH - th is is what triggers the state change
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
//IMPORTANT {useStore} is deprecated so console.log, it may only show in vscode terminal next time you see 
//now only shows in vs code


export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
