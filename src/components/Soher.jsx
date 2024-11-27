import React from 'react';
import { useNavigate } from 'react-router-dom';

const Soher = () => {
  const navigate = useNavigate();
  return (
    <div className="page page4">
      <button className="button button4" onClick={() => navigate('/')}>
        Next
      </button>
    </div>
  );
};

export default Soher;