import './assets/css/app.css';
import React, {PropTypes} from 'react';
import Footer from './footer';
import Header from './header';
import {connect} from 'react-redux';

class App extends React.Component {
  render () {
    return (
        <div className="AppMain site-wrapper">
            <div className="site-wrapper-inner">
                <div className="cover-container">

                    <Header loading={this.props.loading} />

                    {this.props.children}

                    <Footer />
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const zero = 0;

  return {
    'loading': state.ajaxStatusReducer > zero
  };
};

App.propTypes = {
    'children': PropTypes.object.isRequired,
    'loading': PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);