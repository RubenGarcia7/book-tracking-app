import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import AppContextProvider, { AppContext } from './provider/AppContext'
import Home from './views/Home'
import Search from './views/Search'

class App extends React.Component {
  
  render() {
    return (
      <>
        <AppContextProvider>
          <Route exact path='/' render={() => (
                <AppContext.Consumer>
                  {context => <Home {...context} />}
                </AppContext.Consumer>
              )}/>
          <Route exact path='/search' render={() => (
                <AppContext.Consumer>
                  {context => <Search {...context}/>}
                </AppContext.Consumer>
              )}/>
        </AppContextProvider> 
      </>
    )
  }
}

export default App
