import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatehNetzivut = () => {
  const navigate = useNavigate();
  return (
    <div className="page page1">
      <button className="button videoLink" onClick={() => navigate('/demoVideo')}>
      </button>


      <button className="button button4" onClick={() => navigate('/')}>
      </button>

      <button className="button button1" onClick={() => navigate('/Machoz')}>
      </button>
    </div>
  );
};

export default MatehNetzivut;