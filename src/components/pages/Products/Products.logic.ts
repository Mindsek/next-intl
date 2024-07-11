import { useTranslations } from 'next-intl';
import blue from "../../../../public/blue.png";
import green from "../../../../public/green.png";
import white from "../../../../public/white.png";


interface SearchParamsTshirtProps {
    searchParams: {
        color: string
        size: string
    }
}
export const useProducts = ({ searchParams }: SearchParamsTshirtProps) => {
    const selectedColor = searchParams.color ?? "white"
    const selectedSize = searchParams.size ?? "S"
    const colors = ["white", "blue", "green"]
    const sizes = ["S", "M", "L"]
    const t = useTranslations('Products');
    const imageUrls = {
        white: white,
        blue: blue,
        green: green,
    }
    return {
        selectedColor,
        selectedSize,
        title: t("title"),
        description: t("description"),
        colors: colors.map(color => ({ name: color, label: t(`colors.${color}`) })),
        sizes,
        imageUrls: imageUrls,
    }
}


