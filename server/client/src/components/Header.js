import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <a className="left brand-logo">
                Nav Link
              </a>
              <ul className="right">
                <li>
                  <a href="/">Login with Google</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;