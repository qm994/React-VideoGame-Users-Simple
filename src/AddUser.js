import React, { Component } from "react";
import PropTypes from "prop-types";


class AddUser extends Component{
    state = {
        user: {
            firstName: "",
            lastName: "",
            userName: ""
        },
        userExists: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const inputUserName = this.state.user.userName;
        
        const existUser = this.userExist(inputUserName)
        // if userName is not existed
        if(!existUser){
            this.props.onAddUser(this.state.user)
        }

        this.setState({
            userExists: existUser
        })
    };

    // compare the existed one with the current one in case duplicate;
    userExist = (username) => {
        const users = this.props.users;
        for(let user of users){
            if(user.userName === username){
                return true
                
            } else { 
                return false
            }
        } 
    };

    handleInputChange = (event) => {
        //console.log(event.target)
        const {name, value} = event.target;
        // const test = {
        //     user: {
        //       firstName: '',
        //       lastName: '',
        //       username: '',
        //     },
        //     userExists: false,
        //     user: {
        //       firstName: '',
        //       lastName: '',
        //       username: '',
        //       ["firstName"]: "Qingyuan"
        //     }
        // }
        this.setState((currentState) => ({
            ...currentState,
            user: {
                ...currentState.user,
                [name]:value
            }
        }));
    };

    isDisabled = () => {
        const { firstName, lastName, username } = this.state.user;
        return firstName === '' || lastName === '' || username === '';
      };

    render(){
        const {firstName, lastName, userName} = this.state.user;
        return(
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={this.handleInputChange}
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={this.handleInputChange}
                        />

                        <input
                            type="text"
                            name="userName"
                            placeholder="Enter UserName"
                            value={userName}
                            onChange={this.handleInputChange}
                        />      
                    </div>

                    <button disabled={this.isDisabled()}>Add</button>
                </form>

                {this.state.userExists
                    ? (<p className="error">`${userName} already existed!!!`</p>)
                    : ("")}
            </div>
        )
    }
}

export default AddUser;