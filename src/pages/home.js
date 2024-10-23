import React from 'react';
import '../styles/homecss.css';
import Paper from '../components/paper';
import Card from '../styleComponents/card';
import Grid from '@mui/material/Grid2';



const Home = () => {
     const imgUrl = '/MedicalDevicelogo.png'
     const sizeCard = '190px'
     const padCrd = '0px'
     const marCrd = '5px'
     const fontCrd = {
          fntSize: '0',
          fntWght: '0',
          textAlg: 'center'
     }
     return (
          <Grid container spacing={1}>
               {/* <div className='flex-container'> */}
               <Grid size={3}>
                    <div className='container-select-card'>
                         <Paper />
                    </div>
               </Grid>
               <Grid size={9}>
                    <div>
                         <div className='container-card'>
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                              <Card sizeCard={sizeCard}
                                   imgCard={imgUrl}
                                   padCrd={padCrd}
                                   marCrd={marCrd}
                                   fontCrd={fontCrd} />
                              {/*  */}
                         </div>
                    </div>
               </Grid>
               {/* </div> */}
          </Grid>
     );
};

export default Home;