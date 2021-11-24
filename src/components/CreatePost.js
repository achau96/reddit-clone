import React from 'react';
import ComboBox from './ComboBox';

const CreatePost = (title, user, description) => {
  const postFunction = () => {
    return { user, title, description, upvotes: 0, comments: [] };
  };

  return (
    <div className="post">
      <div className="left-side">
        <div>Create a post</div>
        <hr
          style={{
            color: 'black',
            background: 'black',
            height: '2px',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        />
        <ComboBox />
        <input type="text" placeholder="Enter Title Here" />
      </div>
    </div>
  );
};

export default CreatePost;
