import React, { Component } from 'react'
import style from './Person.css'
import { Link } from 'react-router-dom';

class User  extends Component {
    render(){
        return (
            <tr style={style} className="person">
                <td>
                    <img src={this.props.data.avatarfull}
                         className="person-avatar"
                         alt="User avatar"/>
                    <Link to={{pathname: `/player/${this.props.id}`,
                        state: {data: this.props.data}}}>{this.props.data.personaname}</Link>
                </td>
            </tr>
        )
    }
}
export default User;
