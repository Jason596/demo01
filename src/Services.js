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

  render() {
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
          />
          <button onClick={this.inputList.bind(this)}>Enter new service</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              // <li
              // key={index+item}
              // onClick={this.deleteItem.bind(this,index)}
              // dangerouslySetInnerHTML={{__html:item}}
              // >
              // </li>
              <div key={index+item} >
                <ServicesItem  content={item} index={index} deleteItem={this.deleteItem.bind(this)}/>
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  inputList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
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
