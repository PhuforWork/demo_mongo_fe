import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimpleCard({ sizeCard, imgCard, fontCrd = {}, padCrd, marCrd }) {
     const { fntSize, fntWght, textAlg } = fontCrd;
     return (
          <Box
               sx={{
                    margin: marCrd,
                    padding: padCrd,
                    borderRadius: '5px',
                    overflow: 'hidden',
                    boxShadow: '3px 3px 7px #9e9e9e', // Tùy chỉnh bóng đổ
                    '& > :not(style)': {
                         m: 0,
                         width: sizeCard,
                    },
               }}
          >
               <Paper
                    sx={{
                         border: 'none', // Đảm bảo không có đường viền
                         boxShadow: 'none', // Nếu cần thêm để không có bóng   
                    }}
                    elevation={3}
               >
                    {/*  */}
                    <img
                         src={imgCard}
                         style={{ width: '100%' }}
                    />
                    <div style={{padding:'10px 0px'}}>
                         <div style={{ padding: '5px', }}>Content</div>
                         <div style={{ display: 'flex' }}>
                              <div style={{ padding: '5px', display: 'flex' }}><p style={{ padding: '3px 0px 3px 0px' }}>₫</p> 99999</div>
                              <div style={{ padding: '5px', display: 'flex', textDecoration: 'line-through' }}><p >₫</p> 99999</div>
                         </div>
                    </div>
               </Paper >
          </Box >
     );
}
