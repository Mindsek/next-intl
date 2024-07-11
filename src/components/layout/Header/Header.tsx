"use client";
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { cn } from '@/lib/utils';
import { ModeToggle } from "@/theme/ThemeToggle";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Header = () => {
    const t = useTranslations('Navigation');
    return (
        <nav className={
            cn(
                'flex py-4 w-full transition-all border-b border-primary h-[10dvh]'
            )
        }>
            <div className='w-[90%] max-w-7xl mx-auto flex justify-between items-center'>
                <div className='flex gap-8 items-center bg-red-400'>
                    <Link href={`/`} className='md:lg:text-2xl font-extrabold uppercase'>
                        {t('home')}
                    </Link>

                    <Link href={`/products`} className='md:lg:text-2xl font-extrabold uppercase'>
                        {t('products')}
                    </Link>
                </div>

                <LocaleSwitcher />

                <ModeToggle />
            </div>
        </nav >
    )
}

export default Header