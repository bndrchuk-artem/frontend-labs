import React, { useState } from 'react';

function Image() {
  const [images, setImages] = useState([]);
  const [scale, setScale] = useState(1);

  const addImage = () => {
    if (images.length === 0) {
      setImages([{ id: Date.now(), scale: 1 }]);
      setScale(1);
    }
  };

  const zoomIn = () => {
    setScale(2);
  };

  const zoomOut = () => {
    setScale(1);
  };

  const deleteImage = () => {
    setImages([]);
    setScale(1);
  };

  return (
    <div>
      <a href="https://www.koeln.de/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://volare.volotea.com/wp-content/uploads/2023/04/cgn_city.jpg" 
          alt="Кельн" 
          width="700px"
          style={{ display: 'block', marginBottom: '20px' }}
        />
      </a>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={addImage} style={{ marginRight: '10px' }}>
          Додати
        </button>
        <button onClick={zoomIn} style={{ marginRight: '10px' }}>
          Збільшити
        </button>
        <button onClick={zoomOut} style={{ marginRight: '10px' }}>
          Зменшити
        </button>
        <button onClick={deleteImage}>
          Видалити
        </button>
      </div>

      <div style={{ width: '700px', overflow: 'hidden' }}>
        {images.map((img) => (
          <img
            key={img.id}
            src="https://volare.volotea.com/wp-content/uploads/2023/04/cgn_city.jpg"
            alt="Кельн"
            style={{
              maxWidth: '100%',
              height: 'auto',
              transform: `scale(${scale})`,
              transition: 'transform 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Image;