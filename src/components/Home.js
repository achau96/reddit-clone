import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

const Home = (props) => {
  // useEffect(() => {
  //   async function checkData() {
  //     const info = await getDocs(
  //       collection(db, 'posts/e0iFQGhh79XI1B1YVJkI/videos')
  //     );
  //     info.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   }
  //   checkData();
  // }, []);

  useEffect(() => {
    async function checkData() {
      const info = await getDocs(collection(db, 'posts'));
      info.forEach((doc) => {
        console.log(doc.id);
      });
    }
    checkData();
  }, []);

  return (
    <div className="home">
      <div className="trending">Popular Posts</div>
      <div className="container">
        <div>cards here</div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
