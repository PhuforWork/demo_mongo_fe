import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PaperList from '../styleComponents/paperlist';

export default function SimplePaper() {
     return (
          <Box
               sx={{
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '2px 2px 7px #9e9e9e', // Tùy chỉnh bóng đổ
                    '& > :not(style)': {
                         m: 0,
                         width: '100%',
                    },
               }}
          >
               <Paper
                    sx={{
                         border: 'none', // Đảm bảo không có đường viền
                         boxShadow: 'none', // Nếu cần thêm để không có bóng   
                    }}
                    elevation={3}>
                    <PaperList />
               </Paper>
          </Box >
     );
}
