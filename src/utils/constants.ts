export const STATIC_URLS = {
  LOGO: '/image/22-logo.png',
  ERROR_404: '/image/404.png',
  WAVING_HAND: '/image/waving-hand.png',
  DUCANH: '/image/ducanh.jpg',
  PETOPIA: '/image/petopia.png',
  CV: 'https://drive.google.com/drive/folders/1oJ4_Kta3MXeWfJUvFn2JWXPjX-oCK1Ci?usp=sharing',
};

export const NAV_ROUTES = [
  { path: '/',            label: 'Home' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/projects',    label: 'Projects' },
  { path: '/education',   label: 'Education' },
  { path: '/skills',      label: 'Skills' },
  { path: '/contact',     label: 'Contact' },
] as const;

export const PATH_NAME = {
  HOME: '/',
  EDUCATION: '/education',
  EXPERIENCES: '/experiences',
  SKILLS: '/skills',
  PROJECTS: '/projects',
  CONTACT: '/contact',
};

export const TAB_NAME = {
  HOME: 'Home',
  EDUCATION: 'Education',
  EXPERIENCES: 'Experiences',
  SKILLS: 'Skills',
  CONTACT: 'Contact',
  PROJECTS: 'Projects',
};

export const SKILLS = [
  { name: 'Programming', items: ['TypeScript', 'Python', 'C#', 'JavaScript'] },
  { name: 'Frontend',    items: ['NextJs', 'ReactJs', 'Tailwind', 'MobX', 'Redux'] },
  { name: 'Backend',     items: ['.NET', 'MSSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { name: 'Tools',       items: ['Docker', 'Git', 'Claude Code'] },
];

export const STORAGE_KEY = {
  MODE: 'MODE',
};

export const MODE = {
  DARK: 'Dark',
  LIGHT: 'Light',
  SYSTEM: 'System',
};

export const SOCIAL_LINKS = {
  FACEBOOK: 'https://www.facebook.com/ngocducanh.bui',
  GITHUB: 'https://github.com/Aaron-24DucAnh24',
  EMAIL: 'mailto:buingocducanh24@gmail.com',
  PHONE: 'tel:+84964778339',
  LINKEDIN: 'https://www.linkedin.com/in/duc-anh-bui-2143b7275/',
};