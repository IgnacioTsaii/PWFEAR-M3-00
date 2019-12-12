import React , { Component } from 'react'
import { Button } from 'reactstrap';

import './Link.css'

class Link extends Component {

  render(){
    return <Button className="mx-3" color="success">{this.props.text}</Button>
    /*return <a className="App-link" href={this.props.url} target={this.props.blank ? "_blank" : "_self"} rel="noopener noreferrer">{this.props.text}</a>*/
  }

}
export default Link
