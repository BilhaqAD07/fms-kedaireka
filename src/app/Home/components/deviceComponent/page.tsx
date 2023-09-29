import React, { CSSProperties } from "react";
import "./styles.css"

interface DeviceComponentProps {
  topLeftStyles?: CSSProperties;
  topRightStyles?: CSSProperties;
  bottomLeftStyles?: CSSProperties;
  bottomRightStyles?: CSSProperties;
  deviceStyle?: CSSProperties;
}

const DeviceComponent: React.FC<DeviceComponentProps> = ({
  topLeftStyles,
  topRightStyles,
  bottomLeftStyles,
  bottomRightStyles,
  deviceStyle,
}) => {
  return (
    <div className="shadow" style={deviceStyle}>
      <div className="container">
        <div className="corner top-left" style={topLeftStyles}></div>
        <div className="corner top-right" style={topRightStyles}></div>
        <div className="corner bottom-left" style={bottomLeftStyles}></div>
        <div className="corner bottom-right" style={bottomRightStyles}></div>
      </div>
    </div>
  );
};

export default DeviceComponent;
