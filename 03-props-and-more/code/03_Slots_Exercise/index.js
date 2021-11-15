class App extends React.Component {
    render() {
        return ( 
          <div>
              <h1> Slot Machines! </h1> 
              <Machine 
              s1 = "🍒"
              s2 = "🍒"
              s3 = "🍒" 
              />
              <Machine 
              s1 = "🍒"
              s2 = "🍒"
              s3 = "🍊" 
              />
              <Machine 
              s1 = "xxx"
              s2 = "xxx"
              s3 = "xxx" 
              />
          </div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('root'))