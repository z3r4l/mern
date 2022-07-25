/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { registerBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './Register.scss';
const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={registerBg} className="bg-image" alt="fotoRegister" />
      </div>
      <div className="right">
        <p className="tittle">Register</p>
        <Input label="FullName" placeholder="FullName" />
        <Gap height={10} />
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button tittle="Register" />
        <Gap height={20} />
        <Link tittle="Kembali Ke Halaman Login" />
      </div>
    </div>
  );
};

export default Register;
