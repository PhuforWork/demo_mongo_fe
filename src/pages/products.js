import React from 'react';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import AccordingExpand from '../styleComponents/accorditionExpand'
import According from '../styleComponents/accordition'
import TextField from '../styleComponents/textField'
import Button from '../styleComponents/button'

const product = () => {
     return (
          <Container maxWidth="lg">
               <Grid container spacing={2}>
                    <Grid size={5}>
                         <div>
                              <img style={{ width: '100%' }} src="/MedicalDevicelogo.png" />
                         </div>
                    </Grid>
                    <Grid size={7}>
                         <div>
                              <h2>Hộp mực máy in canon 2900/3000 Có Nút Đổ Mực- XẢ THẢI DỄ DÀNG Đổ LẠI Mực( 12A/303/fx9) không vỏ hộp</h2>
                              <div style={{ padding: '5px', display: 'flex' }}>
                                   <h2 style={{ padding: '3px 0px 3px 0px' }}>₫</h2>
                                   <h1 style={{ padding: '3px 0px 3px 0px', fontWeight: 'normal' }}>99.999</h1>
                              </div>
                              <div>Chính sách trả hàng</div>
                              <div>Vận chuyển</div>
                              <div>Số lượng</div>
                              <div>
                                   <button>Thêm vào giỏ hàng</button>
                                   <button>Mua ngay</button>
                              </div>
                              <div>
                                   <AccordingExpand />
                              </div>
                              <div>
                                   <According />
                              </div>
                         </div>
                    </Grid>
                    <Grid size={12}>
                         Đánh giá sản phẩm
                    </Grid>
                    <Grid size={11}>
                         <TextField
                              id='outlined-multiline-static'
                              label='Nhập đánh giá'
                              placeholder=''
                              maxRows={4}
                              variant="filled"
                         />
                    </Grid>
                    <Grid size={1}>
                         < Button
                              variant='contained'
                              href=''
                              color='success'
                              size='small'
                              text='Gửi'
                              width='100%'
                              // height='100%'
                              padding='10px'
                         />
                    </Grid>
                    <Grid size={12} />
                    <Grid size={12} >
                         <div>
                              Khu vực comment
                         </div>
                    </Grid>
               </Grid>
          </Container >
     );
};

export default product;