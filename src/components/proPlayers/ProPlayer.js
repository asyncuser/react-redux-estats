import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProPlayer  extends Component {
    render(){
        return (
            <tr className="person">
                <td>
                    <img src={this.props.data.avatarfull}
                         className="person-avatar"
                         alt="User avatar"/>
                    <Link to={{pathname: `/player/${this.props.id}`,
                        state: {data: this.props.data}}}>{this.props.data.personaname}</Link>
                </td>
                <td>{this.props.data.team_name}</td>
                <td>{this.props.data.name}</td>
            </tr>
        )
    }
}
export default ProPlayer;
