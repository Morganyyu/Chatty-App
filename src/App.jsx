import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
// const ws = new WebSocket('ws://localhost:3001');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {name: "merp"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: []
    };
    this.onNewMessage = this.onNewMessage.bind(this);
  };

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = function (event) {
      console.log('websocket is connected ...');
    };

    this.socket.addEventListener('message', event => {
      let msg = JSON.parse(event.data)
      console.log(msg);
      let updateMessages = this.state.messages.concat(msg);
      this.setState({messages: updateMessages});
    });
  }


  onNewMessage(msg){
    // let newUser = {currentUser: name};
    const newMessage = {username: this.state.currentUser.name, content: msg};
    this.socket.send(JSON.stringify(newMessage));
  }

  render() {
     return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.onNewMessage} onNewMessage={this.onNewMessage}/>
      </div>
    )
  }
}



export default App;

