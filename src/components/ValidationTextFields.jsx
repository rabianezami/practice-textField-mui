import { Box, TextField } from "@mui/material";

export default function ValidationTextFields() {
    return (
        <Box
          component="form"
          sx={{' & .MuiTextField-root': {m: 1, width:'25ch'} }}
          noValidate
          autoComplete="off"
        >
            <TextField 
              error 
              id="outlined-error"
              label="Error"
              defaultValue="Hello world"
 
              />
            <TextField 
              error
              id="contained-error-helper-text"
              defaultValue="Hello world"
              helperText="Incorrect entry"
            />

            <TextField 
              error
              id="filled-error"
              label="error"
              variant="filled"
            />

            <TextField 
              error
              id="standard-error-helper-text"
              label="error"
              helperText="Incorrect entry"
              variant="filled"
            />
        </Box>
    )
}