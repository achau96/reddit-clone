import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  where,
  query,
  QueryDocumentSnapshot,
} from '@firebase/firestore';
import { Link } from 'react-router-dom';
import MiniCard from './MiniCard';

const Home = (props) => {
  useEffect(() => {
    async function checkData() {
      const info = await getDocs(collection(db, 'posts'));
      info.forEach((doc) => {
        console.log(doc.id);
      });
    }
    checkData();
  }, []);

  useEffect(() => {
    async function getQuery() {
      const postsRef = collection(db, 'posts');
      const q = query(postsRef, where('community', '==', 'banana'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
      });
    }
  }, []);

  return (
    <div className="home">
      <div className="trending">Popular Posts</div>
      <div className="container">
        <div>
          <Link to="/create-post">
            <div className="createPost">Create Post</div>
          </Link>
          <MiniCard />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
