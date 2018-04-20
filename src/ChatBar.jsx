import React, {Component} from 'react';


class ChatBar extends Component {
  onEnter(event) {
    if (event.key === 'Enter'){
      this.props.onNewMessage(event.target.value);
      event.target.value = '';
    }
  }

  // Added 'Tab' key as people just tab to the next input field usually instead of pressing 'Enter' first
  nameOnEnter(event) {
    if (event.key === 'Enter' || event.key === 'Tab'){
      this.props.onNewUser(event.target.value ? event.target.value : 'Anonymous');
      console.log(event.target.value);
    }
  }

  render() {
    return (
      <footer className="chatbar">
          <input className="chatbarUsername" placeholder="Your Name (Optional)"
          defaultValue={this.props.username} onKeyDown={this.nameOnEnter.bind(this)}
          />
          <input className="chatbarMessage" placeholder="Type a message and hit ENTER"
          onKeyDown={this.onEnter.bind(this)} />
      </footer>
    );
  }
}

export default ChatBar;