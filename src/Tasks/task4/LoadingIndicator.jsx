import React from 'react';
import './style.scss';

const LoadingIndicator = (props) => {
    return (
        <React.Fragment>
            <div className="loader-container">
                <div className="outer-circle">
                    <div className="inner-circle">
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoadingIndicator;