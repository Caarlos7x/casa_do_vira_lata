import React from 'react';
import Image from 'next/image'; // Importe o componente Image do Next.js
import WhatsAppImg from '../../../public/images/whatsapp1.png';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/5511999999999" // Substitua pelo seu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <Image src={WhatsAppImg} alt="WhatsApp" />
        </a>
    );
};

export default WhatsAppButton;
