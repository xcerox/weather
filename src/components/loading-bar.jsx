import React from 'react';

const LoadingBar = ({ isLoading }) => {

  if (!isLoading) {
    return null;
  }

  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  )
}

export default LoadingBar;