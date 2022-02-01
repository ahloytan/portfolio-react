import React from 'react';

class HBGMenu extends React.Component {
  render() {
    return (<div className="hamburgerMenu" onClick={() => this.props.overlay()}>
    <a href="#/" className="cd-primary-nav-trigger">
			<span className="cd-menu-icon"></span>
		</a>
    </div>)
  }
}

export default HBGMenu;
