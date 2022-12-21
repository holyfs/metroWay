import React, { useState } from "react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateIn=()=>{
    const [value, setValue] = useState(null);

    return (<>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                label="Departing"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                  }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider></>
    );
};
export default DateIn;