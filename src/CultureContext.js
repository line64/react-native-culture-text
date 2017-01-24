import React, { Component } from 'react';

class CultureContext extends Component {

  static childContextTypes = {
    culture: React.PropTypes.string,
    translations: React.PropTypes.object,
  };

  getChildContext() {
    return {
      culture: this.props.culture,
      translations: this.props.translations
    };
  }

  render() {
    return this.props.children;
  }

}

export default CultureContext;
