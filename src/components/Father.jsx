import React from 'react';
import ChildCom from './Child';

function Father(props) {
    const goChild = () => {
        props.history.push('/father/child');
    }
    return(
        <>
            <div>Father com</div>
            <button onClick={goChild}>go child</button>
            <ChildCom />
        </>
    )
}

export default Father;