import React from 'react';

export const Messages = ({ errorMessage }) => {
    return (
        errorMessage &&
        <div className='alert alert-danger'>
            {errorMessage}
        </div>
    )
}
