import React from 'react';

interface ConnectedStatusProps {
  isConnected: boolean;
}

export const ConnectedStatus:React.FC<ConnectedStatusProps> = ({ isConnected }) => {
  const statusStyle = {
    display: 'flex',
    alignItems: 'center',
    color: isConnected ? '#00ab58' : '#af0404',
    // padding: '0.5em 1em',
    borderRadius: '20px',
    marginTop: '30px'
  };

  const dotStyle = {
    height: '10px',
    width: '10px',
    backgroundColor: isConnected ? '#00ab58' : '#af0404',
    borderRadius: '50%',
    marginRight: '10px',
    // marginTop: '20px'
  };

  return (
    <div style={statusStyle}>
      <span style={dotStyle} />
      <span>{isConnected ? 'Connected' : 'Not Connected'}</span>
    </div>
  );
};
