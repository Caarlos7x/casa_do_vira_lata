import React, { useState, useEffect } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import Rifa from '../../../public/images/rifa-mes-101112-casa-do-vira-lata-17268645003924.jpg';
import Tshirt from '../../../public/images/MRX-Camiseta-Jao-ONG-Miniatura.jpg';
import Image, { StaticImageData } from 'next/image';
import './CarousselMerchant.css';

interface Product {
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
    price: number;
    inventoryStatus: string;
    url: string;
}

export default function CircularDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const loadedProducts: Product[] = [
            {
                id: '1',
                name: 'Rifa Casa Vira Lata',
                description: 'Rifa solidária Casa do Vira Lata.',
                image: Rifa,
                price: 10.0,
                inventoryStatus: 'INSTOCK',
                url: 'https://rd.app/s/ckazDzWsdpc?fbclid=PAZXh0bgNhZW0CMTEAAaZwHRXmmk9IBJYRImw63IipaoXgR07LOVhYvItxNAPq5zVVWdHQj7mm72k_aem_ix86i5OxVkac8g4kAP2qYw'
            },
            {
                id: '2',
                name: 'Camiseta ONG Jão',
                description: 'Camiseta ONG Jão.',
                image: Tshirt,
                price: 90.0,
                inventoryStatus: 'LOWSTOCK',
                url: 'https://merch.com.br/jao_/camiseta-jao-let-it-miau/?fbclid=PAZXh0bgNhZW0CMTEAAaaRsJvf3tvFLt6GB-rMqpXeJmZWunmhK3dgu-8X3rZRnmwjItm29O1uhyI_aem_v_zYNjQG3cnL2q1_Uo8zmg'
            }
        ];

        setProducts(loadedProducts);
    }, []);


    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const productTemplate = (product: Product) => {
        return (
            <a 
                href={product.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-1 surface-border border-round m-2 text-center py-5 px-3"
            >
                <div className="mb-3">
                    <Image 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image shadow-2" 
                        width={150} 
                        height={150} 
                    />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">{formatPrice(product.price)}</h6>
                </div>
            </a>
        );
    };

    return (
        <div className="card">
            <Carousel 
                value={products} 
                numVisible={2} 
                numScroll={1} 
                responsiveOptions={responsiveOptions} 
                className="custom-carousel"
                circular
                autoplayInterval={3000} 
                itemTemplate={productTemplate} 
            />
        </div>
    );
}
