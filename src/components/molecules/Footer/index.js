import React from 'react';
import { Facebook, Github, logo, Twitter, Youtube } from '../../../assets';
import './footer.scss';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={logo} alt="Icon Logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={Facebook} />
          <Icon img={Github} />
          <Icon img={Twitter} />
          <Icon img={Youtube} />
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
