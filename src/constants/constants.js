export const projects = [
  {
    title: 'Portfolio website',
    description: "This one page portfolio website was created using Next.js. Styling was done with styled-components and the logo and the hero section animated background were implemented using Three.js.",
      image: '/images/portfolio-react.png',
      tags: ['React', 'Next.js', 'styled-components', 'Three.js'],
    source: 'https://github.com/VesaMalaska/portfolio',
    visit: 'https://portfolio-two-bay.vercel.app/',
    id: 0,
  },
  {
    title: 'Animated Filtering',
    description:"On this Single Page Application the data is fetched from The Movie Database (TMDB) REST API and then shown in grid layout. The shown data can be filtered out with the genre buttons. Transitions in grid layout are animated using Framer Motion library.",
    image: '/images/Motion-animation-project-img.png',
    tags: ['React', 'Framer Motion'],
    source: 'https://github.com/VesaMalaska/Animated-Filtering',
    visit: 'https://animated-filtering.herokuapp.com/',
    id: 1,
  },
  {
    title: 'Chat backend',
    description:"Chat system implemented with Socket.io. Idea is to have chat client on web page and a admin panel for chat operators.",
    image: '/images/chat-system-socketio.png',
    tags: ['Express.js', 'Socket.io', 'MongoDB'],
    source: '',
    visit: '',
    id: 2,
  },
  {
    title: 'CRM/ERP backend',
    description:"Express REST API backend to handle the data flow for CRM web app where REST API endpoints are restricted with JWT authentication middlewares.",
    image: '/images/ERP-backend.png',
    tags: ['Express.js', 'JWT', 'MongoDB'],
    source: '',
    visit: '',
    id: 3,
  },
  {
    title: 'WooCommerce-Netvisor integration',
    description:"Integration solution for customer's two different WooCommerce web shops and Netvisor financial management system. The product quantities were synchronized between the two web shops, sales data was synchronized from web shops to Netvisor and sales reports were generated automatically as XLSX spreadsheets.",
    image: '/images/woocommerce-netvisor-integration.png',
    tags: ['CodeIgniter', 'MySQL', 'HTML/Bootstrap'],
    source: '',
    visit: '',
    id: 4,
  },
  {
    title: 'Toimistopoika website',
    description:"WordPress website created using Elementor.",
    image: '/images/toimistopoika-wordpress.png',
    tags: ['WordPress', 'MySQL'],
    source: '',
    visit: 'https://toimistopoika.fi',
    id: 5,
  },
  {
    title: 'Hetiverkkokauppa website',
    description:"WordPress website created using Elementor.",
    image: '/images/hetiverkkokauppa-wordpress.png',
    tags: ['WordPress', 'MySQL'],
    source: '',
    visit: 'https://hetiverkkokauppa.fi',
    id: 5,
  },
  {
    title: 'Tilaaverkkokauppa website',
    description:"WordPress website created using Elementor.",
    image: '/images/tilaaverkkokauppa-wordpress.png',
    tags: ['WordPress', 'MySQL'],
    source: '',
    visit: 'https://tilaaverkkokauppa.fi',
    id: 5,
  },
  {
    title: 'SkuuttiBuutti e-commerce',
    description: "E-commerce website implemented with WordPress and WooCommerce.",
      image: '/images/skuuttibuutti-woocommerce.png',
      tags: ['WordPress', 'WooCommerce', 'MySQL'],
    source: '',
    visit: 'https://skuuttibuutti.fi',
    id: 6,
  },
  {
    title: 'Noonknit e-commerce',
    description: "E-commerce website implemented with WordPress and WooCommerce.",
    image: '/images/noonknit-woocommerce.png',
    tags: ['WordPress', 'WooCommerce', 'MySQL'],
    source: '',
    visit: 'https://noonknit.fi',
    id: 7,
  },
];

export const TimeLineData = [
  { year: 2000, text: 'Created my first website for a paying customer', },
  { year: 2002, text: 'Coded a Pac Man style game with Adobe Director', },
  { year: 2003, text: 'Started working as IT Support Specialist', },
  { year: 2008, text: 'Started working as IT System Administrator', },
  { year: 2010, text: 'Started my own business', },
];
