import React, { useState } from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateIn=({ changed })=>{
    const [value, setValue] = useState(null);


    return (<>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
                label="Departing"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    changed(newValue);
                  }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider></>
    );
};
export default DateIn;