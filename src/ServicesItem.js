import React, { Component } from 'react';
import PropTypes from 'prop-types'; // impt

class ServicesItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname} is servicing you with -{this.props.content}
      </li>
    );
  }

  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

// validate the props from parent component
ServicesItem.propTypes = {
  avname: PropTypes.string.isRequired,
  contnet: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
};
// add default props value even if no value from parent
ServicesItem.defaultProps = {
  avname: 'T'
};
export default ServicesItem;
