import React from 'react';
import ChatApp from './ChatApp';
import firebase, { auth, provider } from './firebase'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.login = () => { auth.signInWithPopup(provider) }
    this.logout = () => { auth.signOut()}
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => { this.setState({user}) })
  }
  render() {
    let authButton = this.state.user ?
      <button onClick={this.logout}>Log Out</button> :
      <button onClick={this.login}>Log In</button>

    let chat = this.state.user ?
      <ChatApp user={this.state.user.displayName}/> :
      <h4>Log in to use ChatApp</h4>

    let userInfo = this.state.user ?
      <h5>Signed in using {this.state.user.email}</h5> :
      null
      
    return (
      <div>
        {userInfo}
        {authButton}
        {chat}
      </div>
    )
  }
}
export default App;