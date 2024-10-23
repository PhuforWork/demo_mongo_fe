import React from 'react';
import '../styles/homecss.css';
import Paper from '../components/paper';

const Home = () => {
     return(
          <>
               <div className='flex-container'>
                    <div className='flex-item1'>
                         <Paper />
                    </div>
                    <div className='flex-item2'>item2</div>
               </div>
          </>
     );
};

export default Home;