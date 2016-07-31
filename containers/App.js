import React from 'react'
import ReactDOM from 'react-dom'
import HelloMessage from '../components/HelloMessage'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <HelloMessage />
    )
  }
}
