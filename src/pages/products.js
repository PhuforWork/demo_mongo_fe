import React from 'react';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import AccordingExpand from '../styleComponents/accorditionExpand'
import According from '../styleComponents/accordition'
import TextField from '../styleComponents/textField'
import Button from '../styleComponents/button'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PriceStyle from '../styleComponents/priceStyle'
import PlusMinus from '../styleComponents/plusMinus'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomWidthTooltip = styled(({ className, ...props }) => (
     <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
     [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.white,
          '&:before': {
               border: '0.5px solid #9e9e9e', // Thêm viền cho mũi tên
          }
     },
     [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: 450,
          backgroundColor: '#f5f5f5',
          color: 'black',
          padding: '10px',
          border: '0.5px solid #9e9e9e',

     }
}));

const longText = `
Miễn phí Trả hàng trong 15 ngày nếu Đổi ý (hàng trả phải còn nguyên seal, tem, hộp sản phẩm), áp dụng cho một số sản phẩm nhất định. Ngoài ra, tại thời điểm nhận hàng, bạn có thể đồng kiểm và được trả hàng miễn phí. 
`;

const product = () => {
     return (
          <Container maxWidth="lg">
               <Grid container spacing={2}>
                    <Grid sx={{ paddingTop: '10px' }} size={12} />
                    <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} size={5}>
                         <div style={{ width: '400px', height: '400px' }}>
                              <img style={{ width: '100%' }} src="/MedicalDevicelogo.png" />
                         </div>
                    </Grid>
                    <Grid size={7}>
                         <div>
                              <Typography variant="h4" gutterBottom>
                                   Hộp mực máy in canon 2900/3000 Có Nút Đổ Mực- XẢ THẢI DỄ DÀNG Đổ LẠI Mực( 12A/303/fx9) không vỏ hộp
                              </Typography>
                              <Stack sx={{ padding: '15px 0px' }} direction="row" spacing={2}>
                                   <div>
                                        <PriceStyle padding='5px' textDecoration='' locale='vi-VN' style='currency' currency='VND' price='9999999' />
                                   </div>
                                   <div>
                                        <PriceStyle padding='5px' textDecoration='line-through' locale='vi-VN' style='currency' currency='VND' price='9999999' />
                                   </div>
                              </Stack>
                              <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
                                   <Grid size={3}>
                                        <Typography variant="body2" gutterBottom>
                                             Chính sách trả hàng
                                        </Typography>
                                   </Grid>
                                   <Grid sx={{ display: 'flex', alignItems: 'center' }} size={9}>
                                        <Typography variant="body2" gutterBottom>
                                             <i style={{ padding: '0px 5px' }} class="fa-solid fa-box"></i>
                                             Trả hàng 15 ngày
                                        </Typography>
                                        <Typography sx={{ paddingLeft: '10px' }} variant="body2" gutterBottom>
                                             Đổi ý miễn phí
                                        </Typography>
                                        <span style={{ margin: '0px 0px 2px 5px' }}>
                                             <CustomWidthTooltip title={longText}>
                                                  <HelpOutlineIcon fontSize='inherit' />
                                             </CustomWidthTooltip>
                                        </span>
                                   </Grid>
                                   <Grid size={3}>
                                        <Typography variant="body2" gutterBottom>Vận chuyển</Typography>
                                   </Grid>
                                   <Grid size={9}>
                                        <Typography variant="body2" gutterBottom>
                                             <i style={{ padding: '0px 5px' }} class="fa-solid fa-truck-fast"></i>
                                             Vận chuyển đến
                                        </Typography>
                                        {/*  */}
                                        
                                   </Grid>
                                   <Grid size={3}>
                                        <Typography variant="body2" gutterBottom>Số lượng</Typography>
                                   </Grid>
                                   <Grid size={9}>
                                        <Typography variant="body2" gutterBottom>
                                             <PlusMinus />
                                        </Typography>
                                   </Grid>
                              </Grid>
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

                         </div>
                    </Grid>
                    <Grid size={12}>
                         <div>
                              <AccordingExpand />
                         </div>
                         <div>
                              <According />
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