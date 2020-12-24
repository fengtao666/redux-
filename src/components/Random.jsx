import React from 'react';

function random(props) {
    const randomNum = Math.ceil(Math.random()*10);
    const back = () => {
        props.history.push('/');
    }
    const goCounter = (randomNum) => {
        props.history.push(`/count/${randomNum}`);
    }
    return(
        <>
            <div>random: {randomNum}</div><br/>
            <button onClick={back}>go Home</button><br/>
            <button onClick={()=>goCounter(randomNum)}>goCounter</button><br/>
        </>
    )
}

export default random;