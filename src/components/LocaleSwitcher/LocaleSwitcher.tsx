import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import useLocaleSwitcher from "./LocaleSwitcher.logic";


export default function LocaleSwitcher() {
    const logic = useLocaleSwitcher();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button type="button" variant="ghost" size="icon" disabled={logic.isPending}>
                    <Image src={logic.imageLocale} alt={logic.imageLocale.alt} width={20} height={20} />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {logic.languages.map((language) => (
                    <DropdownMenuItem key={language.locale} onClick={() => logic.handleLocaleChange(language.locale)} className="flex items-center gap-2">
                        <Image src={language.icon} alt={language.alt} width={20} height={20} />
                        {language.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};