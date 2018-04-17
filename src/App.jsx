import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
// import TimerComponent from './TimerComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
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
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else { return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList />
        <Message />
        <ChatBar />
      </div>
    )}
  }
}



export default App;

