import React from 'react';

export default function Color() {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    

    return(
        <div>
            {colors.map(color => <h3>{color}</h3>)}
        </div>
    )
}