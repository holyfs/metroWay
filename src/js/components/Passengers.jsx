import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Passengers=({ changed })=>{

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
                    id="outlined-number"
                    size="medium"
                    label="Passengers"
                    type="number"
                    onChange={(event) => changed(event.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </Box>
    </>);
};
export default Passengers;