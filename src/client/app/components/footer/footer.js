import './footer.css';
import React from 'react';

class Footer extends React.Component {
  render () {
    return (
        <div className="mastfoot">
            <div className="inner">
            <p>
                Cover template for <a href="http://getbootstrap.com">
                Bootstrap</a>
                , by <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
            </div>
        </div>
    );
  }
}

export default Footer;