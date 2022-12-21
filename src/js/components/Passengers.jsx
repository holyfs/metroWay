import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Passengers=()=>{
    return(<>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-number"
                    size="medium"
                    label="Passengers"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </Box>
    </>);
};
export default Passengers;