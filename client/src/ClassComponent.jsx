import React, { Component } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users';

export default class ClassComponent extends Component {

  constructor() {
  super()
  this.state= {count : 0}
  this.num = 0
  }

  render() {
    
    console.log("render executed");
    

    const {count} = this.state

    const increment = () => {
      this.num++
      console.log(this.num);
      
    }
    
    return (
      <>
      <h2>State count : {count}</h2>
      <h2>Instance count : {this.num}</h2>
      <button onClick={ () => this.setState({count : count +1})}>update state</button>
      <button onClick={increment}>update instance state</button>
      </>
    )
  }

  async componentDidMount() {
    console.log("componentDidMount executed");
    const response = await axios.get(URL)
    const data = response.data;
    console.log(data);
    
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("current state", this.state );
    console.log("next state", nextState );
    return true;
  }

   async componentDidUpdate() {
    console.log("componentDidUpdate executed");
    const {data} = await axios.get(`${URL}/${this.state.count}`);
    console.log(data);
    
  }

  componentWillUnmount() {
    console.log("componentWillUnmount executed");
    
  }
}