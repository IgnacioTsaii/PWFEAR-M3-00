import React from 'react'
import './App.css'

//Componentes
import Logo from './components/Logo'
import Menu from './components/Menu'
import Mapa from './components/Mapa'
import Video from './components/Video'
//import Producto from './components/Producto'
import Gondola from './components/Gondola'

//Helpers
import AJAX from './helpers/AJAX'

const api = new AJAX()

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

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isLoaded : false
    }
  }

  componentDidMount(){
    /* DESAFIO IV: */
    /* Traer los datos de la API desde App y usarlos para <Producto /> */
    //fetch( OBTENCION ).then( CONVERSION ).then( UTILIZACION )

    //Opcion 1: metodo then()
    api.getData("https://api.myjson.com/bins/1giaf3").then( data => {
      this.setState({ productos : data, isLoaded : true })
    })

    //Opcion 2: Funcion Anonima Asincronica (FAA) y algo más (comming soon...)
    /*
    let data = function(){
      return Promise.resolve( api.getData("https://api.myjson.com/bins/1giaf3") )
    }

    console.log( data() )
    */

  }

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

          {/* DESAFIO V: */}
          {/* Crear los X productos segun cant. de items + asignacion de datos al componente Producto */}
          { !this.state.isLoaded ? <p>Cargandoooo... wooo...</p> : <Gondola productos={this.state.productos} /> }

        </header>
      </div>
    )
  }
}
export default App
