import React, { useState } from 'react'
import Mycontext from './mycontext'

const State = (props) => {
  const [mode, Setmode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
        Setmode('dark');
        document.body.style.backgroundColor="rgb(17, 24, 39)"
    }
    else{
        Setmode('light');
        document.body.style.backgroundColor= 'white'
    }
  }
  return (
     <Mycontext.Provider value={{mode, toggleMode}}>
        {props.children}

     </Mycontext.Provider>
  )
}

export default State
