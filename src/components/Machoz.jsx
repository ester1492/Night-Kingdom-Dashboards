import React from 'react';
import { useNavigate } from 'react-router-dom';

const Machoz = () => {
  const navigate = useNavigate();
  return (
    <div className="page page2">
            <button className="button button4" onClick={() => navigate('/')}>
      </button>

      <button className="button button2" onClick={() => navigate('/Bisar')}>
      </button>
    </div>
  );
};

export default Machoz;