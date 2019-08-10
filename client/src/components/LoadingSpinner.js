import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="m-4 d-flex align-items-center flex-grow-1 justify-content-center">
            <div className="spinner-grow d-flex align-items-center" style={{ width: "75px", height: "75px" }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;