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
    setForm({ ...form, community: value });
  };

  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        {console.log(form)}
        <div className="inputBox">
          <input
            className="titleInput"
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange2}
          />
          <textarea
            className="inputText"
            name="text"
            placeholder="Text (Optional)"
            rows={6}
            onChange={handleChange2}
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
                  setForm({ ...form, checked: !form.checked });
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
