import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeople } from '../actions/index';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: '',
      page: 1
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onClickNext(){
    if (this.state.page < 9) {
      this.setState({page: this.state.page + 1});
    }
  }
  onClickPrevious(){
    if (this.state.page > 1) {
      this.setState({page: this.state.page - 1});
    }
  }

  render(){
    this.props.fetchPeople(this.state.term, this.state.page);
    return(
      <div>
        <input
          placeholder = "Search Characters"
          className = "search-character"
          value = {this.state.term}
          onChange = {this.onInputChange}
        />
      <div className = "pagination-container">
        <button
          onClick = {this.onClickPrevious}
          >Previous Page</button>
          <h1 className = "page">{this.state.page}</h1>
          <button
            onClick = {this.onClickNext}
            >Next Page</button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPeople}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
