// import profile images
import ProfilePhoto1 from '../src/assets/img/profile1.png';
import ProfilePhoto2 from '../src/assets/img/profile2.png';
import ProfilePhoto3 from '../src/assets/img/profile3.png';

// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png';
import Skill2 from '../src/assets/img/skills/skill2.png';
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill5 from '../src/assets/img/skills/skill5.png';
import Skill6 from '../src/assets/img/skills/skill6.png';

// import team images
import TeamMember1 from '../src/assets/img/lawyer1.png';
import TeamMember2 from '../src/assets/img/lawyer2.png';
import TeamMember3 from '../src/assets/img/lawyer3.png';

// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
import YoutubeIcon from '../src/assets/img/social/youtube.png';
import PinterestIcon from '../src/assets/img/social/pinterest.png';

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
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
    name: 'Jane Cooper',
    image: ProfilePhoto1,
    position: 'Web Developer',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
    name: 'Theresa Webb',
    image: ProfilePhoto2,
    position: 'Web Designer',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
    name: 'Kathryn Murphy',
    image: ProfilePhoto3,
    position: 'UI/UX Designer',
  },
];

// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Familia',
    description:
      'Brindamos asesoramiento y representación en casos de divorcio, custodia, manutención, adopciones y derecho de familia.',
  },
  {
    icon: Skill2,
    title: 'Trabajo',
    description:
      'Brindamos asesoramiento y representación en casos de derecho laboral, discriminación, acoso, despidos y compensación.',
  },
  {
    icon: Skill3,
    title: 'Bienes inmuebles',
    description:
      'Brindamos servicios legales de bienes inmuebles, incluyendo transacciones, arrendamientos, construcción, litigios y desarrollo.',
  },
  {
    icon: Skill4,
    title: 'Fiscalidad',
    description:
      'Brindamos asesoramiento y representación en casos de fiscalidad, impuestos, planificación patrimonial y cumplimiento normativo.',
  },
  {
    icon: Skill5,
    title: 'Corporativo',
    description:
      'Brindamos servicios legales corporativos, incluyendo fusiones y adquisiciones, financiamiento, cumplimiento normativo y litigios.',
  },
  {
    icon: Skill6,
    title: 'Bancario',
    description:
      'Brindamos asesoramiento y representación en casos de derecho bancario y financiero, incluyendo préstamos, garantías, ejecuciones y litigios.',
  },
];

// team data
export const team = [
  {
    image: TeamMember1,
    name: 'Veronica Pourrieux',
    position: 'Abogada y Escribana',
    /* description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.', */
  },
  {
    image: TeamMember3,
    name: 'Hugo Cabrera',
    position: 'Abogado y Escribano',
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
export const social = [
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
];
