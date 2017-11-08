import React from 'react';

import './ContentList.css'
const ContentList = ({
    left_title,
    right_title,
    style,
    children
}) => {
    return (

    <div className='item_list' style={style}>
        <div>
            <div className='list-left-title'>
                {left_title}
            </div>

            <div className='list-right-title'>
                {right_title}
            </div>
        </div>
        <div className='list_content'>
            {children}
        </div>
    </div>
    );
};

export default ContentList;