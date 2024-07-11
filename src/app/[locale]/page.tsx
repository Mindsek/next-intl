import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import GB from '../../../public/GB.svg';
export default function Index({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return (
    <section className='flex flex-col items-center p-16 gap-8'>
      <h1>{t('title')}</h1>
      <Button>Click me</Button>
      <Link href="/zzz" className='bg-foreground text-background px-4 py-2 rounded-xl'>Go to Page not found</Link>

      <Image src="/blue.png" alt="Book 1" width={100} height={100} />
      <Image src={GB} alt="England" width={100} height={100} />
    </section>
  );
}


