import React from 'react'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import ContextProvider from './context/Context.jsx'

const App = () => {
  return (
    <ContextProvider>
      <Sidebar/>
      <Main/>
    </ContextProvider>
  )
}

export default App