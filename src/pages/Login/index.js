import React from 'react';
import { loginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginBg} className="bg-image" alt="fotoLogin" />
      </div>
      <div className="right">
        <p className="tittle">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button tittle="Login" />
        <Gap height={20} />
        <br /> <Link tittle="Belum Punya Akun ? Daftar Disini Sekarang" />
      </div>
    </div>
  );
};

export default Login;
