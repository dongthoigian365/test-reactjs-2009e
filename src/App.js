import './App.css'
import React from 'react'

class App extends React.Component{
  render() {
    return (
      <div>
        <ul>
        <li>
            <a href="">
                <i class="fas fa-home"></i>
            </a>
        </li>
        <li>
            <a href="">
                <i class="fas fa-flask"></i>
                <p>Projects</p>
            </a>
        </li>
        <li>
            <a href="">
                <i class="fas fa-angle-double-right"></i>
                <p>Breadcrumb</p>
            </a>
        </li>
        <li>
            <a href="">
                <i class="fas fa-rocket"></i>
                <p>Getting started</p>
            </a>
        </li>
        <li>
            <a href="">
                <i class="fas fa-arrow-down"></i>
                <p>Download</p>
            </a>
        </li>
    </ul>
      </div>
    )
  }
}

export default App;
