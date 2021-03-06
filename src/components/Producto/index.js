import React from 'react'

class Producto extends React.Component {

  //1) Antes de "nacer" el componente
  constructor(){
    super()
    this.state = {
      isLoaded : false
    }
  }

  //2) Al "montar" el componente en el Virtual DOM
  componentDidMount(){ //<-- Ideal para operaciones asincrónicas (AJAX)
    /*
    setTimeout(() => {
      //alert("Ya tenemos datos...")
      this.setState({ isLoaded : true })
    }, 10000)
*/

    fetch("https://api.myjson.com/bins/1giaf3").then(rta => {

      let datos = rta.json()

      datos.then(productos => {
        /*
        this.setState({
          nombre : productos[0].nombre,
          stock : productos[0].stock,
          precio : productos[0].precio,
          disponible : productos[0].disponible
        })
*/

        productos[0].precio *= 69

        this.setState({ ...productos[0], isLoaded : true })

      })

    })

  }
  //3) Mostrar el componente en el Real DOM
  render(){ //<-- Se re-ejecuta cada vez que se ejecuta primero el setState()
    if( !this.state.isLoaded ){

      return <em>Cargando...</em>

    } else {

      return <cite>Soy un producto llamado {this.state.nombre} y valgo ARS{this.state.precio}...</cite>

    }
  }

}
export default Producto
