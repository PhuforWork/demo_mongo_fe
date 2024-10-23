import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ variant, disabled, href, disableElevation, color, size, startIcon, endIcon, text, width, padding }) {
     return (
          <Button
               sx={{ width: width, padding: padding, height: '100%' }}
               variant={variant}
               color={color}
               size={size}
               startIcon={startIcon ? startIcon : null}
               endIcon={endIcon ? endIcon : null}
               disabled={disabled}
               disableElevation={disableElevation}
          >
               {text}
          </Button>
     );
}
