import {IndexLink, Link} from 'react-router';
import React, {PropTypes} from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand">react-redux</h3>
          <nav>
            {this.props.loading && <h3>AJAX...</h3>}
            <ul className="nav masthead-nav">
              <li>
                <IndexLink to="/" activeClassName="active">
                  Home
                </IndexLink>
              </li>
              <li>
                <Link to="/courses" activeClassName="active">
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  'loading': PropTypes.bool.isRequired
};

export default Header;