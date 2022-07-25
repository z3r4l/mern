import React from 'react';
import './upload.scss';
import loginBg from '../../../assets/image/login1.jpg';
const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={loginBg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
