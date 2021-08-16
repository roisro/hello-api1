import axios from 'axios';
import React, {Component} from 'react';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    dataApi:[]
  };
  this.handleRemove=this.handleRemove.bind(this);
}

handleRemove(e) {
  console.log(e.target.value);
  fetch(`https://jsonplaceholder.typicode.com/posts/$(e.target.value)`, {
    method:"DELETE"
  }).then(res=>console.log(res))
}
componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(response => response.json())
  // .then(res => {
  //   this.setState({
  //     dataApi: res
  //   })
  // });

  axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    this.setState({
      dataApi:res.data
    })
  });
}

  render () {
    return (
      <div>
      <h1>Hello API</h1>
      {this.state.dataApi.map((dat,index) =>
      {
        return (
        <div key={index}>
          <p>{dat.body}</p>
          <button value={dat.id} onClick={this.handleRemove}>Delete</button>
        </div>
        );
      })}
      </div>
    );
  }
}

export default App;