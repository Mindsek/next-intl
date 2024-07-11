"use server"
import { cookies } from 'next/headers';
const oneYear = 365 * 24 * 60 * 60 * 1000
// 1. Create a session

export const updateLocale = (locale: string) => {
    const currentLocale = getLocale();
    if (currentLocale === locale) {
        return;
    }
    createSession(locale);
}

const createSession = (locale: string) => {
    cookies().set({
        name: 'NEXT_LOCALE',
        value: locale,
        httpOnly: true,
        path: '/',
        maxAge: oneYear,
        expires: new Date(Date.now() + oneYear),
        secure: true,
    })
}

const getLocale = () => {
    return cookies().get('NEXT_LOCALE')?.value;
}