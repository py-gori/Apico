import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import axios from 'axios';

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.state.dropdownOpen ? this.setState({dropdownOpen: false}) : this.setState({dropdownOpen: true}) ;
  }

  renderPosts() {
    axios
      .get('/api/hello')
      .then(results => {
        const data = results.data;
      })
      .catch(() => {
        console.log('通信に失敗しました。');
      });
  }

  render() {
    return (
      <div className="contents">
        <button onclick={this.renderPosts()}>push</button>
      </div>
    )
  }
}

export default Buttons;
