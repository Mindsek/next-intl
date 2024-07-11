import Header from '@/components/layout/Header/Header';
import { cn } from '@/lib/utils';
import { ThemeProviders } from '@/theme/ThemeProvider';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout(props: Props) {
  unstable_setRequestLocale(props.params.locale);
  const messages = await getMessages();
  return (
    <html lang={props.params.locale} suppressHydrationWarning className="h-full">
      <body
        className={cn("bg-background h-full flex flex-col")}
      >
        <ThemeProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <div className='flex-1 max-w-7xl m-auto w-full'>
              {props.children}
            </div>
          </NextIntlClientProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}

// Can be imported from a shared config
const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      default: t("pages.home") + " - NEXT-INTL",
      template: "%s - NEXT-INTL",
    },
    description: t("description"),
  };
}