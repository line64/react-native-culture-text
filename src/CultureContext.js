import React, { Component } from 'react';

class CultureContext extends Component {

  static childContextTypes = {
    locale: React.PropTypes.string,
    translations: React.PropTypes.object,
  };

  getChildContext() {
    return {
      locale: this.props.locale,
      translations: this.props.translations
    };
  }

  render() {
    return this.props.children;
  }

}

export default CultureContext;
