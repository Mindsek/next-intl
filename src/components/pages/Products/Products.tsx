import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useProducts } from "./Products.logic";

interface SearchParamsTshirtProps {
    searchParams: {
        color: string
        size: string
    }
}
const Products = ({ searchParams }: SearchParamsTshirtProps) => {
    const logic = useProducts({ searchParams })
    return (
        <section className="flex flex-col items-center justify-center p-8">
            <Card className="flex flex-col justify-center items-center">
                <CardHeader>
                    <CardTitle>{logic.title}</CardTitle>
                    <CardDescription>{logic.description}</CardDescription>
                </CardHeader>
                <CardContent className={
                    cn(
                        "flex justify-center items-center w-60 h-60",
                        logic.selectedSize === "S" ? "p-12" : logic.selectedSize === "M" ? "p-8" : "p-4"
                    )
                }>
                    <Image src={logic.imageUrls[logic.selectedColor as keyof typeof logic.imageUrls]} alt={logic.selectedColor} width={200} height={200} priority className="w-auto h-auto" />
                </CardContent>
                <CardFooter className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold">Color</h3>
                        <div className="flex gap-2">
                            {logic.colors.map((color) => (
                                <Link key={color.name} href={`?color=${color.name}&size=${logic.selectedSize}`} className={
                                    cn(
                                        "text-lg font-bold",
                                        logic.selectedColor === color.name ? "text-blue-500" : "text-gray-500"
                                    )
                                }>
                                    {color.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Size</h3>
                        <div className="flex gap-2">
                            {logic.sizes.map((size) => (
                                <Link key={size} href={`?color=${logic.selectedColor}&size=${size}`} className={
                                    cn(
                                        "text-lg font-bold rounded-xl border border-foreground w-16 h-16 flex justify-center items-center",
                                        logic.selectedSize === size ? "text-blue-500" : "text-gray-500"
                                    )
                                }>
                                    {size}
                                </Link>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Products