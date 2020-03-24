import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from "./AddUser";
import UserScore from "./UserScore";

class App extends Component {

  state = {
    users: [
      {firstName: "Qingyuan", lastName: "Ma", userName: "ma791778711", numGamesPlayed: "11"},
      {firstName: "Qiyuan", lastName: "Ma", userName: "maqiyuanAlan", numGamesPlayed: "11"}
    ]
  };

  createContact = (newUser) => {
    newUser.numGamesPlayed = 0;
    this.setState(
      currentState => ({
        users: [...currentState.users, newUser]
      })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <AddUser users={this.state.users} onAddUser={this.createContact}/>
        <p>{JSON.stringify(this.state.users)}</p>
        <UserScore users={this.state.users} />
      </div>
    );
  }
}

export default App;
