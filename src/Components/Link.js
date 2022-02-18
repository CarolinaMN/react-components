import React, { useState } from 'react';

const STATUS = {
    HOVERED : 'hoverd',
    NORMAL : 'normal'
}

export default function Link({page, name}) {
    const [ status, setStatus ] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    }

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    }

    return(
        <a className={status}
         href={page}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         >
            {name}            
        </a>
    )
}