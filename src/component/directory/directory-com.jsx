import React from "react";
import MenuItem from "../menu-item/menu-item-com.jsx";
import "./directory-style.css";
import { connect } from "react-redux";

const Directory = ({ directoryItems }) => {
  return (
    <div className="directory">
      {directoryItems.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateTOProps = (state) => ({
  directoryItems: state.directory.section,
});

export default connect(mapStateTOProps)(Directory);
