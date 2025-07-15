// pages/_app.js
import Menu from '../components/menu'
import Footer from '../components/footer'
import './home.css'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const defaultSEO = {
  title: 'NYC - Empresa de Seguridad',
  description: 'Empresa de Seguridad. Servicios de seguridad privada: seguridad fisica y seguridad electronica con mas de 23 años de experiencia ',
  canonical: 'https://nycseguridad.com.ar',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url:'https://nycseguridad.com.ar',
    site_name: 'nycseguridad',
  }
}

  export default function App({ Component, pageProps }) {
  return (
    <div>
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}