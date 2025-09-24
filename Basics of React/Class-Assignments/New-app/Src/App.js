
import {useState} from "react"
import EventComponent from "./components/EventComponent";
import LoginComponent from "./components/LoginComponent";
import Loginform from "./components/Loginform";
import UseRefComponent from "./components/UseRefComponent";
import ParentComponent from "./components/ParentComponent";
import { createContext} from "react";
import UseContextComponent from "./components/UseContextComponent";
import UseReducerComponet from "./components/UseReducerComponet";
import CallAnApiComponent from "./components/CallAnApiComponent";

const Context = createContext(null)

export {Context};

function App() {

/*  const [theme, setTheme]=useState('light');
  const[count, setCount]=useState(0)
  
return (
    <Context.Provider value = {{
      theme:theme,
      setTheme:setTheme,
      count:count,
      setCount:setCount
}}>
  <>Welcome to react use context</>
  <UseContextComponent/>
  </Context.Provider>*

  );*/
  return(
  <CallAnApiComponent/>
  )
}


export default App;
