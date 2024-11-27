import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatehNetzivut = () => {
  const navigate = useNavigate();
  return (
    <div className="page page1">
      <button className="button button1" onClick={() => navigate('/Machoz')}>
        Next
      </button>
    </div>
  );
};

export default MatehNetzivut;