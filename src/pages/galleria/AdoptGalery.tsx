import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../../services/PhotoService'; // Ajuste o caminho conforme necessário

export default function AdoptGalery() {
    const [images, setImages] = useState<{ itemImageSrc: string; alt: string; thumbnailImageSrc: string }[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const galleria = useRef<Galleria>(null);

    useEffect(() => {
        PhotoService.getImages()
            .then(data => {
                console.log('Images loaded:', data); // Log para depuração
                setImages(data);
            })
            .catch(error => console.error('Error loading images:', error));
    }, []);

    const itemTemplate = (item: { itemImageSrc: string; alt: string; thumbnailImageSrc: string }) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: { itemImageSrc: string; alt: string; thumbnailImageSrc: string }) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
                activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '400px' }}>
                {
                    images && images.map((image, index) => (
                        <div className="col-4" key={index}>
                            <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={() => {
                                setActiveIndex(index);
                                if (galleria.current) {
                                    galleria.current.show();
                                }
                            }} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}