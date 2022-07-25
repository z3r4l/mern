import React from 'react';
import { Gap, TextArea, Upload } from '../../components/atoms';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import './createBlog.scss';
const CreateBlog = () => {
  return (
    <div className="blog-post">
      <h1 className="tittle">Form Create Blog</h1>
      <Input label="Post Tittle" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button tittle="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};
export default CreateBlog;
