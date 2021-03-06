import React, { Component } from 'react';
import PropTypes from 'prop-types'; // impt

class ServicesItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    console.log('Child-UNSAFE_componentWillMount-----------------');
  }

  componentDidMount() {
    console.log('Child-componentDidMount-----------------');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('Child-UNSAFE_componentWillReceiveProps--------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.content === this.props.content) {
    //   console.log('Child-shouldComponentUpdate---false-----------------');
    //   return false;
    // } else {
    //   return true;
    // }
    return nextProps.content !== this.props.content;
  }
  UNSAFE_componentWillUpdate() {
    console.log('Child-componentWillUpdate---------------------');
  }

  componentDidUpdate() {
    console.log('Child-componentDidUpdate---------------------');
  }

  componentWillUnmount() {
    console.log('Child-componentWillUnmount--------------------');
  }

  render() {
    console.log('child-render function');
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
