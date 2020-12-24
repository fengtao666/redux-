import React from 'react';

function Child(props) {
    console.log(props.children)
    return(
        <div>Child com</div>
    )
}

export default Child;