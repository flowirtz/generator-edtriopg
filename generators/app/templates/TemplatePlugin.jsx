import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.scss";


class <%= pluginName %>Plugin extends Component {
  render() {
    const { isEditable, isViewMode } = this.props;

    return (
      <>
        <p>Hello from <%= pluginName %>!</p>
        <p>I am editable: {isEditable}</p>
        <p>I am in view mode: {isViewMode}</p>
      </>
    );
  }

  static propTypes = {
    isEditable: PropTypes.bool,
    isViewMode: PropTypes.bool.isRequired,
    content: PropTypes.object,
    saveContent: PropTypes.func,
  };
}

export default <%= pluginName %>Plugin;
