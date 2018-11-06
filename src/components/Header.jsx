import React from 'react';


class Header extends React.Component {
  render () {
    return (
    <div className="header">
      <h1 className="display-2 mb-4">Weather App</h1>
      <p className="mb-4 ml-3">Wherever you go, no matter what the weather, always bring your own sunshineis.</p>
      <p className="ml-3">Find the Cities Weather here ...</p>
    </div>
    );
  }
}

export default Header
