import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bisar = () => {
  const navigate = useNavigate();
  return (
    <div className="page page3">
      <button className="button button3" onClick={() => navigate('/Soher')}>
        Next
      </button>
    </div>
  );
};

export default Bisar;