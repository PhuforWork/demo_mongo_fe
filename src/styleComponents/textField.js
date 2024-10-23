import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function MultilineTextFields({ id, label, placeholder, maxRows, variant}) {
     return (
          <Box
               component="form"
               sx={{ '& .MuiTextField-root': { m: 0, width: '100%' } }}
               noValidate
               autoComplete="off"
          >
               <div>
                    <TextField
                         id={id}
                         label={label}
                         placeholder={placeholder}
                         multiline
                         rows={maxRows}
                         variant={variant}
                    />
               </div>
          </Box>
     );
}

MultilineTextFields.propTypes = {
     id: PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     placeholder: PropTypes.string.isRequired,
     maxRows: PropTypes.number.isRequired,
     variant: PropTypes.number.isRequired,
}