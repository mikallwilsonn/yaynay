import React from 'react';

const Loader = () => {
    console.log( 'Loader loaded' );
    return (
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
    );
}


export default Loader;
