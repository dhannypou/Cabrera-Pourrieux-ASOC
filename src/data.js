// import profile images
/* import ProfilePhoto1 from '../src/assets/img/profile1.png';
import ProfilePhoto2 from '../src/assets/img/profile2.png';
import ProfilePhoto3 from '../src/assets/img/profile3.png'; */

// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png';
import Skill2 from '../src/assets/img/skills/skill2.png';
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill5 from '../src/assets/img/skills/skill5.png';
import Skill6 from '../src/assets/img/skills/skill6.png';
import skill7 from '../src/assets/img/skills/skill7.png';
import skill8 from '../src/assets/img/skills/skill8.png';

// import team images
import TeamMember1 from '../src/assets/img/lawyer1.png';
import TeamMember2 from '../src/assets/img/lawyer2.png';
import TeamMember3 from '../src/assets/img/lawyer3.png';

// import social icons
/* import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
import YoutubeIcon from '../src/assets/img/social/youtube.png';
import PinterestIcon from '../src/assets/img/social/pinterest.png'; */

// navigation data
export const navigation = [
  {
    name: 'Inicio',
    href: 'home',
  },
  {
    name: 'Actividades',
    href: 'skills',
  },
  {
    name: 'Nuestro equipo',
    href: 'team',
  },
  {
    name: 'Contáctenos',
    href: 'contact',
  },
];

// testimonials data
export const testimonials = [
  {
    text: 'Tuve un problema con la sucesión de mi madre y me alegra decir que fue resuelto de manera rápida y eficiente.',
    name: 'Teresa Martinez',
    position: 'Ama de Casa',
    /*  image: ProfilePhoto1, */
  },
  {
    text: 'Durante mi proceso de divorcio, mi ex esposa me impedía ver a mis hijos, lo cual fue muy doloroso y difícil de sobrellevar. Afortunadamente, alguien me recomendó el estudio jurídico Cabrera-Pourrieux & ASOC., y gracias a su experta asesoría y dedicación, pude establecer rápidamente un régimen de visitas justo y adecuado para mí y mis hijos. Estoy profundamente agradecido con ellos por su valioso apoyo durante este difícil momento. ',
    name: 'Abel Peralta',
    position: 'Ingeniero',
   /*  image: ProfilePhoto3, */
  },
  {
    text: 'Desafortunadamente, perdí mi trabajo, pero estoy agradecido con los doctores que me brindaron una defensa impecable durante ese difícil momento.',
    name: 'Miguel Juarez',
    position: 'Mecánico',
  /*   image: ProfilePhoto2, */
  },
  {
    text: 'Sufrir un choque automovilístico puede ser un evento estresante, y la situación se complica aún más si el seguro no te responde adecuadamente. Por suerte, encontré a estos abogados excelentes que me ayudaron a solucionar el problema de manera inmediata. Estoy agradecida por su ayuda y profesionalismo en esos momentos difíciles.',
    name: 'Marta Robles',
    position: 'Empleada',
   /*  image: ProfilePhoto3, */
  },
];

// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Familia',
    description:
      'Brindamos asesoramiento y representación en casos de divorcio, separacion de bienes, regimen comunicacional, alimentos y adopciones, sucesiones.',
  },
  {
    icon: Skill2,
    title: 'Trabajo',
    description:
      'Brindamos asesoramiento y representación en casos de derecho laboral, discriminación, acoso laboral, despidos y indemnizaciones, ART, Daño emergente, Lucro cesante.',
  },
  {
    icon: Skill3,
    title: 'Bienes inmuebles',
    description:
      'Brindamos servicios legales de bienes inmuebles, incluyendo transacciones, compraventa, contratos de alquiler, desalojos, usurpacion, prescripcion adquisitiva.',
  },
  {
    icon: Skill4,
    title: 'Accidentes de Tránsito',
    description:
      'Brindamos asesoramiento y representación en casos de siniestros, daños, robos de vehiculos, intimación a seguros.',
  },
  {
    icon: Skill5,
    title: 'Problemas Penales',
    description:
      'Violencia doméstica, delitos y lesiones, calumnias e injurias, Delitos sexuales, Delitos de acoso y amenazas.',
  },
  {
    icon: Skill6,
    title: 'Previsional',
    description:
      'Brindamos asesoramiento y acompañamiento con problemas de ANSES, jubilaciones, pensiones, trámites por discapacidad.',
  },
  {
    icon: skill8,
    title: 'Daños y Perjuicios',
    description:
      'Brindamos asesoramiento y acompañamiento en defensa al consumidor, Indemnización por daños y perjuicios, Incumplimiento de contrato, Daños a la propiedad, Daños morales, Daños por fraude o estafa, Daños por difamación o injuria,  .',
  },
  {
    icon: skill7,
    title: 'Gestoría del automotor',
    description:
      'Brindamos asesoramiento y acompañamiento con problemas de cambio de titularidad, Transferencias de vehículos, compraventa de automotores, Cambio de radicación de vehículos, Informe de dominio, Denuncia de venta de vehículos, Baja de vehículos.',
  },
];

// team data
export const team = [
  {
    image: TeamMember1,
    name: 'Dra. Veronica Pourrieux',
    position: 'Abogada, Procuradora, Escribana,',
    position1:'Gestor del Automotor'
    /* description:
      'Abogada, Procuradora y Escribana.', */
  },
  {
    image: TeamMember3,
    name: 'Dr. W. Hugo Cabrera',
    position: 'Abogado, Procurador, Escribano,',
    position1:'Gestor del Automotor'
   /*  description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.', */
  },
  {
    image: TeamMember2,
    name: 'ASOC.',
    position: 'Abogados Asociados',
    /* description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.', */
  },
];

// social data
/* export const social = [
  {
    icon: FacebookIcon,
  }, 
  {
    icon: TwitterIcon,
  }, 
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
]; */
