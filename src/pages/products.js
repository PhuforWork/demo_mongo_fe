import React from 'react';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import AccordingExpand from '../styleComponents/accorditionExpand'
import According from '../styleComponents/accordition'
import TextField from '../styleComponents/textField'
import Button from '../styleComponents/button'
import Stack from '@mui/material/Stack';



const product = () => {
     return (
          <Container maxWidth="lg">
               <Grid container spacing={2}>
                    <Grid sx={{paddingTop: '10px'}}  size={12}/>
                    <Grid size={5}>
                         <div>
                              <img style={{ width: '100%' }} src="/MedicalDevicelogo.png" />
                         </div>
                    </Grid>
                    <Grid size={7}>
                         <div>
                              <span>Hộp mực máy in canon 2900/3000 Có Nút Đổ Mực- XẢ THẢI DỄ DÀNG Đổ LẠI Mực( 12A/303/fx9) không vỏ hộp</span>
                              <div style={{ padding: '5px', display: 'flex' }}>
                                   <span style={{ padding: '3px 0px 3px 0px' }}>₫</span>
                                   <span style={{ padding: '3px 0px 3px 0px', fontWeight: 'normal' }}>99.999</span>
                              </div>
                              <span>Chính sách trả hàng</span>
                              <span>Vận chuyển</span>
                              <span>Số lượng</span>
                              <Stack direction="row" spacing={2}>
                                   < Button
                                        variant='contained'
                                        href=''
                                        color='success'
                                        size='small'
                                        text='Thêm vào giở hàng'
                                        width='100%'
                                        padding='10px'
                                   />
                                   < Button
                                        variant='contained'
                                        href=''
                                        color='error'
                                        size='small'
                                        text='Mua ngay'
                                        width='100%'
                                        padding='10px'
                                   />
                              </Stack>
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