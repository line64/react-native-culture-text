import React, { Component } from "react";
import PropTypes from "prop-types";

class CultureContext extends Component {
  static childContextTypes = {
    locale: PropTypes.string,
    translations: PropTypes.object
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
