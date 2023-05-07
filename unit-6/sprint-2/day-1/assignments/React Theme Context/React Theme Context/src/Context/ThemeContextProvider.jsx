import React, { useState } from 'react'
import App from '../App'
import { createContext } from 'react'

export let myContext=createContext();

export default function ThemeContextProvider() {

  return (
    <myContext.Provider value={{state,setstate}}>
      <App />
    </myContext.Provider>
  )
}
