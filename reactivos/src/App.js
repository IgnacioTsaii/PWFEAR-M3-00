import React from 'react'
import './App.css'

import Logo from './components/Logo'
import Link from './components/Link'

const links = [
  {
    url : "https://reactjs.org",
    blank : true,
    text : "Documentation"
  },
  {
    url : "https://reactjs.org/tutorial/tutorial.html",
    blank : false,
    text : "Tutorial"
  }
]

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Logo category="sports" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <Link url="https://reactjs.org" blank="yes" text="Documentation" />
          <Link url="https://reactjs.org/tutorial/tutorial.html" blank="no" text="Tutorial" />
          { /* DESAFIO:*/ }
          { /*<Menu items={links} />*/ }
        </header>
      </div>
    )
  }
}
export default App
