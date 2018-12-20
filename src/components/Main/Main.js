import React, {Component} from 'react';
import Person from '../Person/Person';
import { connect } from 'react-redux';
import getData from '../../actions/getData';
import updateSearch from '../../actions/updateSearch';
import style from './Main.css';

class Main extends Component{
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    render() {
        return(
            <div style={style} className="main-container">
                <h1>Track your in-game stats in real time!</h1>
                <h4>Input user name and search for stats</h4>
                <div className="search-input">
                    <input type="text" ref={this.input} onChange={this.props.updateSearch}/>
                    <button className="waves-effect waves-teal btn-flat" onClick={() => this.props.getData(this.props.searchData.searchData)}>Search</button>
                </div>
                <div className="users-list-container">
                    <table className="users-table table-container">
                        <thead className="table-head">
                        <tr className="row">
                            <th>Users</th>
                        </tr>
                        </thead>
                            <tbody className="table-body">
                            {this.props.data.data.map((item, index) => {
                                return (
                                    <Person key={index} data={item} id={index}/>
                                )
                            })}
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        searchData: state.searchData,
        data: state.data
    }
};
const mapDispatchToProps = dispatch => ({
    getData: (name) => dispatch(getData(name)),
    updateSearch: (event) => dispatch(updateSearch(event))
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
