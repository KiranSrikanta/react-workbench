import './app.css';
import React, {PropTypes} from 'react';
import Footer from './footer/footer';
import Header from './header/header';

class App extends React.Component {
  render () {
    return (
        <div className="AppMain site-wrapper">
            <div className="site-wrapper-inner">
                <div className="cover-container">

                    <Header />

                    {this.props.children}

                    <Footer />
                </div>
            </div>
        </div>
    );
  }
}

App.propTypes = {
    'children': PropTypes.object.isRequired
};

export default App;