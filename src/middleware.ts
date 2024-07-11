import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'fr'],

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'never'
});

export const config = {
    matcher: [
        '/',
        '/(fr|en)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|GB.svg|FR.svg).*)'
    ]
};