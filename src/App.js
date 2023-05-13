import React from 'react';

import Calculator from "./Components/Calculator";

import "./style.css"

function MyPage() {
  return (
    <div className='heading_div'>
      <h1 className='heading'>My React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default MyPage;
