import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from './Person/Person';
import getProPlayers from '../actions/getProPlayers';

class ProPlayers extends Component {
    componentDidMount() {
    }
    render() {
        return(
            <div>
                <h3>ProPlayers</h3>
                <button onClick={this.props.getProPlayers}>ClickMe</button>
                {this.props.proPlayers.proPlayers.map((item, index) => {
                    return (
                        <Person key={index} data={item} id={index}/>
                    )
                })}
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
