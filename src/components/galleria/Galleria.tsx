import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../../services/PhotoService';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
}

export default function CustomContentDemo() {
  const [images, setImages] = useState<Image[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const galleria = useRef<Galleria>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await PhotoService.getImages();
      setImages(data);
    };

    fetchImages();
  }, []);

  const itemTemplate = (item: Image) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
  };

  const thumbnailTemplate = (item: Image) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
  };

  return (
    <div className="card flex justify-content-center">
      {images.length > 0 ? (
        <>
          <Galleria
            ref={galleria}
            value={images}
            numVisible={7}
            style={{ maxWidth: '850px' }}
            activeIndex={activeIndex}
            onItemChange={(e) => setActiveIndex(e.index)}
            circular
            fullScreen
            showItemNavigators
            showThumbnails={false}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
          <div className="grid" style={{ maxWidth: '400px' }}>
            {images.map((image, index) => (
              <div className="col-4" key={index}>
                <img
                  src={image.thumbnailImageSrc}
                  alt={image.alt}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setActiveIndex(index);
                    if (galleria.current) {
                      galleria.current.show();
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
