export const metadataRoutes = [
    {
        pathname: '/',
        en: '/',
        fr: '/',
        metadataText: "LandingPage"
    },
    {
        pathname: '/products',
        en: '/products',
        fr: '/produits',
        metadataText: "Products"
    },
]
// acc for the pathnames and route for the locales
export const pathnames = metadataRoutes.reduce((acc: any, route) => {
    acc[route.pathname] = {
        en: route.en,
        fr: route.fr
    };
    return acc;
}, {});
export const locales = ['en', 'fr'];