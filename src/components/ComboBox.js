import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ handleChange, subReddits }) {
  return (
    <Autocomplete
      onChange={(e, value) => handleChange(e, value)}
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
