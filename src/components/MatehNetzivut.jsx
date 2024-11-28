import React from 'react';
import { useNavigate } from 'react-router-dom';
import  {OndemandVideo} from '@mui/icons-material'
const MatehNetzivut = () => {
  const navigate = useNavigate();
  return (
    <div className="page page1">

      <button className="button videoLink" onClick={() => navigate('/demoVideo')}>
      
      <OndemandVideo color='white'></OndemandVideo>
      </button>


      <button className="button button4" onClick={() => navigate('/')}>
      </button>

      <button className="button button1" onClick={() => navigate('/Machoz')}>
      </button>
    </div>
  );
};

export default MatehNetzivut;