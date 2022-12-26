import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Origin=({ changed })=>{
    const [origin, setOrigin] = React.useState(" ");
  
    const handleChange = (event) => {
      setOrigin(event.target.value);
      changed(event.target.value)
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel error={origin!==" "?false:true} id="demo-simple-select-label">Origin</InputLabel>
          <Select
            error={origin!==" "?false:true}
            labelId="demo-simple-select-label"
            id="demo-simple-select"            
            value={origin}
            label="origin"
            onChange={handleChange}
          >
            <MenuItem value="Paris">París</MenuItem>
            <MenuItem value="London">London</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  };
export default Origin;