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
     data: [12, 5, 6, 6, 9, 10],
     width: 700,
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
