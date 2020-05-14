
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormGroup.css';

 class FormGroup extends Component {

  render() {
    const { label } = this.props;
    return (
      <div className="FormGroup">
        <label for="fname">{label}</label>
        <input type="text" id="fname" name={label} placeholder="Type something" />
      </div>
     );
  }
}

FormGroup.propTypes = {
 label: PropTypes.string.isRequired
}
export default FormGroup;

