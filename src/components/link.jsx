import React from 'react';

const Github = () =>  {
    const href = 'https://github.com/smakosh/react-todolist/tree/learning_redux'
    return (
        <div className="center-text link">
            <a href={href} target="_blank">Check code on Github!</a>
        </div>
    )
}

export default Github