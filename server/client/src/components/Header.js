import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'not logged in';
      default:
        return "i'm logged in";
    }
  }
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
                  {this.renderContent()}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);