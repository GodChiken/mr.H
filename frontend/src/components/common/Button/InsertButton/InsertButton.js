import React from 'react';
import './InsertButton.css';
const InsertButton = ({children}) => {
  return (
    <div >
        <button className='common-insert-button'>
            {children}
        </button>
    </div>
  );
};
 
export default InsertButton;