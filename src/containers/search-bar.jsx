import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from 'Actions'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    const { value } = event.target;
    this.setState({term: value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { term } = this.state;
    this.props.fetchWeather(term);
    this.setState({term: ''});
  }

  render() {
    const { term } = this.state;

    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input value={term} placeholder="cities" className="form-control" onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);