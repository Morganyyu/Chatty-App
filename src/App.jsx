import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {name: 'Anonymous'},
        messages: [],
        numUsers: 0
    };
    this.onNewMessage = this.onNewMessage.bind(this);
    this.onNewUser = this.onNewUser.bind(this);
  };

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = function (event) {
      console.log('websocket is connected ...');
    };

    this.socket.addEventListener('message', event => {
      let msg = JSON.parse(event.data)
      if (msg.messageType === 'new user count') {
        this.setState({numUsers: msg.numUsers});
      }
      if (msg.messageType === 'chat message' || msg.messageType === 'notification') {
        let updateMessages = this.state.messages.concat(msg);
        console.log(msg);
        this.setState({messages: updateMessages});
      }
    });
  }


  onNewMessage(msg){
    let url = msg.match(/(http)?s?:?(\/\/[^"'\s]*\.(?:png|jpg|jpeg|gif|png|svg))/g);
    let content = msg.split(url);
    let newMessage = {messageType: 'post message', username: this.state.currentUser.name,
                      content: content, images: url};
    this.socket.send(JSON.stringify(newMessage));
  }

  onNewUser(username) {
    let newName = username;
    if (this.state.currentUser.name !== newName) {
      const newNotif = {messageType: 'post notif', notif: this.state.currentUser.name + " has changed their name to " + newName};
      this.socket.send(JSON.stringify(newNotif));
      this.state.currentUser.name = newName;
    }
  }


  render() {
     return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="count-users"><p>Users Online: {this.state.numUsers}</p></span>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar theState={this.state.currentUser} onNewUser={this.onNewUser} onNewMessage={this.onNewMessage}/>
      </div>
    )
  }
}


export default App;

