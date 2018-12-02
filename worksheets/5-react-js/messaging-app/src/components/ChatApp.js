import React, { Component } from "react"
import firebase from 'firebase'

import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
  }

  //On initial load it connects to firebase and retrieves messages
  componentDidMount() {
    this.getMessages()
  }

  sendHandler(message) {
    const messageObject = {
      user: this.props.user,
      message
    };

    //add message to server
    this.writeMessageToDB(messageObject)

    this.addMessage(messageObject);
  }

  //The message will then be written to the firebase server
  writeMessageToDB = messageObject => {
    firebase
      .database()
      .ref("messages/")
      .push({
        messageObject
      })
  }

  addMessage(messageObject) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(messageObject);
    this.setState({ messages });
  }

  //Retrive all messages from server
  getMessages = () => {
    var messagesDB = firebase
      .database()
      .ref("messages/")
      .limitToLast(500)
    messagesDB.on("value", snapshot => {
      let newMessages = []
      snapshot.forEach(child => {
        var message = child.val()
        newMessages.push({ id: child.key, user: message.messageObject.user, message: message.messageObject.message })
      })
      this.setState({ messages: newMessages })

      console.log(newMessages);
    })
  }

  render() {
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <Messages messages={this.state.messages}/>
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatApp.defaultProps = {
  user: 'Anonymous'
};

export default ChatApp;