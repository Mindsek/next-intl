"use client";
import { updateLocale } from "@/app/[locale]/auth/cookies";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from 'react';
import FR from '../../../public/FR.svg';
import GB from '../../../public/GB.svg';
const languages = [
    {
        locale: "en",
        label: "English",
        icon: GB,
        alt: "United Kingdom",
    },
    {
        locale: "fr",
        label: "Français",
        icon: FR,
        alt: "France",
    },
];

export default function useLocaleSwitcher() {
    const locale = useLocale();
    const imageLocale = locale === "en" ? GB : FR;
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleLocaleChange = (newLocale: string) => {
        console.log("newLocale", newLocale);
        updateLocale(newLocale);
        startTransition(() => {
            router.refresh();
        });
    }
    return {
        languages,
        handleLocaleChange,
        imageLocale,
        isPending,
    }

};