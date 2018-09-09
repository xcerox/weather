import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'Actions'

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
      <div className="row">
        <form className="col s12" onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input autoComplete="off" value={term} id="icon_prefix" type="text" className="validate" onChange={this.onInputChange} />
              <label htmlFor="icon_prefix"><strong>Cities</strong></label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);