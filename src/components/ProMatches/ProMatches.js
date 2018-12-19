import React, { Component } from 'react';
import { connect } from 'react-redux';
import Match from './ProMatch';
import getProMatches from '../../actions/getProMatches';
import style from './ProMatches.css';

class ProMatches extends Component {
    componentDidMount() {
        this.props.getProMatches()
    }
    render() {
        return(
            <div style={style} className="pro-matches-container">
                <h3>ProMatches</h3>
                <table className="table-container">
                    <thead className="table-head">
                    <tr className="row">
                        <th>MatchId</th>
                        <th>Duration</th>
                        <th>TeamRadiant</th>
                        <th>TeamDire</th>
                        <th>League</th>
                        <th>Winner</th>
                    </tr>
                    </thead>
                    <tbody className="table-body">
                    {this.props.proMatches.proMatches.map((item, index) => {
                        return (
                            <Match key={index} data={item} id={index}/>
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
        proMatches: state.proMatches
    };
};
const mapDispatchToProps = dispatch => ({
  getProMatches: () => dispatch(getProMatches())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProMatches);
