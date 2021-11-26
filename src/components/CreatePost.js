import React, { useState, useEffect } from 'react';
import ComboBox from './ComboBox';
import addIcon from './icons/add/1x/outline_add_circle_black_24dp.png';
import NewSub from './NewSub';
import PostType from './PostType';
import { db, storage } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';

const CreatePost = (title, user, description) => {
  const [selectedType, setSelectedType] = useState('post');
  const [createNew, setCreateNew] = useState(false);
  const [subReddits, setSubreddits] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: null,
    file: null,
    url: null,
    community: '',
    checked: true,
  });

  const handleChange = (e, value) => {
    setForm({ ...form, community: value });
  };

  const resetValues = (name) => {
    setForm({ ...form, description: null, file: null, url: null });
    setSelectedType(name);
  };

  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMedia = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  useEffect(() => {
    async function checkData() {
      const info = await getDocs(collection(db, 'posts'));
      const list = [...subReddits];
      info.forEach((doc) => {
        list.push(doc.id);
        console.log(doc.id);
      });
      setSubreddits(list);
    }
    checkData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div className="community">
          {!createNew && (
            <ComboBox
              handleChange={handleChange}
              subReddits={subReddits}
              setSubreddits={setSubreddits}
            />
          )}
          {createNew && <NewSub handleChange2={handleChange2} />}
          <img
            className="addIcon"
            src={addIcon}
            alt="add subreddit"
            onClick={() => setCreateNew(!createNew)}
          />
        </div>
        <div className="inputBox">
          <div className="postType">
            <div
              className={`selectionBox ${
                selectedType === 'post' ? 'selected' : null
              }`}
              onClick={() => resetValues('post')}
            >
              Post
            </div>
            <div
              className={`selectionBox ${
                selectedType === 'media' ? 'selected' : null
              }`}
              onClick={() => resetValues('media')}
            >
              Images & Videos
            </div>
            <div
              className={`selectionBox ${
                selectedType === 'link' ? 'selected' : null
              }`}
              onClick={() => resetValues('link')}
            >
              Link
            </div>
          </div>
          <input
            className="titleInput"
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange2}
          />
          {/* <textarea
            className="inputText"
            name="text"
            placeholder="Text (Optional)"
            rows={6}
            onChange={handleChange2}
          /> */}
          <PostType
            handleChange2={handleChange2}
            handleMedia={handleMedia}
            selectedType={selectedType}
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
            <button
              onClick={() => {
                if (form.file === null) {
                  return;
                } else {
                  const imageRef = ref(storage, 'test1');
                  console.log(imageRef);
                  uploadBytes(imageRef, form.file).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                  });
                }
                console.log(form);
              }}
              className="postButton"
            >
              POST
            </button>
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
