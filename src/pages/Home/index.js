import React from 'react';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import { BlogItem } from '../../components/molecules';
import './home.scss';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          tittle="Create Blog"
          onClick={() => {
            navigate('/create-blog');
          }}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button tittle="previous" />
        <Gap width={20} />
        <Button tittle="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
