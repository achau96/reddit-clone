import uniqid from 'uniqid';
import { db, storage } from '../firebase';
import { doc, setDoc } from '@firebase/firestore';
import { ref, uploadBytes } from '@firebase/storage';

const onSubmit = async (form, setForm, type) => {
  console.log(type);
  if (type === 'post' && form.community !== null) {
    await setDoc(doc(db, 'subreddit', form.community, 'posts', uniqid()), {
      form,
    });
  }
  if (form.file === null) {
    return;
  } else {
    const newId = uniqid();
    const imageRef = ref(storage, newId);
    setForm({ ...form, filePath: newId });
    uploadBytes(imageRef, form.file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
};

export default onSubmit;
