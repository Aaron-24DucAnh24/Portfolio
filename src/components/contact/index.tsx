import { MdEmail, MdPhone, MdContactPage } from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ContactCard } from './ContactCard';
import { SOCIAL_LINKS } from '@/utils/constants';

export const ContactPage = () => {
  return (
    <div className='max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'>
      <h1 className='pb-2 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Contact'}
        <MdContactPage color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-col space-y-3'>
        <ContactCard
          label='GitHub'
          value='Aaron-24DucAnh24'
          href={SOCIAL_LINKS.GITHUB}
          icon={<FaGithub size={20} />} />
        <ContactCard
          label='LinkedIn'
          value='Duc Anh Bui'
          href={SOCIAL_LINKS.LINKEDIN}
          icon={<FaLinkedin size={20} />} />
        <ContactCard
          label='Email'
          value='buingocducanh24@gmail.com'
          href={SOCIAL_LINKS.EMAIL}
          icon={<MdEmail size={20} />} />
        <ContactCard
          label='Phone'
          value='+84 964 778 339'
          href={SOCIAL_LINKS.PHONE}
          icon={<MdPhone size={20} />} />
        <ContactCard
          label='Facebook'
          value='Bui Ngoc Duc Anh'
          href={SOCIAL_LINKS.FACEBOOK}
          icon={<FaFacebook size={20} />} />
      </div>
    </div>
  );
};
