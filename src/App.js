import React from 'react'
import './App.css'

import Logo from './components/Logo'
import Menu from './components/Menu'
import Mapa from './components/Mapa'
import Video from './components/Video'
import Producto from './components/Producto'

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
  },
  {
    url : "https://angular.io/docs",
    blank : true,
    text : "The Dark Side of the JS"
  }
]

{/* DESAFIO IV: */}
{/* Traer los datos de la API desde App y usarlos para <Producto /> */}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Logo category="sports" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          { /* DESAFIO I: */ }
          <Menu items={links} />

          { /* DESAFIO II: */ }
          <Mapa lat="-34.6078602" long="-58.383111" zoom="15" />

          {/* DESAFIO III: */}
          <Video id="TobNCFMK_bs" play="no" />

          <Producto />

        </header>
      </div>
    )
  }
}
export default App
