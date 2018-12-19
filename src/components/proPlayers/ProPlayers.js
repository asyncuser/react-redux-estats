import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProPlayer from './ProPlayer';
import getProPlayers from '../../actions/getProPlayers';
import style from './ProPlayers.css';

class ProPlayers extends Component {
    componentDidMount() {
        this.props.getProPlayers()
    }
    render() {
        return(
            <div style={style} className="pro-players-container">
                <h3>ProPlayers</h3>
                <table className="pro-players-table-container table-container">
                    <thead className="table-head">
                    <tr className="row">
                        <th>Player</th>
                        <th>Team</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                        <tbody className="table-body">
                        {this.props.proPlayers.proPlayers.map((item, index) => {
                            return (
                                <ProPlayer key={index} data={item} id={index}/>
                            )
                        })}
                        </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        proPlayers: state.proPlayers
    };
};
const mapDispatchToProps = dispatch => ({
    getProPlayers: () => dispatch(getProPlayers())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProPlayers);
