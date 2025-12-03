import React from 'react';

function GoodsCard(props) {
  const { image, name, price } = props;

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '50%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px'
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333'
  };

  const priceStyle = {
    fontSize: '20px',
    color: '#2c7a2c',
    fontWeight: 'bold'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={image} alt={name} style={imageStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={priceStyle}>{price} грн</div>
    </div>
  );
}

export default GoodsCard;