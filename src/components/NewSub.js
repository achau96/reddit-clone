import React from 'react';
import { TextField } from '@mui/material';

const NewSub = ({ handleChange2 }) => {
  return (
    <TextField
      onChange={(e) => handleChange2(e)}
      name="community"
      id="outlined-basic"
      size="small"
      sx={{
        width: 300,
        backgroundColor: 'white',
        marginTop: '10px',
      }}
      label="New Subreddit"
      variant="outlined"
    />
  );
};

export default NewSub;
