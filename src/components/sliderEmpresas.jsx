import React, { useState, useEffect } from 'react';
import styles from './sliderEmpresas.module.css';

export default function SliderEmpresas() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    { src: '/images/novomet-logo.png', alt: "Novomet" },
    { src: '/images/pecom_color_logotipo.svg', alt: "Pecom" },
    { src: '/images/logoEnergiadelSur.png', alt: "Energia del Sur" },
    { src: '/images/supercanal-logo.png', alt: "Supercanal S.A" },
    { src: '/images/logo-crane.svg', alt: "Crane" },
    { src: '/images/Ulterra-logo.jpeg', alt: "Ulterra" },
    { src: '/images/Grupo Dragon_ Logo Negro.png', alt: "Grupo Dragon" },
    { src: '/images/geovial.jpg', alt: "Geovial" }
  ];

  const getSlidesPerView = () => {
    if (windowWidth >= 1024) return 5;
    if (windowWidth >= 768) return 4;
    if (windowWidth >= 640) return 3;
    return 2;
  };

  const slidesPerView = getSlidesPerView();
  
  return (
    <>
      <h2 className={styles.sliderTittle}>Empresas que nos eligen</h2>
      <div className={styles.sliderContainer}>
        <div 
          className={styles.sliderTrack}
          style={{
            '--slides-per-view': slidesPerView,
            '--total-slides': logos.length * 2,
          }}
        >
          {/* Primera set de logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className={styles.slideItem}>
              <img 
                className={`${styles.logoEmpresa} ${index === 2 ? styles.logoEspecial : ''}`}
                src={logo.src} 
                alt={logo.alt} 
              />
            </div>
          ))}
          
          {/* Segunda set de logos para loop infinito */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className={styles.slideItem}>
              <img 
                className={`${styles.logoEmpresa} ${index === 2 ? styles.logoEspecial : ''}`}
                src={logo.src} 
                alt={logo.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}