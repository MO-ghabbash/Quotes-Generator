import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    i : 0,
    quotes: []
  }

  getQuotes = async (e) => {
    e.preventDefault()
    const api = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    let data = await api.json()
    let quotes = data.data.map( quote => {
      return (
        quote.quoteText
      )
    })
    this.setState({
      i : this.state.i + 1,
      quotes : quotes
    })
    if(this.state.i === 9){
      this.setState({
        i : 0
      })
    }

  }


  render() {
    return (
      <div>
        <h1>Quotes Generator</h1>
        {this.state.quotes[this.state.i]}
        <button onClick={this.getQuotes}>New Quotes</button>
      </div>
    )
  }
}

export default App;
