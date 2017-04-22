import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeople } from '../actions/index';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  componentDidMount(){
    this.props.fetchPeople(this.state.term);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
    this.props.fetchPeople(this.state.term);
  }
  render(){
    return(
      <div>
        <input
          placeholder = "Search Characters"
          className = "search-character"
          value = {this.state.term}
          onChange = {this.onInputChange}
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPeople}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
