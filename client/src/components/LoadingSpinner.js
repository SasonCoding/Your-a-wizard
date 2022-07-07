import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="spinner-border text-warning" role="status" style={{width: "3rem", height: "3rem"}}><span className="visually-hidden">Loading...</span></div>
    )
}

export default LoadingSpinner