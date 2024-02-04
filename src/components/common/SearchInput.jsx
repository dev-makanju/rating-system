import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Next from '../'

export default function FreeSolo() {
  return (
    <Stack className="bg-[#fff] rounded-lg" spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

const top100Films = [
  { title: 'CSC 405', year: 1 },
  { title: 'CSC 401', year: 3 },
  { title: 'CSC 408', year: 2 },
  { title: 'CSC 407', year: 4 },
  { title: 'CSC 415', year: 5 }
];