import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

export default function ComboBox(props) {
  const [subReddits, setSubreddits] = useState([]);

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
    <Autocomplete
      onChange={(e, value) => props.handleChange(e, value)}
      disablePortal
      id="size-small-filled"
      options={subReddits}
      size="small"
      sx={{
        width: 300,
        backgroundColor: 'white',
        marginTop: '10px',
      }}
      renderInput={(params) => <TextField {...params} label="Community" />}
    />
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];
