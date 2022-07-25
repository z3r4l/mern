import React from 'react';
import { registerBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';
import { useNavigate } from 'react-router-dom';
const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={registerBg} alt="ImageBLog" />
      <div className="content-detail">
        <p className="tittle">Tittle Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body-blog">
          Do ex aliqua sit voluptate ex nulla duis quis laborum. Sit est aute irure ullamco eiusmod ipsum culpa in ea nostrud. Amet laborum exercitation id cupidatat ut nulla fugiat culpa quis. Et amet fugiat pariatur veniam culpa
          consectetur mollit labore deserunt anim amet minim nisi sit.
        </p>
        <Gap height={10}/>
      <Button tittle="Detail" onClick={() => navigate('/detail-blog')} />
      </div>
    </div>
  );
};

export default BlogItem;
