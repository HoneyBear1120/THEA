import React from 'react';
/**
 * 
 * @param {*} props 
 * @returns special div which have height 20px, to make sure 
 * parent layout don't enlarge or shorten when error occurs.
 */
export function ErrorContainer(props){
    return <div style={{height:"20px",}}>
        {props.children}
    </div>
}