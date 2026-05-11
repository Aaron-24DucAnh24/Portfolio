import { ContactPage } from '@/components/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Contact Page',
};

export default function Page() {
  return (
    <main className='h-min-fit-screen mt-16'>
      <ContactPage />
    </main>
  );
}
