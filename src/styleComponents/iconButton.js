import * as React from 'react';
import IconButton from '@mui/material/IconButton';

export default function IconButtons({ variant, disabled, href, disableElevation, color, size, width, padding, onClick , icon}) {

     return (
          <IconButton
               onClick={onClick}
               sx={{ width: width, padding: padding, height: '100%' }}
               variant={variant}
               color={color}
               size={size}
               disabled={disabled}
               disableElevation={disableElevation}
          >
               {icon}
          </IconButton>
     );
}
