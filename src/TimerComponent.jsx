import React, { Component } from 'react';

class TimerComponent extends Component {
  // Set initial state so the component is initially "loading"
  constructor(props) {
    super(props);
    // this is the *only* time you should assign directly to state:
    this.state = {loading: true};
  }

  // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.
  componentDidMount() {
    // After 3 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 3000)
  }

  // Called any time the props or state changes. The JSX elements
  // returned in this method will be rendered to the DOM.
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return <h1>3 seconds have elapsed and page is loaded</h1>
    }
  }
}

export default TimerComponent;