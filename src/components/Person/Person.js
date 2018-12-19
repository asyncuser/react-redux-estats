import React, { Component } from 'react'
import style from './Person.css'
import { Link } from 'react-router-dom';

class User  extends Component {
    render(){
        return (
            <tr className="person">
                <td>
                    <img src={this.props.data.avatarfull}
                         className="person-avatar"
                         alt="User avatar"/>
                    <Link to={{pathname: `/player/${this.props.id}`,
                        state: {data: this.props.data}}}>{this.props.data.personaname}</Link>
                    UserID: {this.props.data.account_id}
                </td>
            </tr>
        )
    }
}
export default User;
