import React from 'react';
import './Toolbar.css';

// import { IonButtons, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPopover, IonToolbar } from '@ionic/react';

function Navbar() {
  // const [showPopover, setShowPopover] = useState(false);
  // const [popoverEvent, setPopoverEvent] = useState<MouseEvent | undefined>(undefined);

  // const items = [
  //   { label: 'Quem somos' },
  //   { label: 'Adote' },
  //   { label: 'Contato' },
  // ];

  // const handleMenuButtonClick = (event: React.MouseEvent<HTMLIonMenuButtonElement>) => {
  //   console.log("Menu button clicked");
  //   setPopoverEvent(event.nativeEvent);
  //   setShowPopover(true);
  // };


  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <a href="#main">
            <h1>Casa do</h1>
            <h1>Vira-lata</h1>
          </a>
          
        </div>

        <div className="nav-links">
          <a href="#about">Quem Somos</a>
          <a href="#adopt">Adote</a>
          <a href="https://wa.me/5511999999999" target='_blank'>Contato</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
