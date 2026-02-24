import { Box, TextField } from "@mui/material"

export default function Multiline() {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outline-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />

                <TextField
                    id="outline-textarea"
                    label="Multiline placeholder"
                    multiline
                    placeholder="placeholder"
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default value"

                />
            </div>
            <div>
                <TextField 
                  id="filled-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  variant="filled"

                />

                <TextField 
                  id="filled-textarea"
                  label="Multiline placeholder"
                  placeholder="placeholder"
                  multiline
                  variant="filled"

                />

                <TextField 
                   id="filled-multiline-static"
                   label="Multiline"
                   multiline
                   rows={4}
                   variant="filled"
                />
            </div>
            <div>
                <TextField 
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={4}
                  variant="standard"
                />

                <TextField 
                  id="standard-textarea"
                  label="Multline placeholder"
                  placeholder="placeholder"
                  multiline
                  variant="standard"
                />

                <TextField 
                 id="standard-multiline-static"
                 label="Multiline"
                 multiline
                 rows={4}
                 variant="standard"
                />
            </div>
        </Box>
    )
}