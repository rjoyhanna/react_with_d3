import React, { Component } from 'react'
import './App.css'
import BarChart from './BarChart'
import NewBarChart from './NewBarChart'
import WorldMap from './WorldMap'

// class App extends Component {
//    render() {
//    return (
//       <div className='App'>
//       <div className='App-header'>
//       <h2>d3ia dashboard</h2>
//       </div>
//       <div>
//       <BarChart data={[5,10,1,3]} size={[500,500]} />
//       </div>
//       </div>
//    )
//    }
// }

class App extends Component {

   state = {
     data: [
       {word: 'we', number: 12},
       {word: 'a', number: 5},
       {word: 'the', number: 18},
       {word: 'um', number: 2},
       {word: 'it', number: 6},
       {word: 'that', number: 8},
       {word: 'yes', number: 1},
     ],
     width: 800,
     height: 500,
     id: '#root'
   }

   render() {
   return (
      <div>
      <h1>My Bar Chart</h1>
      <NewBarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
   )
   }
}

export default App
