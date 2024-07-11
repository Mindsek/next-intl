import Products from "@/components/pages/Products/Products";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
interface SearchParamsTshirtProps {
    searchParams: {
        color: string
        size: string
    }
}
const ProductsPage = ({ searchParams }: SearchParamsTshirtProps) => {
    return <Products searchParams={searchParams} />
}

export default ProductsPage

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    return {
        title: t("pages.products"),
    };
}