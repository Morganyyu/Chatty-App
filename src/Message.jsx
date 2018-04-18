import React, {Component} from 'react';


class Message extends Component {
  render() {
    return (
      <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>

        <div className="message system">
          <span className="notification-content">{this.props.notif}</span>
        </div>
      </div>
    );
  }
}

export default Message;