import React, { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

const SearchButton=()=>{
    const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }
    return(<>
        <Box>
            <LoadingButton
                size="small"
                onClick={handleClick}
                onChange={() => setLoading(!loading)}
                loadingIndicator="Loading…"
                variant="outlined"
            >
                Search
            </LoadingButton>
        </Box>  
    </>);
};
export default SearchButton;