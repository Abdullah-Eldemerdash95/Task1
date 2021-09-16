import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


class Hello extends Component {// from internet icon box for using when reaching mobile size
    render() {
      return <div className="bar-nav">
        <Saton />
      </div>;
    }
  }
  
  class Saton extends Component {
      state = {
        open: false
    }
    handleClick = () => {
        this.setState({ open: !this.state.open });
    }
    render () {
        const { open } = this.state;
        return (
          <div className="link">
            <span onClick={this.handleClick}>
            <FontAwesomeIcon icon={faBars} />
</span>
          <div className={`menu ${open ? 'open' : ''}`}>
            <ul>
              <li>360 Planner</li>
              <li>Her</li>
              <li>Him</li>
              <li>The Wedding</li>
              <li>Vendors</li>
              <li><Link  to={'/'}>Gallery</Link></li>
              <li><Link  to={'/categories'}>categories</Link></li> 
              {/* i put categories here cause he can't reach from first click with more like in full screen */}
              <li>Ideas & More</li>
            </ul>
          </div>
          </div>
      )
    }
  }

  export default Hello;