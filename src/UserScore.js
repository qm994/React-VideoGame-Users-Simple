import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from "./User"

class UserScore extends Component {
    state = {
        showGamesPlayed: true
    };

    toggleGamesScore = (event) => {
        this.setState((oldState => ({
            showGamesPlayed: !oldState.showGamesPlayed
        })))
    }


    render(){
        const gamesPlayedButton = (
            <div>
                <button className="smallButton" onClick={this.toggleGamesScore}>
                    {this.state.showGamesPlayed ? "Hide" : "Show"}
                    the Number of Games Played!
                </button>
            </div>
        )
        return(
        
            <div>
                
                <h1>Users</h1>
                {gamesPlayedButton}
                <ol>
                    {this.props.users.map(user => (
                        <User key={user.userName} user={user} showGamesPlayed={this.state.showGamesPlayed}/>
                    ))}
                </ol>
            </div>
        )
        }
    };

export default UserScore;
