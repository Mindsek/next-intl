"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
    const t = useTranslations('NotFoundPage');

    useEffect(() => {
        document.title = t('title');
    }, [t]);

    return (
        <div className='flex justify-center items-center flex-col h-full gap-8'>
            <h2 className='text-2xl font-semibold'>{t('title')}</h2>
            <p className='text-gray-500'>{t('description')}</p>
            <Link href="/" className='bg-foreground text-background px-4 py-2 rounded-xl'>{t('link')}</Link>
        </div>
    );
}