import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    return(
        <li className={"userInfo"}>
            <p>UserName: {props.user.userName}</p>
            <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : "*"}</p>
            
        </li>
    )
};

export default User;