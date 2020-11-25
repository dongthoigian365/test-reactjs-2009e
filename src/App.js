import './App.css'
import React from 'react'

class App extends React.Component{
  render() {
    return (
      <div>
        <form action="" method="get">
            <div id="header">
                <h1>Reactjs Quiz</h1>
                <progress id="file" value="0" max="100"> 32% </progress>
                <label for="file">0% complete</label>
            </div>
            <div id="main">
                <h2>What is the full form of HTTP?</h2>
                <p>a. Hyper text transfer package</p>
                <p>b. Hyper text trabsfer protocol</p>
                <p>c. Hyphenation text test program</p>
                <p>d. None of the above</p>
            </div>
            <div id="footer">
                <input type="button" value="Back"/>
                <input type="button" value="Skip"/>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
