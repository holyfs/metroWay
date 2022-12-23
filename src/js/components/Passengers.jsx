import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Passengers=({ changed })=>{
const [value, setValue]=useState(null);

const onChange=(event)=>{
    setValue(changed(event.target.value))
}
    return(<>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: 'auto' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    error={value!==null?value:true}
                    id="outlined-number"
                    size="medium"
                    label="Passengers"
                    type="number"
                    onChange={onChange} 
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </Box>
    </>);
};
export default Passengers;