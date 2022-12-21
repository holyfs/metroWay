import React, { useState } from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimeOut=()=>{
    const [value, setValue] = useState(null);
    return(<>
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <TimePicker
        label="Departing time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </>);
};
export default TimeOut;