import React from "react";

const File = ({ name }) => {
  return (
    <div className="file-cont">
      <div className="file-icon">📄</div>
      <div className="file-name">{name}</div>
    </div>
  );
};

export default File;
