import React, { useState } from 'react';
import ComboBox from './ComboBox';
import { db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

const CreatePost = (title, user, description) => {
  const [option, setOption] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    community: '',
    flair: [],
    checked: true,
  });

  const handleChange = (e, value) => {
    setOption(value);
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
        <ComboBox handleChange={handleChange} />
        {console.log(option)}
        <div className="inputBox">
          <input className="titleInput" type="text" placeholder="Title" />
          <textarea
            className="inputText"
            placeholder="Text (Optional)"
            rows={6}
          />
          <hr
            style={{
              color: 'black',
              background: 'black',
              height: '2px',
              marginTop: '20px',
              marginBottom: '5px',
              width: '90%',
            }}
          />
          <div className="buttonRow">
            <button className="postButton">POST</button>
          </div>
          <div className="inputFooter">
            <div className="replyCheck">
              <input
                type="checkbox"
                id="replyBox"
                name="checked"
                value="reply"
                onChange={(e) => {
                  setForm({ checked: !form.checked });
                  console.log(e.target.checked);
                }}
                defaultChecked={form.checked}
              />
              <label htmlFor="replyBox">
                &nbsp;Send me post reply notifications
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
