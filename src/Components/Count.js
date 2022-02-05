import React from 'react';

export function Count(valueCount) {
    const [ cont, setCont ] = React.useState(valueCount);

    const increment = () => {
        setCont((cont) => cont + 1 )
    }

    const decrement = () => {
        setCont((cont) => Math.max(0, cont - 1))
    }

    return { cont, increment, decrement }
} 