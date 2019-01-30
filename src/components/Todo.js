import React from 'react';

const todo = (props) =>{
    return(
        <li>
            {props.children}
        </li>
    );
}

export default todo;