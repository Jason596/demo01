import React, { Component, Fragment } from 'react';
import ServicesItem from './ServicesItem';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['Basic service', 'Head service', 'Back service']
    };
  }

  UNSAFE_componentWillMount() {
    console.log('Parent-UNSAFE_componentWillMount-----------------');
  }

  componentDidMount() {
    console.log('Parent-componentDidMount-----------------');
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('Parent-UNSAFE_componentWillReceiveProps--------------------');
  }

  shouldComponentUpdate() {
    console.log('Parent-shouldComponentUpdate-----------------');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log('Parent-componentWillUpdate---------------------');
  }
  componentDidUpdate() {
    console.log('Parent-componentDidUpdate---------------------');
  }

  componentWillUnmount() {
    console.log('Parent-componentWillUnmount--------------------');
  }
  render() {
    console.log('Parent-render function----------------------');
    return (
      // flex
      <Fragment>
        {/* flex */}
        <div>
          <label htmlFor="zhe">Add services</label>
          <input
            id="zhe"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.inputList.bind(this)}>Enter new service</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              // <li
              // key={index+item}
              // onClick={this.deleteItem.bind(this,index)}
              // dangerouslySetInnerHTML={{__html:item}}
              // >
              // </li>
              <ServicesItem
                key={index + item}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    });
  }

  inputList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      },
      () => {
        // the child component is wrapped around <div></div>
        console.log(this.ul.querySelectorAll('div ').length);
      }
    );
  }

  deleteItem(index) {
    // Best practise.
    let localList = this.state.list;
    // position, how many item to be removed, item1, item2
    localList.splice(index, 1);
    this.setState({
      list: localList
    });
  }
}

export default Services;
