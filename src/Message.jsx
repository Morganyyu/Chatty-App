import React, {Component} from 'react';


class Message extends Component {
  render() {
    let colour = {color: this.props.colour};
    let images = this.props.images;
    if (images !== null && images !== undefined) {
      images = images.map(image => {
      return <img
              src={image}
              className="message-image"
              />
      });
    }
    return (
      <div className="message">
        <span className="message-username" style={colour}>{this.props.username}</span>
        <span className="message-content">
        {this.props.content}
        <br />
        {images}
        </span>

        <div className="message system">
          <span className="notification-content">{this.props.notif}</span>
        </div>
      </div>
    );
  }
}


export default Message;