import React from 'react'

class Base extends React.Component {

  //1) Antes de "nacer" el componente
  constructor(){
    super()
    this.state = {}
  }

  //2) Al "montar" el componente en el Virtual DOM
  componentDidMount(){ //<-- Ideal para operaciones sincrónicas (Iteraciones)

  }

  //3) Mostrar el componente en el Real DOM
  render(){
    return <cite>Soy un componente base...</cite>
  }

}
export default Base
