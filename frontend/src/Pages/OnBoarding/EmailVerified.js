import React from 'react'
import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
function EmailVerified() {

    const history = useHistory();
    useLayoutEffect(() => {
    
        history.push({
            pathname: '/',
            state: {
                type:'alert-success',
                message:'Account verified Successfully'
            }
        })

    }, [])

    return (
        <div>

        </div>
    )
}

export default EmailVerified
