import React, { useState, useEffect } from 'react';
import { PhotoService } from '../../services/PhotoService';
import Image from 'next/image';

const PhotoGrid = () => {
  const [images, setImages] = useState<{ itemImageSrc: string; alt: string; thumbnailImageSrc: string }[]>([]);

  useEffect(() => {
    PhotoService.getImages()
      .then(data => {
        console.log('Images loaded:', data);
        setImages(data.slice(0, 9));
      })
      .catch(error => console.error('Error loading images:', error));
  }, []);

  return (
    <div className="photo-grid">
      <div className="grid">
        {images.map((image, index) => (
          <div className="col-4" key={index}>
            <Image 
              src={image.itemImageSrc} 
              alt={image.alt} 
              width={200} 
              height={200} 
              style={{ borderRadius: '10px' }} 
              className='photos'
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .photo-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .col-4 {
          width: 100%;
        }
        .photos {
          animation: fadeInOut 2s infinite alternate;
          width: 200px;
          height: 200px;
        }
        @keyframes fadeInOut {
          from {
            opacity: 0.6;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoGrid;